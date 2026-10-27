/* AM Global Realty: seletor de idioma no cabecalho (19/10/2026, pedido da cliente: "botao para traduzir
   o site para ingles, espanhol e portugues"; depois: "um menu que desce com as linguas, nao um do lado
   do outro, senao ocupa muito espaco", e "o menu nao pode mudar de lugar quando traduz").
   Tradutor automatico do Google por baixo: este arquivo carrega o widget escondido, desenha um seletor
   compacto (a sigla do idioma atual e uma setinha; ao tocar, desce a lista Portugues / English /
   Espanol) dentro de .topo-direita, em todas as larguras (no celular fica ao lado do Localizacoes,
   nunca dentro do menu), guarda a escolha no cookie googtrans (que o proprio Google le ao abrir
   qualquer pagina do site) e esconde a faixa do Google. Marcas e nomes proprios ficam sem traduzir pela classe notranslate. Nada da barra muda de
   tamanho ou de lugar por causa do idioma: o seletor tem a mesma largura em qualquer lingua.
   Uma copia deste script em cada pagina: <script src="idioma.js" defer>. */
(function () {
  'use strict';
  var IDIOMAS = [['pt', 'Português'], ['en', 'English'], ['es', 'Español']];
  var ALVO = 'amg-google-tradutor';

  function cookieAtual() {
    var m = document.cookie.match(/(?:^|;\s*)googtrans=([^;]*)/);
    if (!m) return 'pt';
    var partes = decodeURIComponent(m[1]).split('/');
    return partes[2] && partes[2] !== 'pt' ? partes[2] : 'pt';
  }
  function gravarCookie(valor) {
    var host = location.hostname, raiz = host.replace(/^www\./, '');
    var dominios = ['', '; domain=' + host, '; domain=.' + raiz];
    dominios.forEach(function (d) {
      document.cookie = valor
        ? 'googtrans=' + valor + '; path=/' + d
        : 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + d;
    });
  }
  function marcar(idioma) {
    document.querySelectorAll('.idiomas').forEach(function (caixa) {
      caixa.querySelector('.idiomas-sigla').textContent = idioma.toUpperCase();
      caixa.querySelectorAll('.idiomas-lista button').forEach(function (b) {
        b.setAttribute('aria-selected', b.getAttribute('data-idioma') === idioma ? 'true' : 'false');
      });
    });
    document.documentElement.setAttribute('data-idioma', idioma);
  }
  function fecharTodos() {
    document.querySelectorAll('.idiomas.aberto').forEach(function (c) {
      c.classList.remove('aberto');
      c.querySelector('.idiomas-atual').setAttribute('aria-expanded', 'false');
    });
  }
  function trocar(idioma) {
    fecharTodos();
    if (idioma === 'pt') { gravarCookie(null); location.reload(); return; }
    gravarCookie('/pt/' + idioma);
    var combo = document.querySelector('.goog-te-combo');
    if (combo) { combo.value = idioma; combo.dispatchEvent(new Event('change')); marcar(idioma); }
    else location.reload();
  }

  function estilo() {
    var css = ''
      + '.idiomas{position:relative;display:inline-block;font-family:var(--sans,"Jost",sans-serif);font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:inherit}'
      + '.idiomas.escuro{color:var(--marfim,#F5F2EC)}'
      + '.topo.sobre-claro .idiomas-topo{color:var(--onix,#0B0B0C)}'
      + '.idiomas-atual{display:inline-flex;align-items:center;gap:6px;background:none;border:0;border-bottom:1px solid currentColor;padding:6px 1px 7px;margin:0;color:inherit;font:inherit;letter-spacing:inherit;text-transform:inherit;opacity:.78;cursor:pointer;transition:opacity .4s ease;min-width:38px;justify-content:space-between}'
      + '.idiomas-atual:hover,.idiomas-atual:focus-visible,.idiomas.aberto .idiomas-atual{opacity:1;outline:none}'
      + '.idiomas-atual svg{width:9px;height:6px;flex:0 0 auto;transition:transform .4s ease}'
      + '.idiomas.aberto .idiomas-atual svg{transform:rotate(180deg)}'
      + '.idiomas-lista{position:absolute;top:calc(100% + 10px);right:0;min-width:150px;margin:0;padding:6px 0;list-style:none;border:1px solid rgba(11,11,12,.14);background:var(--marfim,#F5F2EC);color:var(--onix,#0B0B0C);box-shadow:0 14px 34px rgba(0,0,0,.18);opacity:0;transform:translateY(-6px);pointer-events:none;transition:opacity .3s ease,transform .3s ease;z-index:130;text-transform:none;letter-spacing:.04em;font-size:13px}'
      + '.idiomas.escuro .idiomas-lista{background:var(--onix,#0B0B0C);color:var(--marfim,#F5F2EC);border-color:rgba(245,242,236,.16)}'
      + '.idiomas.aberto .idiomas-lista{opacity:1;transform:none;pointer-events:auto}'
      + '.idiomas-lista button{display:flex;align-items:center;justify-content:space-between;gap:18px;width:100%;background:none;border:0;padding:9px 16px;margin:0;color:inherit;font:inherit;letter-spacing:inherit;text-align:left;cursor:pointer;opacity:.72;transition:opacity .3s ease}'
      + '.idiomas-lista button:hover,.idiomas-lista button:focus-visible{opacity:1;outline:none}'
      + '.idiomas-lista button[aria-selected="true"]{opacity:1}'
      + '.idiomas-lista button small{font-size:10px;letter-spacing:.18em;text-transform:uppercase;opacity:.55}'
      + '.idiomas-lista button[aria-selected="true"] small{color:var(--champagne,#B49A6E);opacity:1}'
      /* no celular o seletor fica na barra, ao lado do Localizacoes (ela, 19/10: "no mobile o mudar
         de lingua tem que aparecer do lado de Localizacoes, nao no menu"); o vao da barra aperta
         para caber simbolo, Localizacoes, idioma e o botao do menu em 360px */
      + '@media (max-width:600px){.topo .topo-direita{gap:14px}.idiomas-atual{min-width:34px;gap:5px;padding:6px 0 7px}}'
      + '#' + ALVO + '{display:none}'
      /* a faixa e os baloes do Google */
      + '.goog-te-banner-frame,.skiptranslate iframe,#goog-gt-tt,.goog-te-balloon-frame,.goog-tooltip,.VIpgJd-ZVi9od-aZ2wEe-wOHMyf,.VIpgJd-ZVi9od-ORHb-OEVmcd{display:none!important}'
      + 'body{top:0!important;position:static!important}'
      + '.goog-text-highlight,font.goog-text-highlight{background:none!important;box-shadow:none!important}';
    var s = document.createElement('style');
    s.setAttribute('data-idioma-css', '');
    s.textContent = css;
    document.head.appendChild(s);
  }

  function seletor(classe) {
    var caixa = document.createElement('div');
    caixa.className = 'idiomas ' + classe + ' notranslate';
    var atual = document.createElement('button');
    atual.type = 'button';
    atual.className = 'idiomas-atual';
    atual.setAttribute('aria-haspopup', 'listbox');
    atual.setAttribute('aria-expanded', 'false');
    atual.setAttribute('aria-label', 'Idioma');
    atual.innerHTML = '<span class="idiomas-sigla">PT</span><svg viewBox="0 0 11 7" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true"><path d="M1 1 L5.5 6 L10 1"/></svg>';
    var lista = document.createElement('ul');
    lista.className = 'idiomas-lista';
    lista.setAttribute('role', 'listbox');
    lista.setAttribute('aria-label', 'Idiomas');
    IDIOMAS.forEach(function (par) {
      var li = document.createElement('li');
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('role', 'option');
      b.setAttribute('data-idioma', par[0]);
      b.setAttribute('lang', par[0]);
      b.setAttribute('aria-selected', 'false');
      b.innerHTML = '<span>' + par[1] + '</span><small>' + par[0].toUpperCase() + '</small>';
      b.addEventListener('click', function () { trocar(par[0]); });
      li.appendChild(b);
      lista.appendChild(li);
    });
    atual.addEventListener('click', function (ev) {
      ev.stopPropagation();
      var abrir = !caixa.classList.contains('aberto');
      fecharTodos();
      if (abrir) { caixa.classList.add('aberto'); atual.setAttribute('aria-expanded', 'true'); }
    });
    caixa.appendChild(atual);
    caixa.appendChild(lista);
    return caixa;
  }

  function montar() {
    estilo();
    var direita = document.querySelector('.topo-direita');
    if (!direita) return;
    var naHome = !!document.querySelector('.topo .menu');
    var topo = seletor('idiomas-topo' + (naHome ? ' na-home escuro' : ''));
    var ancora = direita.querySelector('.botao') || direita.querySelector('.menu-abrir');
    if (ancora) direita.insertBefore(topo, ancora); else direita.appendChild(topo);
    document.addEventListener('click', fecharTodos);
    document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') fecharTodos(); });
    // o que nunca se traduz: a marca e o que a pagina marcar
    document.querySelectorAll('.marca, .marca-nome, .janela-endereco, .endereco').forEach(function (el) { el.classList.add('notranslate'); });
    var alvo = document.createElement('div');
    alvo.id = ALVO;
    document.body.appendChild(alvo);
    marcar(cookieAtual());
    window.__amgIdiomaPronto = function () {
      try {
        new window.google.translate.TranslateElement({ pageLanguage: 'pt', includedLanguages: 'en,es,pt', autoDisplay: false }, ALVO);
      } catch (e) { /* sem o tradutor a pagina continua em portugues */ }
    };
    var s = document.createElement('script');
    s.src = 'https://translate.google.com/translate_a/element.js?cb=__amgIdiomaPronto';
    s.async = true;
    document.head.appendChild(s);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', montar); else montar();
  window.AMG_IDIOMA = { trocar: trocar, atual: cookieAtual };
})();
