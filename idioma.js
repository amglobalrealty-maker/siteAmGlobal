/* AMGlobal Realty: PT / EN / ES no cabecalho (19/10/2026, pedido da cliente: "botao para traduzir
   o site para ingles, espanhol e portugues"). Tradutor automatico do Google por baixo: este arquivo
   carrega o widget escondido, desenha os tres botoes dentro de .topo-direita (e, na home, tambem
   dentro do menu do celular), guarda a escolha no cookie googtrans (que o proprio Google le ao abrir
   qualquer pagina do site) e esconde a faixa do Google. Marcas e nomes proprios ficam sem traduzir
   pela classe notranslate. Uma copia deste script em cada pagina: <script src="idioma.js" defer>. */
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
    document.querySelectorAll('.idiomas button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-idioma') === idioma ? 'true' : 'false');
    });
    document.documentElement.setAttribute('data-idioma', idioma);
  }
  function trocar(idioma) {
    if (idioma === 'pt') { gravarCookie(null); location.reload(); return; }
    gravarCookie('/pt/' + idioma);
    var combo = document.querySelector('.goog-te-combo');
    if (combo) { combo.value = idioma; combo.dispatchEvent(new Event('change')); marcar(idioma); }
    else location.reload();
  }

  function estilo() {
    var css = ''
      + '.idiomas{display:flex;align-items:center;gap:2px;font-family:var(--sans,"Jost",sans-serif);font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:inherit}'
      + '.idiomas.escuro{color:var(--marfim,#F5F2EC)}'
      + '.topo.sobre-claro .idiomas{color:var(--onix,#0B0B0C)}'
      + '.idiomas button{position:relative;background:none;border:0;padding:8px 5px;margin:0;color:inherit;font:inherit;letter-spacing:inherit;text-transform:inherit;opacity:.55;cursor:pointer;transition:opacity .4s ease}'
      + '.idiomas button:hover,.idiomas button:focus-visible{opacity:1;outline:none}'
      + '.idiomas button[aria-pressed="true"]{opacity:1}'
      + '.idiomas button[aria-pressed="true"]::after{content:"";position:absolute;left:5px;right:5px;bottom:4px;height:1px;background:var(--champagne,#B49A6E)}'
      + '.idiomas i{font-style:normal;opacity:.3}'
      + '.idiomas-menu{display:none}'
      + '@media (max-width:900px){.idiomas-topo.na-home{display:none}.idiomas-menu{display:flex;margin-top:28px;font-size:12px}.idiomas-menu button{padding:10px 8px}}'
      /* paginas internas no celular estreito: so os outros dois idiomas, para caber ao lado do botao */
      + '@media (max-width:600px){.idiomas-topo:not(.na-home) button[aria-pressed="true"],.idiomas-topo:not(.na-home) i{display:none}.idiomas-topo:not(.na-home){gap:0}}'
      /* traduzida, a barra da home fica mais longa (Curatorship, Developments, Speak to a consultant):
         o menu aperta, o nome da marca sai e, em telas medias, o botao tambem; em portugues nada muda */
      + '@media (max-width:1700px){html.translated-ltr .topo .marca-nome{display:none}html.translated-ltr .topo-direita{gap:14px}html.translated-ltr .menu{gap:14px}html.translated-ltr .menu a{letter-spacing:.12em}html.translated-ltr .topo .filtro-abrir{letter-spacing:0}}'
      + '@media (max-width:1500px){html.translated-ltr .topo .botao{display:none}}'
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

  function botoes(classe) {
    var caixa = document.createElement('div');
    caixa.className = 'idiomas ' + classe;
    caixa.setAttribute('role', 'group');
    caixa.setAttribute('aria-label', 'Idioma');
    caixa.classList.add('notranslate');
    IDIOMAS.forEach(function (par, i) {
      if (i) { var sep = document.createElement('i'); sep.textContent = '·'; sep.setAttribute('aria-hidden', 'true'); caixa.appendChild(sep); }
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('data-idioma', par[0]);
      b.setAttribute('aria-label', par[1]);
      b.setAttribute('lang', par[0]);
      b.textContent = par[0].toUpperCase();
      b.addEventListener('click', function () { trocar(par[0]); });
      caixa.appendChild(b);
    });
    return caixa;
  }

  function montar() {
    estilo();
    var direita = document.querySelector('.topo-direita');
    if (!direita) return;
    var naHome = !!document.querySelector('.topo .menu');
    var topo = botoes('idiomas-topo' + (naHome ? ' na-home escuro' : ''));
    var ancora = direita.querySelector('.botao') || direita.querySelector('.menu-abrir');
    if (ancora) direita.insertBefore(topo, ancora); else direita.appendChild(topo);
    var menu = document.querySelector('.topo .menu');
    if (menu) menu.appendChild(botoes('idiomas-menu escuro'));
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
