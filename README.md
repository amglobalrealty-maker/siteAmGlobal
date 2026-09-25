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
| Textura | Diagonais a 26 graus, tom sobre tom, nunca atras de texto nem sobre foto. Ficou so na secao Global, bem aberta, lendo como grao do travertino |
| Tom de voz | Frases curtas, sem superlativo, sem exclamacao |
| Chamada | "Agende uma visita privada", exatamente como o manual aprovou |
| Numeros | Tabulares, para alinhar em coluna |

Palavras proibidas pelo manual e que nao aparecem em lugar nenhum do site:
oportunidade, imperdivel, corretor, luxuoso.

## O que ainda esta provisorio

Quatro pontos dependem de material que a cliente ainda precisa enviar.
Todos estao marcados no `index.html` com um comentario `ATENCAO`.

1. **Assinatura horizontal.** O simbolo esta correto, extraido do manual (ver a
   secao abaixo). Se o manual tiver um arquivo separado com a assinatura
   horizontal fechada, ela deve substituir o par simbolo mais nome em Jost que
   o cabecalho usa hoje.
2. **Fotografia.** As oito fotos do site sao do Unsplash, de licenca livre, e
   estao aqui a pedido da cliente so para o site nao ficar vazio. **O manual
   proibe banco de imagem em material de imovel**, entao elas sao temporarias e
   saem assim que chegar a fotografia propria. Enderecos na tabela abaixo.
   Todas entram dessaturadas por CSS, para nao brigarem com onix e travertino.
3. **Imoveis.** A curadoria esta com oito imoveis DE TESTE, a pedido da
   cliente, para o filtro ter o que filtrar. Nome, area e suites sao
   inventados. Falta a lista real. Ver a secao "O filtro por pais e cidade".
4. **Contato.** WhatsApp, e-mail, endereco do escritorio e numero do CRECI estao
   como "A informar". O ano no rodape tambem precisa conferir.

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

## Estrutura da pagina

| Numero | Secao | O que faz |
|---|---|---|
| 01 | Abertura | Tela cheia em onix, tagline em duas linhas, um unico chamado |
| 02 | Curadoria | As residencias penduradas num fio champagne que desce a secao alternando de lado. Filtravel por pais e cidade |
| 03 | A AMGlobal | Citacao grande em italico e os tres pilares |
| 04 | Servicos | Lista sanfonada: comprar, vender, investir e assessorar do exterior |
| 05 | Global | Orlando, Dubai e Portugal, com a hora local de cada praca |
| 06 | Contato | Fecho editorial e os canais |
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
- Escolher a **cidade** filtra, fecha o painel e leva ate a curadoria.
- O texto do seletor sempre mostra onde a pessoa esta: "Todos os paises", o
  nome do pais ou o nome da cidade.
- Abaixo do indice, uma linha diz quantas residencias aquele recorte tem.
- Sem nenhum resultado, aparece um recado convidando a falar com um consultor.
- Fecha no Esc ou clicando fora. No celular ocupa a tela inteira e rola.

**A fonte da verdade sao as proprias residencias.** Cada uma carrega
`data-pais` e `data-cidade`; ate as contagens do painel sao somadas a partir
delas quando a pagina abre, e o fio se redesenha a partir do que sobrar na
tela. Para trocar o portfolio basta editar os blocos `fio-item`, mantendo esses
dois atributos. So e preciso mexer no painel se entrar um pais ou uma cidade
que ainda nao esteja listado la.

### Imoveis de teste

Os oito imoveis da curadoria **sao de teste**, a pedido da cliente, so para o
filtro ter o que filtrar. Nome, area e numero de suites foram inventados; as
fotos sao do Unsplash. Estao distribuidos assim:

| Pais | Cidades |
|---|---|
| Brasil | Sao Paulo, Rio de Janeiro, Florianopolis |
| Estados Unidos | Orlando, Miami |
| Emirados | Dubai |
| Portugal | Lisboa, Cascais |

## Movimento

O manual pede movimento discreto, entao cada efeito tem uma razao.

- **Cortina de entrada.** O simbolo e revelado por uma cortina que sobe, uma
  vez, no primeiro carregamento, e a abertura sobe por linhas.
- **Slideshow da abertura.** Quatro fotos, uma por praca, trocando a cada 6,6
  segundos com fusao lenta e avanco continuo da imagem, que e o que da a
  sensacao de video. O slideshow para sozinho quando a aba perde o foco.
- **Filtro das pracas.** Numero em Jost e nome em Cormorant italico, sempre no
  mesmo corpo, para nada saltar na troca. O que muda e a presenca: a praca no
  ar clareia, o numero vira champagne e um filete champagne corre sob o nome
  marcando o tempo. Clicar leva direto aquela praca.
- **Barra de progresso.** Um filete champagne de 1px no topo mostra quanto
  falta da pagina.
- **O fio da curadoria.** Uma unica curva champagne desce a secao passando pelo
  centro de cada residencia, com um ponto em cada uma. Ela e desenhada em
  pixels, no tamanho real da secao, entao acompanha qualquer largura de tela, e
  e refeita a cada filtro: com tres residencias o fio e curto, com oito ele
  desce a secao inteira. O traco se desenha quando a secao chega na tela.
  O lado de cada residencia tambem sai do script, e nao do CSS, para a
  alternancia continuar certa depois de filtrar.
- **Revelacao ao rolar.** Os blocos sobem ao entrar na tela, escalonados.
- **Sanfona dos servicos.** Uma linha aberta por vez.
- **Faixa do rodape.** As frases da marca correm devagar, em italico.
- **Hora local.** Dado real, via fuso horario do navegador, atualizado a cada
  30 segundos. Nao e numero inventado.

Quem tiver "reduzir movimento" ligado no sistema nao ve nada disso: a pagina
aparece inteira e parada.

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
