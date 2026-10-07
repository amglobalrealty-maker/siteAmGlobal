#!/usr/bin/env node
/* A TRAVA ANTES DE PUBLICAR. A rotina mensal (.github/workflows/mercado.yml)
   so grava mercado-dados.js no site se esta conferencia passar:

   - o arquivo existe, e valido e define window.MERCADO;
   - pelo menos 7 dos 9 estados tem o primeiro cartao preenchido;
   - pelo menos 3 dos 4 paises tem o primeiro cartao preenchido;
   - nenhum estado esta marcado como exemplo (amostra: true);
   - a data de geracao e de hoje.

   Uma fonte fora do ar vira "sem dado" e passa; a coleta inteira ruim (rede
   bloqueada, fonte que mudou) nao passa, e o site fica com o ultimo dado bom.
   Sai com codigo 1 para a rotina parar. */
'use strict';
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const ARQ = path.join(__dirname, '..', 'mercado-dados.js');
const problemas = [];
let M = null;
try {
  const ctx = { window: {} };
  vm.runInNewContext(fs.readFileSync(ARQ, 'utf8'), ctx);
  M = ctx.window.MERCADO;
  if (!M || !Array.isArray(M.estados) || !Array.isArray(M.paises)) problemas.push('o arquivo nao define window.MERCADO com paises e estados');
} catch (e) {
  problemas.push('nao consegui ler mercado-dados.js: ' + e.message);
}

if (M && M.estados && M.paises) {
  const cheio = (x) => x && x.cartoes && x.cartoes[0] && x.cartoes[0].valor != null;
  const estadosOk = M.estados.filter(cheio);
  const paisesOk = M.paises.filter(cheio);
  const semDado = M.estados.filter(e => !cheio(e)).map(e => e.nome).concat(M.paises.filter(p => !cheio(p)).map(p => p.nome + ' (pais)'));
  console.log('estados com dado: ' + estadosOk.length + ' de ' + M.estados.length);
  console.log('paises com dado:  ' + paisesOk.length + ' de ' + M.paises.length);
  if (semDado.length) console.log('sem dado: ' + semDado.join(', '));
  if (estadosOk.length < 7) problemas.push('so ' + estadosOk.length + ' estados com dado (minimo 7)');
  if (paisesOk.length < 3) problemas.push('so ' + paisesOk.length + ' paises com dado (minimo 3)');
  if (M.estados.some(e => e.amostra)) problemas.push('ha estado marcado como exemplo');
  const hoje = new Date().toISOString().slice(0, 10);
  if (M.geradoEm !== hoje) problemas.push('geradoEm e ' + M.geradoEm + ', esperava ' + hoje);
  console.log('gerado em ' + M.geradoEm + '; IA: ' + M.ia);
}

if (problemas.length) {
  console.error('NAO PUBLICAR:');
  problemas.forEach(p => console.error('  - ' + p));
  process.exit(1);
}
console.log('coleta boa: pode publicar');
