#!/usr/bin/env node
/* ============================================================================
   PAINEL DE MERCADO -- o coletor.

   Busca indicadores do mercado imobiliario em FONTES PUBLICAS E GRATUITAS para
   cada estado em que a AMGlobal atua, escreve uma leitura curta por estado e
   grava tudo em ../mercado-dados.js, que o site le. Roda uma vez por mes:

       cd ferramentas && npm install && node coletar-mercado.js

   Nao ha servidor, banco, n8n nem servico pago. So este arquivo, Node 18 ou
   mais novo (pelo fetch nativo) e a biblioteca xlsx, para abrir a planilha do
   FipeZap.

   FONTES
   - FipeZap (Fipe + ZAP): preco medio por m2 de venda e aluguel, variacoes e
     rentabilidade, por cidade. Planilha publica, mensal.
   - Banco Central (API SGS, aberta): Selic (432), IPCA em 12 meses (13522) e o
     IVG-R, indice de precos dos imoveis financiados (21340).
   - Zillow Research (arquivos abertos): valor tipico de residencia (ZHVI) e
     imoveis a venda, por regiao metropolitana da Florida. Mensal.
   - INE Portugal (API aberta, indicador 0012234): preco mediano de venda por
     m2 nos ultimos 12 meses, por municipio. Trimestral.
   - Dubai Land Department (API aberta, sem chave, a mesma que a pagina "Real
     Estate Data" do DLD usa): todas as vendas residenciais do ultimo mes
     completo, de onde saem a mediana por m2, o numero de vendas, o valor
     mediano por venda e a parcela na planta. So cobre o ano corrente, entao a
     variacao e "desde janeiro" e "frente ao mes anterior", nunca 12 meses.

   A IA
   A leitura de cada estado e escrita a partir dos numeros coletados e de MAIS
   NADA. Por padrao, um modelo fixo em codigo monta as frases (sem custo, sem
   chave). Se existir a variavel de ambiente GEMINI_API_KEY (nivel gratuito do
   Google AI Studio), o Gemini reescreve a leitura com os mesmos numeros; se a
   chamada falhar, fica o modelo fixo. Em nenhum caso a IA e fonte de numero.

   REGRAS
   - Numero sem fonte e data nao entra.
   - Fonte fora do ar vira "sem dado", nunca um valor inventado.
   - Variacao observada, nunca previsao.
   ============================================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
let XLSX = null;
try { XLSX = require('xlsx'); } catch (e) { /* sem xlsx: FipeZap vira "sem dado" */ }

const UA = 'Mozilla/5.0 (compatible; AMGlobal-mercado/1.0; +https://www.amglobalrealty.com)';
const SAIDA = path.join(__dirname, '..', 'mercado-dados.js');
const HOJE = new Date();

/* ------------------------------------------------------------------ util --- */
const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
const MES_CURTO = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
function log(msg) { console.log('  ' + msg); }
function excelParaData(serial) { return new Date(Date.UTC(1899, 11, 30) + Math.round(serial) * 86400000); }
function mesAno(d) { return MESES[d.getUTCMonth()] + ' de ' + d.getUTCFullYear(); }
function mesAnoCurto(d) { return MES_CURTO[d.getUTCMonth()] + '/' + d.getUTCFullYear(); }
function num(x) { return typeof x === 'number' && isFinite(x) ? x : null; }
function pct(a, b) { return a != null && b != null && b !== 0 ? (a / b - 1) * 100 : null; }
function arred(x, casas) { return x == null ? null : Math.round(x * Math.pow(10, casas)) / Math.pow(10, casas); }
function fmtBR(x, casas) {
  if (x == null) return null;
  return x.toLocaleString('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas });
}
function fmtPct(x) { return x == null ? null : (x > 0 ? '+' : '') + fmtBR(x, 1) + '%'; }
function subiuCaiu(x) { return x == null ? 'sem variação' : x > 0 ? 'subiu ' + fmtBR(x, 1) + '%' : x < 0 ? 'caiu ' + fmtBR(-x, 1) + '%' : 'ficou estável'; }

// ate tres tentativas: o Banco Central, em especial, as vezes devolve XML ou
// uma pagina de erro no lugar do JSON e acerta na chamada seguinte
async function baixar(url, tipo, tentativas) {
  const vezes = tentativas || 3;
  let erro = null;
  for (let i = 1; i <= vezes; i++) {
    try {
      const r = await fetch(url, { headers: { 'User-Agent': UA, 'Accept': tipo === 'json' ? 'application/json' : '*/*' }, redirect: 'follow' });
      if (!r.ok) throw new Error('HTTP ' + r.status + ' em ' + url);
      if (tipo === 'json') {
        const texto = await r.text();
        if (!/^\s*[\[{]/.test(texto)) throw new Error('resposta nao e JSON (' + texto.slice(0, 30).replace(/\s+/g, ' ') + '...)');
        return JSON.parse(texto);
      }
      if (tipo === 'texto') return r.text();
      return Buffer.from(await r.arrayBuffer());
    } catch (e) {
      erro = e;
      if (i < vezes) await new Promise(res => setTimeout(res, 1500 * i));
    }
  }
  throw erro;
}
async function tentar(nome, fn) {
  try { const v = await fn(); log('ok     ' + nome); return v; }
  catch (e) { log('FALHOU ' + nome + ': ' + e.message); return null; }
}

/* ----------------------------------------------------------- 1. Banco Central */
async function bancoCentral() {
  const serie = async (n, k) => baixar('https://api.bcb.gov.br/dados/serie/bcdata.sgs.' + n + '/dados/ultimos/' + k + '?formato=json', 'json');
  const dataBR = (s) => { const [d, m, a] = s.split('/').map(Number); return new Date(Date.UTC(a, m - 1, d)); };
  const selic = await tentar('Banco Central: Selic (432)', async () => {
    const d = await serie(432, 1); const u = d[d.length - 1];
    return { valor: Number(u.valor), texto: fmtBR(Number(u.valor), 2) + '% ao ano', referencia: 'vigente em ' + mesAno(HOJE), fonte: 'Banco Central, série 432' };
  });
  const ipca = await tentar('Banco Central: IPCA 12 meses (13522)', async () => {
    const d = await serie(13522, 1); const u = d[d.length - 1]; const dt = dataBR(u.data);
    return { valor: Number(u.valor), texto: fmtBR(Number(u.valor), 2) + '%', referencia: mesAnoCurto(dt), fonte: 'IBGE via Banco Central, série 13522' };
  });
  const ivgr = await tentar('Banco Central: IVG-R, preços de imóveis financiados (21340)', async () => {
    const d = await serie(21340, 13);
    if (d.length < 13) throw new Error('menos de 13 meses');
    const u = d[d.length - 1], a = d[d.length - 13];
    const v = pct(Number(u.valor), Number(a.valor));
    return { valor: arred(v, 1), texto: fmtPct(arred(v, 1)) + ' em 12 meses', referencia: mesAnoCurto(dataBR(u.data)), fonte: 'Banco Central, IVG-R (série 21340)' };
  });
  return { selic, ipca, ivgr };
}

/* ----------------------------------------------------------------- 2. FipeZap */
const FIPEZAP_URL = 'https://downloads.fipe.org.br/indices/fipezap/fipezap-serieshistoricas.xlsx';
const CIDADES_FIPEZAP = ['Índice FipeZAP', 'São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Balneário Camboriú', 'Itajaí', 'Curitiba', 'Porto Alegre', 'Goiânia'];

async function fipezap() {
  if (!XLSX) { log('FALHOU FipeZap: biblioteca xlsx ausente (rode npm install)'); return null; }
  return tentar('FipeZap: planilha de séries históricas', async () => {
    const buf = await baixar(FIPEZAP_URL, 'binario');
    const wb = XLSX.read(buf, { type: 'buffer' });
    const R = XLSX.utils.sheet_to_json(wb.Sheets['Resumo'], { header: 1, raw: true, defval: null });
    const linhaDatas = R.find(l => typeof l[2] === 'string' && /refer/i.test(l[2]));
    if (!linhaDatas) throw new Error('aba Resumo sem a linha de datas');
    const dataVenda = excelParaData(linhaDatas[3]);
    const dataAluguel = excelParaData(linhaDatas[7]);
    const cidades = {};
    for (const l of R) {
      if (typeof l[0] !== 'string' || !CIDADES_FIPEZAP.includes(l[0])) continue;
      cidades[l[0]] = {
        venda: num(l[6]), vendaVarMes: arred(num(l[4]) == null ? null : l[4] * 100, 2), vendaVar12: arred(num(l[5]) == null ? null : l[5] * 100, 1),
        aluguel: num(l[10]), aluguelVar12: arred(num(l[9]) == null ? null : l[9] * 100, 1),
        rentabilidadeAno: arred(num(l[12]) == null ? null : l[12] * 100, 1)
      };
    }
    const faltam = CIDADES_FIPEZAP.filter(c => !cidades[c]);
    if (faltam.length) log('       FipeZap sem: ' + faltam.join(', '));
    return { cidades, dataVenda, dataAluguel, fonte: 'FipeZap (Fipe e ZAP)' };
  });
}

/* ------------------------------------------------------------------ 3. Zillow */
function lerCsv(texto) {
  const linhas = [];
  for (const bruta of texto.split(/\r?\n/)) {
    if (!bruta) continue;
    const campos = []; let atual = ''; let aspas = false;
    for (const ch of bruta) {
      if (ch === '"') aspas = !aspas;
      else if (ch === ',' && !aspas) { campos.push(atual); atual = ''; }
      else atual += ch;
    }
    campos.push(atual);
    linhas.push(campos);
  }
  return linhas;
}
async function zillow() {
  const metro = async (url, nomeSerie) => {
    const L = lerCsv(await baixar(url, 'texto'));
    const cab = L[0];
    const iData = cab.findIndex(c => /^\d{4}-\d{2}-\d{2}$/.test(c));
    const pegar = (regiao) => {
      const l = L.find(x => x[2] === regiao);
      if (!l) throw new Error(nomeSerie + ' sem ' + regiao);
      const vals = l.slice(iData).map(v => v === '' ? null : Number(v));
      let fim = vals.length - 1; while (fim >= 0 && vals[fim] == null) fim--;
      const atual = vals[fim], antes = vals[fim - 12];
      return { valor: atual, var12: arred(pct(atual, antes), 1), data: cab[iData + fim] };
    };
    return { miami: pegar('Miami, FL'), orlando: pegar('Orlando, FL'), eua: pegar('United States') };
  };
  const zhvi = await tentar('Zillow: valor típico de residência (ZHVI), Miami e Orlando', () =>
    metro('https://files.zillowstatic.com/research/public_csvs/zhvi/Metro_zhvi_uc_sfrcondo_tier_0.33_0.67_sm_sa_month.csv', 'ZHVI'));
  const oferta = await tentar('Zillow: imóveis à venda, Miami e Orlando', () =>
    metro('https://files.zillowstatic.com/research/public_csvs/invt_fs/Metro_invt_fs_uc_sfrcondo_sm_month.csv', 'oferta'));
  return { zhvi, oferta, fonte: 'Zillow Research' };
}

/* --------------------------------------------------------------------- 4. INE */
async function ine() {
  return tentar('INE Portugal: preço mediano de venda por m² (0012234)', async () => {
    const meta = await baixar('https://www.ine.pt/ine/json_indicador/pindicaMeta.jsp?varcd=0012234&lang=PT', 'json');
    const ultimo = meta[0].UltimoPeriodo;                       // "1.º Trimestre de 2026"
    const m = ultimo.match(/(\d)\.º Trimestre de (\d{4})/);
    if (!m) throw new Error('período em formato inesperado: ' + ultimo);
    const tri = Number(m[1]), ano = Number(m[2]);
    const cod = (a, t) => 'S5A' + a + t;
    const valorTotal = async (geo, a) => {
      const d = await baixar('https://www.ine.pt/ine/json_indicador/pindica.jsp?op=2&varcd=0012234&Dim1=' + cod(a, tri) + '&Dim2=' + geo + '&lang=PT', 'json');
      const dados = d[0].Dados; const chave = Object.keys(dados)[0];
      const tot = (dados[chave] || []).find(x => x.dim_3 === 'H1' || /^Total$/i.test(x.dim_3_t));
      if (!tot) throw new Error('sem Total para ' + geo + ' em ' + a);
      return Number(String(tot.valor).replace(/\s/g, ''));
    };
    const lugares = { lisboa: '1A01106', cascais: '1A01105', portugal: 'PT' };
    const saida = {};
    for (const [nome, geo] of Object.entries(lugares)) {
      const agora = await valorTotal(geo, ano), antes = await valorTotal(geo, ano - 1);
      saida[nome] = { valor: agora, var12: arred(pct(agora, antes), 1) };
    }
    return Object.assign(saida, { referencia: tri + 'º trimestre de ' + ano, fonte: 'INE Portugal, indicador 0012234' });
  });
}

/* ------------------------------------------------------------------ 5. Dubai */
// API aberta do Dubai Land Department: POST com TODOS os P_* presentes (vazios
// quando nao usados), 2000 registros por pagina, sem chave. GROUP 1 = vendas,
// USAGE 1 = residencial. Um mes inteiro sao 6 a 9 paginas.
const DLD_URL = 'https://gateway.dubailand.gov.ae/open-data/transactions';
async function dldMes(ano, mes) {
  const ultimoDia = new Date(Date.UTC(ano, mes, 0)).getUTCDate();
  const mm = String(mes).padStart(2, '0');
  const corpo = (skip) => JSON.stringify({
    P_FROM_DATE: mm + '/01/' + ano, P_TO_DATE: mm + '/' + ultimoDia + '/' + ano,
    P_GROUP_ID: '1', P_IS_OFFPLAN: '', P_IS_FREE_HOLD: '', P_AREA_ID: '', P_USAGE_ID: '1', P_PROP_TYPE_ID: '',
    P_TAKE: '2000', P_SKIP: String(skip), P_SORT: ''
  });
  const todos = [];
  let total = null;
  for (let skip = 0; total == null || skip < total; skip += 2000) {
    let pagina = null;
    for (let t = 1; t <= 3 && !pagina; t++) {
      try {
        const r = await fetch(DLD_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'User-Agent': UA, 'Referer': 'https://dubailand.gov.ae/en/open-data/real-estate-data/' },
          body: corpo(skip)
        });
        if (!r.ok) throw new Error('HTTP ' + r.status);
        const j = await r.json();
        pagina = (j.response && j.response.result) || [];
      } catch (e) { if (t === 3) throw e; await new Promise(res => setTimeout(res, 2000 * t)); }
    }
    if (!pagina.length) break;
    if (total == null) total = Number(pagina[0].TOTAL) || pagina.length;
    for (const r of pagina) todos.push(r);
    if (pagina.length < 2000) break;
  }
  return { total: total || todos.length, registros: todos };
}
function mediana(v) {
  if (!v.length) return null;
  const s = v.slice().sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}
// so moradia de verdade: unidades e vilas, fora escritorio e loja (o DLD marca
// alguns como "residencial"), fora areas e valores absurdos
function resumoDld(mes) {
  const moradia = mes.registros.filter(r =>
    (r.PROP_TYPE_EN === 'Unit' || r.PROP_TYPE_EN === 'Villa')
    && !/office|shop|warehouse|show ?room|clinic|workshop|labou?r|store/i.test(r.PROP_SB_TYPE_EN || '')
    && Number(r.ACTUAL_AREA) > 15 && Number(r.TRANS_VALUE) > 100000);
  const porM2 = moradia.map(r => Number(r.TRANS_VALUE) / Number(r.ACTUAL_AREA)).filter(x => x > 2000 && x < 150000);
  const naPlanta = moradia.filter(r => Number(r.IS_OFFPLAN) === 1).length;
  return {
    transacoes: mes.total, moradias: moradia.length,
    m2: mediana(porM2), ticket: mediana(moradia.map(r => Number(r.TRANS_VALUE))),
    naPlantaPct: moradia.length ? naPlanta / moradia.length * 100 : null
  };
}
async function dubai() {
  return tentar('Dubai Land Department: vendas residenciais (API aberta)', async () => {
    const ano = HOJE.getUTCFullYear(), mesAtual = HOJE.getUTCMonth() + 1;
    const mesRef = mesAtual === 1 ? 12 : mesAtual - 1;            // ultimo mes completo
    const anoRef = mesAtual === 1 ? ano - 1 : ano;
    const mesAnt = mesRef === 1 ? 12 : mesRef - 1, anoAnt = mesRef === 1 ? anoRef - 1 : anoRef;
    const ref = resumoDld(await dldMes(anoRef, mesRef));
    if (ref.m2 == null) throw new Error('sem moradias no mes de referencia');
    log('       Dubai ' + mesRef + '/' + anoRef + ': ' + ref.transacoes + ' vendas residenciais, ' + ref.moradias + ' moradias na mediana');
    let ant = null, jan = null;
    if (anoAnt === anoRef) ant = resumoDld(await dldMes(anoAnt, mesAnt));  // a API so tem o ano corrente
    if (mesRef > 2) jan = resumoDld(await dldMes(anoRef, 1));
    else if (mesRef === 2) jan = ant;
    return {
      ref, ant, jan,
      referencia: MES_CURTO[mesRef - 1] + '/' + anoRef, referenciaLonga: MESES[mesRef - 1] + ' de ' + anoRef,
      mesAntNome: MESES[mesAnt - 1], fonte: 'Dubai Land Department, dados abertos'
    };
  });
}

/* ------------------------------------------------------------- 6. os estados */
// `periodo` e o rotulo da variacao ("em 12 meses" por padrao; Dubai usa "desde
// janeiro" e "frente a agosto", porque a fonte so cobre o ano corrente)
function cartao(rotulo, valor, variacao, nota, periodo) {
  return { rotulo, valor, variacao: variacao == null ? null : arred(variacao, 1), nota: nota || null, periodo: periodo || null };
}

function montarEstados(bc, fz, zl, pt, db) {
  const nacional = fz && fz.cidades['Índice FipeZAP'];
  const refVenda = fz ? mesAnoCurto(fz.dataVenda) : null;
  const refAluguel = fz ? mesAnoCurto(fz.dataAluguel) : null;

  function estadoBrasil(id, nome, principal, outras) {
    const c = fz && fz.cidades[principal];
    const cidades = [principal].concat(outras || []).map(n => {
      const d = fz && fz.cidades[n];
      return d ? { nome: n === 'Itajaí' ? 'Itajaí (Praia Brava)' : n, venda: d.venda, vendaVar12: d.vendaVar12, aluguel: d.aluguel, aluguelVar12: d.aluguelVar12, rentabilidadeAno: d.rentabilidadeAno }
        : { nome: n, venda: null, vendaVar12: null, aluguel: null, aluguelVar12: null, rentabilidadeAno: null };
    });
    const cartoes = [];
    cartoes.push(cartao('Venda, por m²', c && c.venda != null ? 'R$ ' + fmtBR(Math.round(c.venda), 0) : null, c ? c.vendaVar12 : null, fz ? 'FipeZap, ' + refVenda : 'sem dado'));
    if (c && c.aluguel != null) {
      cartoes.push(cartao('Aluguel, por m²', 'R$ ' + fmtBR(c.aluguel, c.aluguel < 100 ? 1 : 0), c.aluguelVar12, 'FipeZap, ' + refAluguel));
      cartoes.push(cartao('Rentabilidade do aluguel', fmtBR(c.rentabilidadeAno, 1) + '% ao ano', null, 'bruta, FipeZap, ' + refAluguel));
    } else {
      cartoes.push(cartao('Variação no mês', c && c.vendaVarMes != null ? fmtPct(c.vendaVarMes) : null, null, fz ? 'venda, FipeZap, ' + refVenda : 'sem dado'));
      cartoes.push(cartao('Aluguel, por m²', null, null, 'o FipeZap não publica aluguel para esta praça'));
    }
    const dif = c && nacional ? arred(c.vendaVar12 - nacional.vendaVar12, 1) : null;
    cartoes.push(cartao('Frente à média nacional', dif == null ? null : (dif > 0 ? '+' : '') + fmtBR(dif, 1) + ' p.p.', null, nacional ? 'Índice FipeZAP em 12 meses: ' + fmtPct(nacional.vendaVar12) : 'sem dado'));
    return { id, nome, pais: 'Brasil', moeda: 'R$', amostra: false, principal: principal, cidades, cartoes,
      fontes: ['FipeZap (Fipe e ZAP), ' + (refVenda || 'sem dado'), 'Banco Central'], referencia: refVenda };
  }

  const estados = [
    estadoBrasil('sao-paulo', 'São Paulo', 'São Paulo'),
    estadoBrasil('rio-de-janeiro', 'Rio de Janeiro', 'Rio de Janeiro'),
    estadoBrasil('santa-catarina', 'Santa Catarina', 'Florianópolis', ['Balneário Camboriú', 'Itajaí']),
    estadoBrasil('parana', 'Paraná', 'Curitiba'),
    estadoBrasil('rio-grande-do-sul', 'Rio Grande do Sul', 'Porto Alegre'),
    estadoBrasil('goias', 'Goiás', 'Goiânia')
  ];

  // Florida: Zillow, regioes metropolitanas
  {
    const z = zl && zl.zhvi, o = zl && zl.oferta;
    const refZ = z ? mesAnoCurto(new Date(z.miami.data)) : null;
    const cartoes = [
      cartao('Valor típico de residência, Miami', z ? 'US$ ' + fmtBR(Math.round(z.miami.valor), 0) : null, z ? z.miami.var12 : null, z ? 'Zillow ZHVI, ' + refZ : 'sem dado'),
      cartao('Valor típico de residência, Orlando', z ? 'US$ ' + fmtBR(Math.round(z.orlando.valor), 0) : null, z ? z.orlando.var12 : null, z ? 'Zillow ZHVI, ' + refZ : 'sem dado'),
      cartao('Imóveis à venda, Miami', o ? fmtBR(Math.round(o.miami.valor), 0) : null, o ? o.miami.var12 : null, o ? 'Zillow, ' + mesAnoCurto(new Date(o.miami.data)) : 'sem dado'),
      cartao('Imóveis à venda, Orlando', o ? fmtBR(Math.round(o.orlando.valor), 0) : null, o ? o.orlando.var12 : null, o ? 'Zillow, ' + mesAnoCurto(new Date(o.orlando.data)) : 'sem dado')
    ];
    estados.push({ id: 'florida', nome: 'Flórida', pais: 'Estados Unidos', moeda: 'US$', amostra: false, principal: 'Miami',
      cidades: [
        { nome: 'Miami (região metropolitana)', venda: z ? z.miami.valor : null, vendaVar12: z ? z.miami.var12 : null, unidade: 'residência', oferta: o ? o.miami.valor : null, ofertaVar12: o ? o.miami.var12 : null },
        { nome: 'Orlando (região metropolitana)', venda: z ? z.orlando.valor : null, vendaVar12: z ? z.orlando.var12 : null, unidade: 'residência', oferta: o ? o.orlando.valor : null, ofertaVar12: o ? o.orlando.var12 : null }
      ],
      cartoes, fontes: ['Zillow Research' + (refZ ? ', ' + refZ : '')], referencia: refZ });
  }

  // Dubai: Dubai Land Department, todas as vendas residenciais do ultimo mes completo
  {
    const d = db, r = d && d.ref;
    const aed = (x) => x == null ? null : 'AED ' + fmtBR(Math.round(x), 0);
    const varJan = r && d.jan && d.jan.m2 ? arred(pct(r.m2, d.jan.m2), 1) : null;
    const varVendas = r && d.ant ? arred(pct(r.transacoes, d.ant.transacoes), 1) : null;
    const cartoes = [
      cartao('Venda residencial mediana, por m²', aed(r && r.m2), varJan, d ? 'unidades e vilas, DLD, ' + d.referencia : 'sem dado', 'desde janeiro'),
      cartao('Vendas residenciais no mês', r ? fmtBR(r.transacoes, 0) : null, varVendas, d ? 'registradas no DLD, ' + d.referencia : 'sem dado', d ? 'frente a ' + d.mesAntNome : null),
      cartao('Valor mediano por venda', aed(r && r.ticket), null, d ? 'unidades e vilas, DLD, ' + d.referencia : 'sem dado'),
      cartao('Vendas na planta', r && r.naPlantaPct != null ? fmtBR(r.naPlantaPct, 0) + '%' : null, null, d ? 'das vendas de moradia, DLD, ' + d.referencia : 'sem dado')
    ];
    estados.push({ id: 'dubai', nome: 'Dubai', pais: 'Emirados', moeda: 'AED', amostra: false, principal: 'Dubai',
      cidades: [{ nome: 'Dubai', venda: r ? r.m2 : null, vendaVar12: null, vendaVarAno: varJan, unidade: 'm²' }],
      cartoes, fontes: ['Dubai Land Department (API de dados abertos)' + (d ? ', ' + d.referencia : '')], referencia: d ? d.referencia : null,
      detalhe: d ? { m2: r.m2, varJan, transacoes: r.transacoes, varVendas, ticket: r.ticket, naPlantaPct: r.naPlantaPct, referenciaLonga: d.referenciaLonga, mesAntNome: d.mesAntNome } : null });
  }

  // Lisboa (distrito): INE, municipios de Lisboa e Cascais
  {
    const p = pt;
    const cartoes = [
      cartao('Venda mediana, Lisboa, por m²', p ? '€ ' + fmtBR(p.lisboa.valor, 0) : null, p ? p.lisboa.var12 : null, p ? 'INE, 12 meses até o ' + p.referencia : 'sem dado'),
      cartao('Venda mediana, Cascais, por m²', p ? '€ ' + fmtBR(p.cascais.valor, 0) : null, p ? p.cascais.var12 : null, p ? 'INE, 12 meses até o ' + p.referencia : 'sem dado'),
      cartao('Portugal, por m²', p ? '€ ' + fmtBR(p.portugal.valor, 0) : null, p ? p.portugal.var12 : null, p ? 'INE, mediana nacional' : 'sem dado'),
      cartao('Lisboa frente a Portugal', p ? (p.lisboa.valor / p.portugal.valor).toLocaleString('pt-BR', { maximumFractionDigits: 1 }) + ' vezes' : null, null, p ? 'razão entre as medianas' : 'sem dado')
    ];
    estados.push({ id: 'lisboa', nome: 'Lisboa', pais: 'Portugal', moeda: '€', amostra: false, principal: 'Lisboa',
      cidades: [
        { nome: 'Lisboa', venda: p ? p.lisboa.valor : null, vendaVar12: p ? p.lisboa.var12 : null, unidade: 'm²' },
        { nome: 'Cascais', venda: p ? p.cascais.valor : null, vendaVar12: p ? p.cascais.var12 : null, unidade: 'm²' }
      ],
      cartoes, fontes: ['INE Portugal, indicador 0012234' + (p ? ', ' + p.referencia : '')], referencia: p ? p.referencia : null });
  }
  return estados;
}

/* ------------------------------------------------------------ 6b. os paises
   O painel funciona como o filtro do topo (pedido dela em 07/10/2026): escolhe
   o pais e ve o mercado do pais; escolhe o estado e ve o do estado. O nivel
   pais usa o que cada fonte tem de nacional: Indice FipeZAP + Banco Central
   para o Brasil, a linha "United States" do Zillow, a mediana "PT" do INE e,
   nos Emirados, o proprio Dubai (o DLD cobre o emirado). */
function montarPaises(bc, fz, zl, pt, db, estados) {
  const nacional = fz && fz.cidades['Índice FipeZAP'];
  const refVenda = fz ? mesAnoCurto(fz.dataVenda) : null;
  const refAluguel = fz ? mesAnoCurto(fz.dataAluguel) : null;
  const dosEstados = (nome) => estados.filter(e => e.pais === nome).map(e => e.id);
  const razao = (a, b) => a != null && b ? (a / b).toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + ' vezes' : null;
  const paises = [];

  paises.push({
    id: 'brasil', nome: 'Brasil', moeda: 'R$', estados: dosEstados('Brasil'),
    cartoes: [
      cartao('Venda, por m² (média das cidades)', nacional && nacional.venda != null ? 'R$ ' + fmtBR(Math.round(nacional.venda), 0) : null, nacional ? nacional.vendaVar12 : null, fz ? 'Índice FipeZAP, ' + refVenda : 'sem dado'),
      cartao('Aluguel, por m² (média das cidades)', nacional && nacional.aluguel != null ? 'R$ ' + fmtBR(nacional.aluguel, 1) : null, nacional ? nacional.aluguelVar12 : null, fz ? 'Índice FipeZAP, ' + refAluguel : 'sem dado'),
      cartao('Preços dos imóveis financiados', bc && bc.ivgr ? fmtPct(bc.ivgr.valor) : null, null, bc && bc.ivgr ? 'em 12 meses, IVG-R, Banco Central, ' + bc.ivgr.referencia : 'sem dado'),
      cartao('Selic', bc && bc.selic ? fmtBR(bc.selic.valor, 2) + '% ao ano' : null, null, bc && bc.selic ? 'Banco Central, ' + bc.selic.referencia : 'sem dado')
    ],
    detalhe: { nacional, bc, refVenda, refAluguel },
    fontes: ['Índice FipeZAP (Fipe e ZAP)' + (refVenda ? ', ' + refVenda : ''), 'Banco Central (Selic, IPCA, IVG-R)'], referencia: refVenda
  });

  {
    const z = zl && zl.zhvi, o = zl && zl.oferta;
    const refZ = z ? mesAnoCurto(new Date(z.eua.data)) : null;
    paises.push({
      id: 'estados-unidos', nome: 'Estados Unidos', moeda: 'US$', estados: dosEstados('Estados Unidos'),
      cartoes: [
        cartao('Valor típico de residência, país', z ? 'US$ ' + fmtBR(Math.round(z.eua.valor), 0) : null, z ? z.eua.var12 : null, z ? 'Zillow ZHVI, ' + refZ : 'sem dado'),
        cartao('Imóveis à venda, país', o ? fmtBR(Math.round(o.eua.valor), 0) : null, o ? o.eua.var12 : null, o ? 'Zillow, ' + mesAnoCurto(new Date(o.eua.data)) : 'sem dado'),
        cartao('Miami frente ao país', z ? razao(z.miami.valor, z.eua.valor) : null, null, z ? 'valor típico, Zillow' : 'sem dado'),
        cartao('Orlando frente ao país', z ? razao(z.orlando.valor, z.eua.valor) : null, null, z ? 'valor típico, Zillow' : 'sem dado')
      ],
      detalhe: z ? { eua: z.eua, oferta: o ? o.eua : null, miami: z.miami, orlando: z.orlando, refZ } : null,
      fontes: ['Zillow Research' + (refZ ? ', ' + refZ : '')], referencia: refZ
    });
  }

  {
    const dubai = estados.find(e => e.id === 'dubai');
    paises.push({
      id: 'emirados', nome: 'Emirados', moeda: 'AED', estados: dosEstados('Emirados'),
      cartoes: dubai ? dubai.cartoes : [], detalhe: dubai ? dubai.detalhe : null,
      fontes: dubai ? dubai.fontes : [], referencia: dubai ? dubai.referencia : null,
      nota: 'O Dubai Land Department cobre o emirado de Dubai, a praça da AMGlobal nos Emirados.'
    });
  }

  {
    const p = pt;
    paises.push({
      id: 'portugal', nome: 'Portugal', moeda: '€', estados: dosEstados('Portugal'),
      cartoes: [
        cartao('Venda mediana, país, por m²', p ? '€ ' + fmtBR(p.portugal.valor, 0) : null, p ? p.portugal.var12 : null, p ? 'INE, 12 meses até o ' + p.referencia : 'sem dado'),
        cartao('Lisboa frente ao país', p ? razao(p.lisboa.valor, p.portugal.valor) : null, null, p ? 'medianas, INE' : 'sem dado'),
        cartao('Cascais frente ao país', p ? razao(p.cascais.valor, p.portugal.valor) : null, null, p ? 'medianas, INE' : 'sem dado'),
        cartao('Lisboa, por m²', p ? '€ ' + fmtBR(p.lisboa.valor, 0) : null, p ? p.lisboa.var12 : null, p ? 'INE, 12 meses até o ' + p.referencia : 'sem dado')
      ],
      detalhe: p || null,
      fontes: ['INE Portugal, indicador 0012234' + (p ? ', ' + p.referencia : '')], referencia: p ? p.referencia : null
    });
  }
  return paises;
}

function leituraPais(p, estados) {
  const d = p.detalhe;
  if (p.id === 'brasil') {
    const n = d && d.nacional, bc = d && d.bc;
    if (!n) return 'Sem dado do Índice FipeZAP nesta rodada.';
    let t = 'No Brasil, o Índice FipeZAP de venda ' + subiuCaiu(n.vendaVar12) + ' em 12 meses (' + d.refVenda + '), com preço médio de R$ ' + fmtBR(Math.round(n.venda), 0) + ' por m² nas cidades acompanhadas';
    if (n.aluguel != null) t += '; o aluguel ' + subiuCaiu(n.aluguelVar12) + ' e rende ' + fmtBR(n.rentabilidadeAno, 1) + '% ao ano, antes de custos';
    t += '.';
    if (bc && bc.ivgr) t += ' Os preços dos imóveis financiados (IVG-R, Banco Central) ' + subiuCaiu(bc.ivgr.valor) + ' em 12 meses até ' + bc.ivgr.referencia + '.';
    if (bc && bc.selic) t += ' Selic em ' + fmtBR(bc.selic.valor, 2) + '% ao ano' + (bc.ipca ? ' e inflação de ' + fmtBR(bc.ipca.valor, 2) + '% em 12 meses' : '') + '.';
    return t;
  }
  if (p.id === 'estados-unidos') {
    if (!d) return 'Sem dado do Zillow nesta rodada.';
    let t = 'Nos Estados Unidos, o valor típico de uma residência está em US$ ' + fmtBR(Math.round(d.eua.valor), 0) + ' (Zillow, ' + d.refZ + '), ' + subiuCaiu(d.eua.var12) + ' em 12 meses.';
    if (d.oferta) t += ' A oferta à venda no país ' + subiuCaiu(d.oferta.var12) + ' em um ano, para ' + fmtBR(Math.round(d.oferta.valor), 0) + ' imóveis.';
    t += ' Na Flórida, Miami vale ' + (d.miami.valor / d.eua.valor).toLocaleString('pt-BR', { maximumFractionDigits: 1 }) + ' vez o país e Orlando, ' + (d.orlando.valor / d.eua.valor).toLocaleString('pt-BR', { maximumFractionDigits: 1 }) + '.';
    return t;
  }
  if (p.id === 'emirados') {
    const dubai = estados.find(e => e.id === 'dubai');
    return 'Nos Emirados, a praça da AMGlobal é Dubai, e o Dubai Land Department cobre o emirado inteiro. ' + (dubai ? dubai.leitura : 'Sem dado do DLD nesta rodada.');
  }
  if (p.id === 'portugal') {
    if (!d) return 'Sem dado do INE nesta rodada.';
    return 'Em Portugal, o preço mediano de venda foi de € ' + fmtBR(d.portugal.valor, 0) + ' por m² nos 12 meses até o ' + d.referencia + ' (INE), ' + subiuCaiu(d.portugal.var12) + ' frente ao mesmo período do ano anterior. Lisboa (€ ' + fmtBR(d.lisboa.valor, 0) + ') vale ' + (d.lisboa.valor / d.portugal.valor).toLocaleString('pt-BR', { maximumFractionDigits: 1 }) + ' vezes a mediana nacional; Cascais (€ ' + fmtBR(d.cascais.valor, 0) + '), ' + (d.cascais.valor / d.portugal.valor).toLocaleString('pt-BR', { maximumFractionDigits: 1 }) + '.';
  }
  return 'Sem leitura para este país.';
}

/* ---------------------------------------------------- 6. a leitura (modelo fixo) */
function leituraFixa(e, bc, nacional) {
  const fundo = bc && bc.selic ? ' Pano de fundo no Brasil: Selic em ' + fmtBR(bc.selic.valor, 2) + '% ao ano' + (bc.ipca ? ' e inflação de ' + fmtBR(bc.ipca.valor, 2) + '% em 12 meses' : '') + '.' : '';
  if (e.amostra) return 'Números de exemplo, só para mostrar o layout. A fonte de Dubai ainda não está ligada; quando estiver, esta leitura passa a sair dos dados do Dubai Land Department.';
  if (e.pais === 'Brasil') {
    const c = e.cidades[0];
    if (c.venda == null) return 'Sem dado do FipeZap para ' + c.nome + ' nesta rodada.' + fundo;
    let t = 'Em ' + c.nome + ', o metro quadrado de venda está em R$ ' + fmtBR(Math.round(c.venda), 0) + ' (FipeZap, ' + e.referencia + '), ' + subiuCaiu(c.vendaVar12) + ' em 12 meses';
    if (nacional && nacional.vendaVar12 != null) t += c.vendaVar12 > nacional.vendaVar12 ? ', acima da média nacional do Índice FipeZAP (' + fmtPct(nacional.vendaVar12) + ')' : ', abaixo da média nacional do Índice FipeZAP (' + fmtPct(nacional.vendaVar12) + ')';
    t += '.';
    if (c.aluguel != null) t += ' O aluguel ' + subiuCaiu(c.aluguelVar12) + ' no mesmo período e rende ' + fmtBR(c.rentabilidadeAno, 1) + '% ao ano, antes de custos.';
    else t += ' O FipeZap não publica aluguel para esta praça.';
    const outras = e.cidades.slice(1).filter(o => o.venda != null);
    if (outras.length) t += ' ' + outras.map(o => 'Em ' + o.nome + ', R$ ' + fmtBR(Math.round(o.venda), 0) + ' por m² (' + fmtPct(o.vendaVar12) + ' em 12 meses)').join('; ') + '.';
    return t + fundo;
  }
  if (e.id === 'florida') {
    const [mi, or] = e.cidades;
    if (mi.venda == null) return 'Sem dado do Zillow para a Flórida nesta rodada.';
    let t = 'Na região de Miami, o valor típico de uma residência está em US$ ' + fmtBR(Math.round(mi.venda), 0) + ' (Zillow, ' + e.referencia + '), ' + subiuCaiu(mi.vendaVar12) + ' em 12 meses; em Orlando, US$ ' + fmtBR(Math.round(or.venda), 0) + ' (' + fmtPct(or.vendaVar12) + ').';
    if (mi.oferta != null) t += ' A oferta à venda em Miami ' + subiuCaiu(mi.ofertaVar12) + ' em um ano, para ' + fmtBR(Math.round(mi.oferta), 0) + ' imóveis; em Orlando, ' + subiuCaiu(or.ofertaVar12) + ', para ' + fmtBR(Math.round(or.oferta), 0) + '.';
    return t;
  }
  if (e.id === 'dubai') {
    const d = e.detalhe;
    if (!d) return 'Sem dado do Dubai Land Department nesta rodada.';
    let t = 'Em Dubai, a venda residencial mediana saiu a AED ' + fmtBR(Math.round(d.m2), 0) + ' por m² em ' + d.referenciaLonga + ' (Dubai Land Department, ' + fmtBR(d.transacoes, 0) + ' vendas registradas no mês)';
    t += d.varJan != null ? ', ' + subiuCaiu(d.varJan) + ' desde janeiro.' : '.';
    t += ' O valor mediano por negócio foi AED ' + fmtBR(Math.round(d.ticket), 0) + (d.naPlantaPct != null ? ', e ' + fmtBR(d.naPlantaPct, 0) + '% das vendas de moradia foram na planta.' : '.');
    if (d.varVendas != null) t += ' Frente a ' + d.mesAntNome + ', o número de vendas ' + subiuCaiu(d.varVendas) + '.';
    return t;
  }
  if (e.id === 'lisboa') {
    const [li, ca] = e.cidades;
    if (li.venda == null) return 'Sem dado do INE para Lisboa nesta rodada.';
    return 'No município de Lisboa, o preço mediano de venda foi de € ' + fmtBR(li.venda, 0) + ' por m² nos 12 meses até o ' + e.referencia + ' (INE), ' + subiuCaiu(li.vendaVar12) + ' frente ao mesmo período do ano anterior. Em Cascais, € ' + fmtBR(ca.venda, 0) + ' por m² (' + fmtPct(ca.vendaVar12) + '). ' + (e.cartoes[2].valor ? 'A mediana de Portugal está em ' + e.cartoes[2].valor + ' por m² (' + fmtPct(e.cartoes[2].variacao) + ').' : '');
  }
  return 'Sem leitura para este estado.';
}

/* ------------------------------------------------------- 7. a leitura (Gemini) */
async function leituraGemini(e, fixa) {
  const chave = process.env.GEMINI_API_KEY;
  if (!chave || e.amostra) return null;
  const prompt = [
    'Você escreve para o site de uma consultoria imobiliária de alto padrão, em português do Brasil, tom sóbrio e direto, sem adjetivos de propaganda.',
    'Reescreva a leitura de mercado abaixo em no máximo 4 frases. REGRAS ABSOLUTAS: use somente os números que aparecem no texto, sem acrescentar nenhum outro, sem previsões, sem recomendações de compra ou venda, sem exclamações. Mantenha fonte e data citadas.',
    '', 'Leitura base:', fixa
  ].join('\n');
  try {
    const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + encodeURIComponent(chave), {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'User-Agent': UA },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { temperature: 0.3, maxOutputTokens: 400 } })
    });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const j = await r.json();
    const texto = j.candidates && j.candidates[0] && j.candidates[0].content && j.candidates[0].content.parts.map(p => p.text).join('').trim();
    if (!texto) throw new Error('resposta vazia');
    // trava: todo numero da resposta tem de existir na leitura base
    const numerosBase = new Set((fixa.match(/\d[\d.,]*/g) || []).map(n => n.replace(/[.,]$/, '')));
    const estranhos = (texto.match(/\d[\d.,]*/g) || []).map(n => n.replace(/[.,]$/, '')).filter(n => !numerosBase.has(n));
    if (estranhos.length) throw new Error('inventou números: ' + estranhos.join(' '));
    return texto;
  } catch (err) { log('Gemini (' + e.nome + '): ' + err.message + '; fica o modelo fixo'); return null; }
}

/* -------------------------------------------------------------------- main --- */
(async () => {
  console.log('=== coletando (' + HOJE.toISOString().slice(0, 10) + ') ===');
  const [bc, fz, zl, pt, db] = await Promise.all([bancoCentral(), fipezap(), zillow(), ine(), dubai()]);
  const estados = montarEstados(bc, fz, zl, pt, db);
  const nacional = fz && fz.cidades['Índice FipeZAP'];

  console.log('=== leituras ===');
  let viaGemini = 0;
  for (const e of estados) {
    const fixa = leituraFixa(e, bc, nacional);
    const ia = await leituraGemini(e, fixa);
    e.leitura = ia || fixa;
    e.leituraOrigem = ia ? 'gemini' : 'modelo fixo';
    if (ia) viaGemini++;
    log(e.nome + ': ' + e.leituraOrigem + (e.amostra ? ' (EXEMPLO)' : ''));
  }

  // os paises, depois dos estados (Emirados reaproveita a leitura de Dubai)
  const paises = montarPaises(bc, fz, zl, pt, db, estados);
  for (const p of paises) {
    const fixa = leituraPais(p, estados);
    const ia = await leituraGemini(p, fixa);
    p.leitura = ia || fixa;
    p.leituraOrigem = ia ? 'gemini' : 'modelo fixo';
    if (ia) viaGemini++;
    log(p.nome + ' (país): ' + p.leituraOrigem);
  }
  for (const e of estados) e.paisId = (paises.find(p => p.nome === e.pais) || {}).id || null;

  const dados = {
    geradoEm: HOJE.toISOString().slice(0, 10),
    paises,
    geradoEmTexto: HOJE.getUTCDate() + ' de ' + mesAno(HOJE),
    brasil: {
      selic: bc && bc.selic, ipca12: bc && bc.ipca, ivgr12: bc && bc.ivgr,
      fipezapNacional: nacional ? { vendaVar12: nacional.vendaVar12, aluguelVar12: nacional.aluguelVar12, venda: nacional.venda, referencia: fz ? mesAnoCurto(fz.dataVenda) : null } : null
    },
    estados,
    ia: process.env.GEMINI_API_KEY ? (viaGemini ? 'gemini' : 'gemini indisponível, modelo fixo') : 'modelo fixo (sem GEMINI_API_KEY)',
    ressalva: 'Dados de terceiros, com fonte e data em cada número. Variações observadas, não previsões. Não constituem recomendação de investimento.'
  };

  const corpo = '/* GERADO por ferramentas/coletar-mercado.js em ' + dados.geradoEm + '. Nao edite a mao: rode o coletor. */\nwindow.MERCADO = ' + JSON.stringify(dados, null, 2) + ';\n';
  fs.writeFileSync(SAIDA, corpo, 'utf8');
  const reais = estados.filter(e => !e.amostra && e.cartoes.some(c => c.valor != null)).length;
  console.log('=== gravado ' + path.relative(process.cwd(), SAIDA) + ': ' + paises.length + ' países, ' + estados.length + ' estados, ' + reais + ' com dado real, ' + estados.filter(e => e.amostra).length + ' de exemplo; IA: ' + dados.ia + ' ===');
})().catch(e => { console.error('ERRO: ' + e.message); process.exit(1); });
