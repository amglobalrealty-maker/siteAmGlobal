# AMGlobal Realty — site

Site institucional da AMGlobal Realty. Uma pagina unica, estatica, sem etapa de build:
a Vercel serve o `index.html` direto do repositorio.

Construido a partir de dois documentos entregues pela cliente:

- Briefing AMGlobal Realty v1.0
- Manual de Identidade Visual AMGlobal Realty v1.0

## Como rodar

Nao precisa instalar nada. Abra o `index.html` no navegador, ou sirva a pasta:

```
python3 -m http.server 8000
```

Deploy: a Vercel publica a branch automaticamente. Nao ha Build Command.

## O que veio do manual

| Item | Regra aplicada |
|---|---|
| Cores | Onix `#0B0B0C`, marfim `#F5F2EC`, travertino `#D8CFC0`, grafite `#3A3A3C`, champagne `#B49A6E` |
| Proporcao | Onix domina, marfim e travertino alternam as secoes claras, champagne so em detalhe |
| Champagne | Nunca em area grande nem em texto de leitura. Sobre marfim nao passa no contraste AA, entao ali o rotulo vira grafite |
| Titulos | Cormorant Garamond, peso leve, entrelinha fechada |
| Texto, rotulos e botoes | Jost. Caixa-alta so na Jost, com tracking de 18% |
| Alinhamento | Sempre a esquerda, nunca justificado |
| Linha de leitura | Limitada a 68 caracteres |
| Filete | Traco champagne de 24px antes de cada rotulo |
| Marcador | Triangulo aberto derivado do A, usado na indicacao de rolagem |
| Textura | Diagonais a 26 graus, tom sobre tom, nunca atras de texto nem sobre foto. Saiu da secao Global quando ela virou fotografia; hoje nao esta em uso |
| Tom de voz | Frases curtas, sem superlativo, sem exclamacao |
| Chamada | "Agende uma visita privada", exatamente como o manual aprovou |
| Numeros | Tabulares, para alinhar em coluna |

Palavras proibidas pelo manual e que nao aparecem em lugar nenhum do site:
oportunidade, imperdivel, corretor, luxuoso.

### A cabeca das secoes: um bloco so, em duas escalas

Cada secao abre com filete, rotulo, titulo e uma frase curta. **Quatro
arrumacoes foram recusadas, e as quatro tratavam titulo e frase como DUAS
PECAS a posicionar:**

1. A frase na coluna da DIREITA: ficou solta, longe do titulo e sem nada em
   volta.
2. EMBAIXO do titulo, em coluna estreita com um filete em pe: a cabeca inteira
   ficou espremida no canto esquerdo, com metade da tela vazia.
3. Presa ao titulo por um filete champagne atravessando o vazio.
4. Grande, do lado direito, alinhada pela base, como segunda declaracao.

**Enquanto forem duas pecas, uma sempre vai ficar solta em relacao a outra.**
Por isso nenhuma posicao resolvia.

Hoje elas deixaram de ser duas: o titulo e a frase sao **UM TEXTO CORRIDO**, no
mesmo Cormorant, em duas escalas. O titulo entra grande (34 a 66px), a frase
continua na mesma linha, menor (19 a 30px), separada por um **travessao
champagne**, e o paragrafo desce sozinho — como a entrada de uma reportagem.

**E e MENOS, e nao mais:** saiu o filete em pe, saiu a segunda coluna, saiu a
borda, sairam as quebras fixas dos titulos. A cabeca tem menos elementos do que
tinha na primeira versao.

⚠️ O recurso que permite isso e **`display: contents` nos dois embrulhos**: ele
apaga as caixas e deixa filete, rotulo, titulo e frase como filhos diretos da
cabeca. Ai o titulo e a frase, os dois em `inline`, correm no mesmo paragrafo.
Sem isso eles seriam dois blocos empilhados, que e de onde se veio.

As quebras fixas (`<br>`) sairam SO dos titulos de cabeca. Os outros titulos do
site — o do contato, os dos recados — nao viraram texto corrido e mantem as
delas.

Vale igual na home (secoes 02, 04 e 05) e na pagina de cidade (A selecao e A
praca).

### Sobre "rose"

Em algum momento pediram um elemento em rose. **O manual nao tem rose**: as
cinco cores sao onix, marfim, travertino, grafite e champagne. O champagne
`#B49A6E` e o mais proximo de um rose dourado e e a cor de acento prevista,
entao e ele que aparece nas linhas. Se um rose de verdade for aprovado depois,
ele precisa entrar no manual antes de entrar no site.

## O que ainda esta provisorio

Quatro pontos dependem de material que a cliente ainda precisa enviar.
Todos estao marcados no `index.html` com um comentario `ATENCAO`.

1. **Assinatura horizontal.** O simbolo esta correto, extraido do manual (ver a
   secao abaixo). Se o manual tiver um arquivo separado com a assinatura
   horizontal fechada, ela deve substituir o par simbolo mais nome em Jost que
   o cabecalho usa hoje.
2. **Fotografia.** As fotos do site sao do Unsplash, de licenca livre, e
   estao aqui a pedido da cliente so para o site nao ficar vazio. **O manual
   proibe banco de imagem em material de imovel**, entao elas sao temporarias e
   saem assim que chegar a fotografia propria. Enderecos na tabela abaixo.
   Todas entram dessaturadas por CSS, para nao brigarem com onix e travertino.
3. **Imoveis.** A curadoria esta com doze imoveis DE TESTE, a pedido da
   cliente, para o filtro ter o que filtrar. Nome, area e suites sao
   inventados. Falta a lista real. Ver a secao "O filtro por pais e cidade".
4. **Contato.** O formulario da secao 06 abre o WhatsApp com a mensagem
   pronta. O numero esta na constante `WHATSAPP`, no fim do script do
   `index.html` (so digitos, com 55 e DDD): hoje 11 95994-3705, que ela passou
   em 05/10/2026 como provisorio ("por enquanto"). E-mail, endereco do
   escritorio e numero do CRECI estao como "A informar". O ano no rodape
   tambem precisa conferir.

## O simbolo

**Nao foi redesenhado a mao.** O manual proibe isso, e com razao.

O simbolo que esta no site e o proprio vetor do Manual de Identidade Visual
v1.0. Ele foi extraido do arquivo: descomprimi os fluxos do PDF, que vem em
ASCII85 sobre Flate, li os operadores de desenho da capa e converti a
geometria para SVG sem tocar em nenhuma coordenada.

| Dado | Valor |
|---|---|
| Caixa original | 200,10 x 176,44 pontos |
| Proporcao | 1,1341 |
| Tracado | um unico contorno fechado |
| Curvas | 373 |
| Preenchimento | regra par-impar |

Tres arquivos saem dai:

| Arquivo | Para que serve |
|---|---|
| `marca.svg` | simbolo em marfim, para usar sobre onix. Cabecalho, cortina de entrada e rodape |
| `marca-onix.svg` | simbolo em onix, para quando precisar poe-lo sobre marfim ou travertino |
| `favicon.svg` | marfim sobre onix, com a folga que o manual pede |

No cabecalho ele aparece a 40px, que e o tamanho digital minimo previsto no
manual, e encolhe para 32px quando a barra fica fixa.

**Nao edite esses arquivos a mao.** Se o manual for atualizado, extraia de novo.

### Fotos provisorias em uso

Todas servidas direto pelo Unsplash, sem arquivo no repositorio.
Para trocar, substitua o `src` da tag `img` correspondente.

| Onde | Identificador da foto no Unsplash |
|---|---|
| Servicos, retrato de Comprar | `photo-1776482128172-dd265ad0cb49` |
| Servicos, retrato de Vender | `photo-1778731660244-b6e8f905107d` |
| Servicos, retrato de Investir | `photo-1786018120871-cb134b61ddd0` |
| Servicos, retrato de Assessorar | `photo-1778731660451-323b78996230` |
| Abertura, slide 01, Brasil | `photo-1613490493576-7fde63acd811` |
| Abertura, slide 02, Orlando | `photo-1719887805632-de5be825f72b` |
| Abertura, slide 03, Dubai | `photo-1706164971302-e30c0640cc3b` |
| Abertura, slide 04, Portugal | `photo-1685514823717-7e1ff6ee0563` |
| Imovel 01 | `photo-1706808849780-7a04fbac83ef` |
| Imovel 02 | `photo-1633354747567-e0682586f082` |
| Imovel 03 | `photo-1745761320791-5ae142edee8c` |
| Faixa da secao A AMGlobal | `photo-1660361339436-ddd4b85372da` |

O endereco completo segue sempre o padrao
`https://images.unsplash.com/<identificador>?auto=format&fit=crop&w=<largura>&q=70`.

## As paginas internas

Sao **dois modelos** que atendem todas as cidades e todos os imoveis.

| Arquivo | Serve | Endereco |
|---|---|---|
| `cidade.html` | as doze pracas | `cidade.html?c=lisboa` |
| `imovel.html` | as trinta e seis residencias | `imovel.html?c=lisboa&i=0` |

Em `imovel.html`, o `i` e a posicao do imovel na lista daquela cidade,
comecando em zero. Endereco incompleto, cidade desconhecida ou posicao que nao
existe caem num recado com link para a curadoria, nunca em pagina em branco.

### Como se chega nelas

- **Cidade do filtro do topo** abre a pagina da cidade. "Todas as cidades"
  continua so filtrando a home.
- **Lamina da curadoria**, tanto na home quanto na pagina da cidade, abre a
  ficha do imovel. No toque, o primeiro toque abre a lamina e o segundo entra,
  senao a pessoa sairia da pagina sem nunca ter visto a foto grande.
- **Voltar**, no topo da ficha, leva para a cidade daquele imovel, com o nome
  dela escrito no link.

### O conteudo mora num lugar so

`dados.js` e a fonte unica: as duas paginas o carregam. **Mexer nesse arquivo
muda as duas**, sem tocar em script.

Cada cidade tem nome, pais, foto de capa, **retrato** (a foto vertical da secao
"A praca"), linha de abertura, tres notas sobre a praca e a lista de
residencias. Sem `retrato`, a secao cai na foto de capa. Cada residencia tem:

| Campo | O que e |
|---|---|
| `nome`, `bairro` | titulo e endereco curto |
| `area`, `terreno` | area construida e area do terreno |
| `suites`, `vagas` | contagens |
| `ano` | ano da construcao ou da reforma |
| `orientacao` | para onde a face principal olha |
| `condominio`, `iptu` | custos mensais, ou "Não há" |
| `situacao` | como esta a documentacao |
| `texto` | um ou mais paragrafos, separados por quebra de linha |
| `ambientes` | lista de comodos |
| `perto` | pares de lugar e tempo ate la |
| `fotos` | lista de fotos; a primeira e a capa |

As fotos vem do objeto `f`, no topo do arquivo, e **cada uma ja carrega a
propria legenda**. Para trocar a foto de um imovel, troque a chave.

Para incluir uma cidade: uma entrada em `CIDADES`, o apelido em `ORDEM` e um
botao no filtro do `index.html` com o mesmo apelido em `data-slug`. Para
incluir um imovel: um objeto na lista `imoveis` da cidade. O primeiro da lista
e o que aparece na home.

### O que cada pagina traz

| Pagina de cidade | |
|---|---|
| Capa | Foto quase em tela cheia, nome da cidade, linha de abertura e a contagem |
| A selecao | A banda de laminas, com as residencias daquela cidade |
| A praca | Faixa fotografica de borda a borda, com as tres notas caindo em diagonal sobre ela |
| Fecho | Contato e atalho para as outras pracas. E a pausa CLARA da pagina, em marfim, como no imovel.html |

**A praca** e o momento visual da pagina de cidade. Uma so faixa, de borda a
borda, com a foto da cidade ocupando tudo e o veu vindo na diagonal. Sobre ela,
as tres notas descem em degrau: a primeira encosta a esquerda no alto, a
segunda fica no meio, a terceira desce a direita. A descida e o desenho da
secao, e ela ecoa a diagonal da marca.

Cada nota leva um numeral grande em champagne e um filete champagne acima.

**A cabeca da praca e de UMA coluna so**, diferente das outras secoes. Na de
duas, a frase de abertura caia no canto superior direito da foto, longe do
titulo e sem nada em volta: virava legenda solta. Agora ela se pendura no
titulo, logo abaixo, em Cormorant italico e presa por um filete champagne EM
PE - o mesmo tracinho da marca, so que deitado na vertical. O canto superior
direito da foto fica livre, e a diagonal comeca limpa na primeira nota.

**A secao tem duas animacoes, e nenhuma delas e um efeito posto por cima.**

A primeira e a ABERTURA. A foto nao aparece: ela se abre do centro para os dois
lados, na mesma curva e no mesmo gesto da cortina que abre o site
(`clip-path: inset(0 50% 0 50%)` virando `inset(0)`). As notas acendem em
seguida, uma apos a outra, de cima para baixo.

A segunda e a PROFUNDIDADE. Enquanto a pagina rola, a foto anda num sentido e
as notas no outro, e cada nota num passo diferente: a de cima quase nao se
mexe, a do meio se mexe o triplo, a de baixo bem mais. A diagonal deixa de ser
uma arrumacao parada e passa a se ABRIR conforme a pessoa desce.

A conta da profundidade e feita no quadro do navegador
(`requestAnimationFrame`), e nunca direto no evento de rolagem: assim ela
acontece uma vez por quadro e nao trava a pagina. A secao e ignorada quando
esta fora da tela.

Como e o script que escreve o `transform` das notas e da foto, a entrada delas
no CSS e so de opacidade, e a escala da foto mora no proprio `transform` que o
script reescreve: nada disputa a mesma propriedade.

Abaixo de 900px nao ha largura para a diagonal: as notas se alinham a esquerda,
uma embaixo da outra, e o veu passa a vir de cima para baixo. Ali o passo da
profundidade encolhe para 30%, senao a nota de baixo alcancaria a de cima, que
agora esta logo acima dela.

Com movimento reduzido no sistema, a faixa ja aparece pronta e aberta.

| Ficha do imovel | |
|---|---|
| Capa | A foto principal, o nome, o endereco e os numeros: area, suites, vagas e valor |
| A residencia | O texto do imovel e o dossie em tres colunas |
| O visor | As fotos, uma de cada vez, de borda a borda |
| Visita | Agendar visita, solicitar dossie e as outras residencias da mesma cidade |

**O dossie** e a informacao, em tres colunas: a ficha tecnica em pares (area
construida, terreno, suites, vagas, ano, orientacao, condominio e IPTU); a
lista de ambientes; e o que fica ao redor com o tempo ate cada lugar, mais a
situacao da documentacao. Abaixo de 1000px vira uma coluna so.

**O visor** e onde as fotos ficam, e elas nao dividem espaco com mais nada:
uma de cada vez, de borda a borda da pagina. Trocar VARRE a nova por cima da
anterior, da direita para a esquerda, a mesma varredura da secao de servicos,
e enquanto a foto esta no ar ela avanca devagar. No pe, o numero da foto em
Cormorant, a legenda dizendo o que ela mostra, um traco por foto e as setas.

Da para trocar de quatro jeitos: setas, tracos, setas do teclado (so quando o
visor esta na tela) e arrastando com o dedo. Sao tres camadas fixas e so tres,
e quem manda na visibilidade e a opacidade: mesmo que a animacao nao rode, a
foto troca.

### Conteudo de demonstracao

**Tudo nas paginas internas e inventado**, a pedido da cliente, para o modelo
ter forma: nome de imovel, bairro, area, suites, vagas, os textos das
residencias e as notas das pracas. As fotos sao do Unsplash. Enquanto for
assim, as duas paginas levam `noindex`, para nao aparecerem em buscador.
**Tire essa linha do `<head>` das duas quando o portfolio real entrar.**

## O painel de mercado

A cliente pediu (07/10/2026) IA no site **nao para atendimento**, e sim para
trazer dados do mercado imobiliario das regioes em que atua: preco por m2,
oferta, variacoes e outros indicadores, mostrados no proprio site. E a secao
06, "O mercado, estado a estado": um estado por vez (os nove em que ha venda),
quatro cartoes com numero, variacao em 12 meses e fonte, uma tabela por praca
quando o estado tem mais de uma, e uma leitura curta. Em cima, o pano de fundo
do Brasil: Selic, inflacao e o indice de precos dos imoveis financiados.

**Tudo em codigo, sem servidor e sem servico pago.** Tres pecas:

| Peca | O que e |
|---|---|
| `ferramentas/coletar-mercado.js` | o coletor. Busca as fontes, monta os indicadores, escreve a leitura e grava o arquivo de dados. Node 18 ou mais novo e a biblioteca `xlsx` (so para abrir a planilha do FipeZap) |
| `mercado-dados.js` | o resultado, versionado no git. Define `window.MERCADO`. **Nao editar a mao**: rodar o coletor |
| secao `#mercado` do `index.html` | so monta o que esta no arquivo. Sem arquivo, mostra um recado; nunca inventa numero |

Para atualizar, uma vez por mes:

```
cd ferramentas
npm install
node coletar-mercado.js
```

Depois, branch, preview e "sobe", como qualquer mudanca. O coletor imprime o
que conseguiu e o que falhou; fonte fora do ar vira "sem dado" na tela, nunca
um valor antigo ou inventado.

### As fontes, todas publicas e gratuitas

| Regiao | Fonte | O que traz | Frequencia |
|---|---|---|---|
| Sao Paulo, Rio, Florianopolis, Balneario Camboriu, Itajai (Praia Brava), Curitiba, Porto Alegre, Goiania | FipeZap (Fipe + ZAP), planilha publica | preco medio por m2 de venda e aluguel, variacao em 12 meses, rentabilidade do aluguel. Balneario Camboriu e Itajai so tem venda | mensal |
| Brasil | Banco Central, API SGS | Selic (serie 432), IPCA 12 meses (13522), IVG-R, precos dos imoveis financiados (21340) | mensal |
| Florida | Zillow Research, arquivos abertos | valor tipico de residencia (ZHVI) e imoveis a venda, regioes metropolitanas de Miami e Orlando | mensal |
| Lisboa e Cascais | INE Portugal, API aberta, indicador 0012234 | preco mediano de venda por m2 nos ultimos 12 meses, por municipio, e a mediana de Portugal | trimestral |
| Dubai | Dubai Land Department, dados abertos | **ainda nao ligada**: o portal exige conta. O bloco de Dubai e EXEMPLO (`amostra: true`) e a tela diz isso em tres lugares | — |

### A IA

A leitura de cada estado e escrita **a partir dos numeros coletados e de mais
nada**. Por padrao, um modelo fixo em codigo monta as frases: sem custo, sem
chave, nunca erra numero. Se existir a variavel de ambiente `GEMINI_API_KEY`
(nivel gratuito do Google AI Studio, sem cartao), o Gemini reescreve a leitura
com os mesmos numeros; o coletor confere que todo numero da resposta existia
na leitura base e, se a IA inventar um, descarta e fica o modelo fixo. A tela
diz qual das duas escreveu. Trocar de modelo (Groq, Ollama local) e mudar a
funcao `leituraGemini`.

### Regras que o painel segue

- Numero sem fonte e data nao entra.
- Variacao observada, nunca previsao.
- Uma ressalva no fim: dados de terceiros, nao constituem recomendacao de
  investimento.
- Nada de cliente ou de imovel da carteira passa pela IA: so dado publico.

## Estrutura da pagina

| Numero | Secao | O que faz |
|---|---|---|
| 01 | Abertura | Tres fotografias da cliente com titulo, subtitulo e paragrafo DESENHADOS nelas, em rodizio. No celular (ate 600px) entram as versoes EM PE que ela fez, inteiras, abaixo do cabecalho; no tablet a deitada de 960 (desde 05/10/2026). O h1 fica invisivel em toda largura, so para Google e leitor de tela |
| 02 | Curadoria | Uma banda so, de pouco mais de meia tela: uma lamina por residencia, a apontada se abre. Filtravel por pais e cidade |
| 03 | A AMGlobal | Citacao grande em italico e os tres pilares |
| 04 | Servicos | Um percurso: os quatro oficios sao estacoes, e a linha champagne avanca ate onde a pessoa esta. Sem imagem |
| 05 | Global | Uma praca por vez, em onix: a fotografia num painel a direita e o NOME ATRAVESSANDO a borda dela. Anda sozinha, com varredura na troca |
| 06 | Mercado | Painel por estado (07/10/2026): pano de fundo do Brasil, abas dos nove estados, quatro cartoes com numero, variacao e fonte, tabela por praca e uma leitura curta. Tudo vem de mercado-dados.js |
| 07 | Contato | Formulario que abre o WhatsApp com a mensagem pronta, e os canais |
| — | Rodape | Faixa com as frases da marca e a assinatura |

A numeracao da tabela acima e organizacao interna deste documento. Ela **nao**
aparece mais na tela: o indice lateral com os numeros 01 a 06 foi retirado a
pedido da cliente. Quem diz onde a pessoa esta e o menu do topo, que sublinha
a secao atual, mais o filete de progresso.

## O filtro por pais e cidade

No canto direito do cabecalho, ao lado do menu, fica o seletor **Onde**. Ele
abre um painel de largura cheia com duas colunas: os paises a esquerda, com a
quantidade de residencias de cada um, e as cidades a direita.

- Escolher o **pais** abre as cidades dele e ja filtra a curadoria. O painel
  fica aberto, para a pessoa poder afinar.
- Escolher a **cidade** abre a pagina daquela praca (ver "As paginas
  internas"). "Todas as cidades" continua so filtrando a home.
- O texto do seletor sempre mostra onde a pessoa esta: "Todos os paises", o
  nome do pais ou o nome da cidade.
- Abaixo do indice, uma linha diz quantas residencias aquele recorte tem.
- Sem nenhum resultado, aparece um recado convidando a falar com um consultor.
- Fecha no Esc ou clicando fora. No celular ocupa a tela inteira e rola.

**A fonte da verdade sao as proprias residencias.** Cada uma carrega
`data-pais` e `data-cidade`; ate as contagens do painel sao somadas a partir
delas quando a pagina abre. Depois de filtrar, a primeira lamina que sobrou se
abre sozinha. Para trocar o portfolio basta editar os blocos `leque-item`,
mantendo esses dois atributos. So e preciso mexer no painel se entrar um pais
ou uma cidade que ainda nao esteja listado la.

No celular a banda corre de lado, com encaixe: uma residencia por vez, ja
aberta, arrastando para o lado.

### Imoveis de teste

Os doze imoveis da curadoria **sao de teste**, a pedido da cliente, so para o
filtro ter o que filtrar. Nome, area e numero de suites foram inventados; as
fotos sao do Unsplash. Estao distribuidos assim:

| Pais | Pracas |
|---|---|
| Brasil | Sao Paulo, Rio de Janeiro, Florianopolis, Balneario Camboriu, Praia Brava, Curitiba, Porto Alegre, Goiania |
| Estados Unidos | Florida (Orlando e Miami sao bairros dela) |
| Emirados | Dubai |
| Portugal | Lisboa, Cascais |

**Essas doze sao as pracas em que ela atua, passadas por ela em 02/10/2026.**
O painel do filtro, a banda da curadoria (o primeiro imovel de cada praca) e
as cartas do Global (a capa de cada praca) foram gerados a partir do
`dados.js`, entao as quatro listas casam. Praca nova entra no `dados.js` e
nos tres lugares do `index.html`, com o mesmo `data-slug`. No celular, a
banda e as cartas ganharam setas (02/10): antes so andavam com o dedo.

### O celular

Passada completa em 05/10/2026, tela por tela, em 390x844: nada vaza de lado.
Dois acertos sairam dela:

- **A abertura mostra a imagem inteira, em pe.** As tres imagens trazem o
  texto desenhado, e cada uma diz uma coisa; no celular o site mostrava so o
  recorte da casa e um texto fixo embaixo. Uma primeira versao recompos as
  palavras em HTML por cima do recorte; outra mostrou a imagem deitada inteira
  com o texto embaixo; entao ela fez TRES IMAGENS EM PE (`fotos/capa-N-retrato.webp`,
  941x1672, originais PNG em `fotos/origem/`) e pediu que fossem elas. Ate 600px
  entra a em pe, inteira, abaixo do cabecalho (que ali nao pode flutuar sobre
  a foto, porque cobriria a letra; a altura dele vem do script, em
  `--alto-topo`); de 601 a 900px, a deitada de 960. Os recortes
  `capa-N-cel.webp` ficaram sem uso. No celular a foto vai DE BORDA A BORDA e
  comeca no topo da tela, atras do cabecalho, que flutua sobre o ceu dela como
  no computador (ela recusou a faixa onix acima da foto e a foto estreitada
  para caber). A moldura e a altura da tela (`svh`) menos um respiro; o que
  nao cabe e cortado so embaixo, no jardim, nunca na letra. Ate 600px o
  cabecalho fica mais baixo (12px de respiro), para nao chegar na letra
  desenhada, que comeca a 9% da altura da imagem.
- **A barra do cabecalho e transparente.** No celular ela nao escurece ao
  rolar; so o menu, quando abre, e preto (o painel dele ja e onix). Para
  continuar legivel sobre as secoes claras, a tinta troca: o script poe
  `.sobre-claro` no cabecalho quando o que esta embaixo dele e uma secao
  `.claro` ou `.pedra`, e o simbolo, o "Onde" e o botao do menu ficam onix.
  No computador o cabecalho segue escurecendo ao rolar, como antes.
- **Respiro menor entre secoes.** Eram 126px em cima e embaixo de cada secao,
  e sobravam telas quase vazias entre uma e outra; no celular passou a
  `clamp(64px, 9vh, 92px)`.

## Movimento

O manual pede movimento discreto, entao cada efeito tem uma razao.

- **Cortina de entrada.** No primeiro carregamento a tela e onix com o simbolo
  no meio, e ela **ABRE como um pano de teatro**, em tres tempos:

  | Quando | O que acontece |
  |---|---|
  | ate 1,4s | o simbolo se revela de baixo para cima |
  | 1,4s | um fio champagne acende na juncao das duas folhas |
  | 1,8s | as folhas correm para os lados e o site aparece no meio |

  Sao duas folhas de onix, cada uma com 50,5% da largura: a sobra de meio por
  cento em cada lado evita costura visivel no meio. A cortina so fica
  `hidden` 1,65s depois, quando as folhas ja sairam da tela, mas para de
  bloquear o clique assim que comeca a abrir.

  Com movimento reduzido nao ha espera nenhuma: ela ja nasce aberta.
- **Slideshow da abertura.** Quatro fotos, uma por praca, trocando a cada 6,6
  segundos com fusao lenta e avanco continuo da imagem, que e o que da a
  sensacao de video. O slideshow para sozinho quando a aba perde o foco.
- **Filtro das pracas.** Numero em Jost e nome em Cormorant italico, sempre no
  mesmo corpo, para nada saltar na troca. O que muda e a presenca: a praca no
  ar clareia, o numero vira champagne e um filete champagne corre sob o nome
  marcando o tempo. Clicar leva direto aquela praca.
- **Barra de progresso.** Um filete champagne de 1px no topo mostra quanto
  falta da pagina.
- **A banda da curadoria.** Cada residencia e uma lamina estreita, em pe, com a
  cidade escrita na vertical. Apontar uma lamina a abre: ela empurra as
  vizinhas, a foto recupera a cor, o filete champagne acende na borda e a ficha
  sobe no pe. As outras continuam ali, de canto. A secao inteira ocupa pouco
  mais de meia tela, e entrar ou sair residencia **nao** muda essa altura: as
  laminas so ficam mais estreitas ou mais largas.
- **Revelacao ao rolar.** Os blocos sobem ao entrar na tela, escalonados.
- **A linha caida.** UMA linha em champagne sobre a borda de cima de cada bloco
  de imagem. A curva e a de um fio preso pelas duas pontas: cede no meio e sobe
  nas beiradas. Ela se desenha de uma ponta a outra quando o bloco chega na
  tela, em pouco mais de dois segundos e meio.

  Sao tres, uma sobre a banda da curadoria, uma sobre a faixa de imagem da
  secao A AMGlobal e uma sobre o palco dos servicos, cada uma com a sua curva.
  Todas nascem um pouco acima da foto e passam das duas bordas laterais, para
  parecerem um fio que continua para fora da tela.

  Dois detalhes seguram a delicadeza:

  1. O desenho estica na largura da tela, mas a espessura nao acompanha
     (`vector-effect: non-scaling-stroke`). A linha fica com um pixel em
     qualquer largura; sem isso, engrossaria numa tela grande.
  2. O comprimento do traco e medido depois de inserido, com `getTotalLength`.
     E ele que faz a linha se DESENHAR em vez de simplesmente aparecer.

  A caixa da linha fica num embrulho em volta do bloco, e nao dentro dele: o
  bloco corta o que transborda, e a linha precisa nascer acima da foto para
  depois cair sobre ela. Em tela pequena ela cai menos, para nao cobrir metade
  da imagem.

  Para mudar a curva, a altura da queda ou onde as linhas aparecem, mexa na
  lista `LINHAS`, dentro do script.
- **O palco dos servicos.** A secao inteira e uma fotografia de borda a borda,
  furando a margem lateral, com os quatro oficios escritos por cima dela e a
  moldura champagne aberta por dentro. Trocar de oficio nao troca so o texto: a
  fotografia e VARRIDA da direita para a esquerda, em vez de desbotar. Enquanto
  esta no ar, a imagem avanca devagar.

  Sao tres camadas fixas e so tres: o fundo parado, a que sai e a que entra por
  cima. Quem manda na visibilidade e a opacidade; a varredura e enfeite, entao
  mesmo que a animacao nao rode a foto troca do mesmo jeito. A que entra
  reinicia a animacao a cada troca, senao da segunda vez em diante ela nao
  animaria.

  Em tela estreita o palco fica em pe, mais alto, com o veu vindo de baixo e o
  texto empilhado no pe.
- **Faixa do rodape.** As frases da marca correm devagar, em italico.
- **As tres horas** da secao Global. Ver a secao propria, logo abaixo.

Quem tiver "reduzir movimento" ligado no sistema nao ve nada disso: a pagina
aparece inteira e parada.

### A secao 04, Servicos: o percurso

**Tres versoes anteriores:** uma fotografia de borda a borda com os quatro
oficios escritos por cima (a unica secao aprovada de primeira, mas a pagina
tinha cinco secoes seguidas puxadas por imagem); os mesmos nomes sem
fotografia, em Cormorant de ate 96px (grandes demais); e enfim esta.

O titulo da secao e **"Do primeiro contato a escritura"** — ou seja, um
TRAJETO. Nenhuma das versoes anteriores usava isso.

Agora a forma diz o que o titulo diz: os quatro oficios sao **estacoes de um
percurso**, e a **linha champagne AVANCA** ate a estacao em que a pessoa esta.
A linha nao e enfeite: ela e a jornada, e o quanto dela ja se andou. As
estacoes ja passadas ficam com o ponto contornado; a atual, com o ponto cheio.

**O tipo voltou a um corpo de leitura:** 22 a 34px, contra os 36 a 96px da
versao anterior. Quem carrega a secao e o trajeto, e nao o tamanho da letra.

⚠️ **O avanco da linha e MEDIDO, e nao uma fracao chutada.** O ponto de cada
estacao fica na borda esquerda dela, e as colunas do grid nao tem a mesma
largura em toda tela — `indice / 3` daria errado. O script le a posicao real do
botao dentro da trilha, e refaz a conta quando a janela muda de tamanho e
quando as fontes terminam de carregar, porque as duas coisas mudam a largura
das colunas.

No celular nao ha largura para quatro estacoes lado a lado: **o trajeto vira
vertical**, com a linha descendo pela esquerda e as estacoes descendo com ela.

**A secao nao tem imagem nenhuma**, e e isso que da o respiro no meio da
pagina: abertura (4 imagens), curadoria (12), A AMGlobal (1), **servicos
(nenhuma)**, global (12), contato (nenhuma).

A linha caida que pousava sobre o palco desta secao foi removida junto com a
fotografia: ela e um fio pousado na borda de cima de uma imagem, e sem imagem
nao tem onde pousar. Restaram duas, na curadoria e na faixa da secao 03.

### A secao 05, Global: o nome atravessa a fotografia

**Cinco versoes desta secao foram recusadas**, e vale registrar o porque, que
so ficou claro na quinta: tres colunas com a hora pequena, tres faixas com a
hora grande e uma linha do dia, um mapa-mundi pontilhado com arcos, o mesmo
mapa mostrando onde era dia, e tres janelas com o ceu mudando de cor.

**As cinco eram pequenas, claras, discretas e diagramaticas.** E a unica secao
deste site aprovada de primeira foi a **04**: fotografia grande, tipo grande
por cima, fundo escuro, movimento na troca. A distancia estava ai, e nao na
ideia de cada versao. Todas as versoes anteriores estao no historico desta
branch, junto com o gerador do mapa pontilhado.

Esta versao fala a lingua da 04, com uma composicao diferente para nao virar a
04 de novo:

- **A secao voltou a ser ONIX**, e a textura de diagonais saiu junto.
  Fotografia grande sobre travertino ficava lavada, e a textura era para fundo
  de pedra, nao para cima de foto.
- **A fotografia e um painel a direita**, ocupando cerca de 62% da largura, e
  **o NOME DA PRACA ATRAVESSA A BORDA DELE** — metade no onix, metade na
  imagem. Na 04 a fotografia sangra de borda a borda e os nomes ficam em lista
  sobre ela; aqui e o tipo que manda e a fotografia entra por baixo.
- **O nome e grande de verdade**: ate 200px em Cormorant. Um veu escurece a
  ESQUERDA do painel, que e justamente onde o nome cruza, para ele ler.
- **A troca e a mesma varredura da 04** (o recorte indo de 100% a 0), e a secao
  ANDA SOZINHA a cada 7 segundos, com a barra de tempo correndo sob o marcador
  — como no slideshow da abertura. Para quando a pessoa aponta e volta quando
  ela sai; para tambem com a aba escondida, para nao gastar bateria a toa.
- **O brilho da fotografia segue a hora que e la**: Dubai a noite entra escura,
  a Florida de tarde entra aberta. Sao os mesmos cinco estados do dia (madrugada,
  amanhecer, dia, entardecer, noite), guardados em `data-estado-do-dia` no
  proprio elemento e lidos por quem troca de praca.

**Quem manda e o MARCADOR.** A fotografia, o nome, o relogio e o pe apenas o
acompanham, pelo mesmo indice. Quem controla a visibilidade e a OPACIDADE e nao
a varredura: se a animacao nao rodar, a foto troca do mesmo jeito. Foi o que
resolveu o mesmo problema no palco dos servicos.

A barra de tempo so recomeca do zero porque a classe sai, ha um reflow forcado
(`void b.offsetWidth`) e ela volta. Sem o reflow o navegador nao reinicia a
animacao.

Com movimento reduzido no sistema a secao **nao anda sozinha**: fica na
primeira e so troca se a pessoa pedir.

⚠️ **PROVISORIO:** as doze fotografias das cartas sao as capas das pracas no
`dados.js`, as mesmas das paginas internas, e vem do Unsplash. Saem junto com
o resto do banco de imagem quando chegar a fotografia propria.

**A diferenca para Sao Paulo e CALCULADA, nunca escrita a mao.** Ela muda
sozinha quando um dos dois lados entra ou sai do horario de verao: em janeiro
Portugal esta 3 horas a frente, em julho esta 4. A Florida e Portugal mudam em
datas diferentes das nossas, e Dubai nao muda nunca — escrever "7 horas a
frente" no HTML daria informacao errada duas vezes por ano.

A hora, o estado do dia e a diferenca saem do MESMO instante, numa leitura so,
para nunca se contradizerem. A volta do dia esta tratada: com Sao Paulo as
17:30 e Dubai ja em 00:30 do dia seguinte, a conta continua dizendo "7 horas a
frente" em vez de "17 horas atras".

Conferido fora do navegador, rodando a secao inteira num DOM falso com o
relogio travado: as cinco camadas andam sempre juntas, a volta funciona, o
brilho segue a praca no ar, e os relogios batem.

## O atendimento guiado

Nao existe mais. Era um painel de respostas prontas, sem IA, e foi retirado
da pagina. O caminho de contato agora e o formulario da secao 06, abaixo.

## O formulario de contato (secao 06)

A secao 06 e um formulario que **abre o WhatsApp da casa com a mensagem
pronta**. O site nao tem servidor, entao nada e enviado por tras: o script
monta o texto com o que a pessoa escreveu e abre `https://wa.me/<numero>?text=...`.
No celular abre o aplicativo; no computador, o WhatsApp Web. A pessoa ve a
mensagem antes de mandar, e e o numero DELA que chega -- por isso nao ha campo
de telefone.

Campos: nome (obrigatorio), o que procura (Comprar, Vender, Investir ou
Assessoria, obrigatorio), onde (as doze pracas do `dados.js`, ou "Ainda nao
sei") e mensagem (opcional). O botao e "Agende uma visita privada", o CTA que
o manual aprovou. A mensagem que chega fica assim:

```
Olá, AMGlobal. Sou Ana Lima.
Quero comprar em Balneário Camboriú.
Procuro frente mar, com 3 suítes, para morar.
```

**O numero fica numa constante so**, `WHATSAPP`, no fim do script do
`index.html`: so digitos, com o 55 e o DDD. Hoje e `5511959943705`, que ela
passou em 05/10/2026 como provisorio ("por enquanto"); para trocar, basta
mudar ali. Se a constante ficar vazia, o WhatsApp abre com a mensagem e pede
para escolher o contato, e a linha "WhatsApp" da secao volta a "A informar";
com o numero, a linha e um link e o formulario abre direto a conversa.

Os campos sao caixas de borda fina (ela pediu "boxes"; a primeira versao, so
com um filete embaixo do texto, nao parecia formulario).

Sem JavaScript o botao ainda abre o WhatsApp (e o `action` do formulario), so
que sem o texto. Se o navegador bloquear a janela nova, a conversa abre na
mesma aba.

As paginas de cidade e de imovel continuam levando para `index.html#contato`,
entao todo "Fale com um consultor" do site termina neste formulario.

## Detalhes tecnicos

- Um arquivo so. CSS e JavaScript ficam dentro do `index.html`.
- Fontes vem do Google Fonts, com pilha de reserva declarada.
- Sem biblioteca, sem framework, sem dependencia externa alem das fontes.
- O scroll usa `requestAnimationFrame`, e as revelacoes usam
  `IntersectionObserver` com `unobserve` depois de disparar.
- Acessibilidade: foco visivel em todo link e botao, sanfona com
  `aria-expanded` e `aria-controls`, menu que fecha no Esc, indice com rotulo.
- Responsivo a partir de 320px. O menu vira tela cheia abaixo de 900px e o
  indice lateral some abaixo de 1100px.
