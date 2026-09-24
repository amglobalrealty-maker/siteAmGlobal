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
| Textura | Diagonais a 26 graus, tom sobre tom, nunca atras de texto |
| Tom de voz | Frases curtas, sem superlativo, sem exclamacao |
| Chamada | "Agende uma visita privada", exatamente como o manual aprovou |
| Numeros | Tabulares, para alinhar em coluna |

Palavras proibidas pelo manual e que nao aparecem em lugar nenhum do site:
oportunidade, imperdivel, corretor, luxuoso.

## O que ainda esta provisorio

Quatro pontos dependem de material que a cliente ainda precisa enviar.
Todos estao marcados no `index.html` com um comentario `ATENCAO`.

1. **Simbolo.** O manual proibe redesenhar o simbolo a mao. O SVG que esta no
   cabecalho, no favicon e no rodape e uma aproximacao minha, feita so para o
   site nao ficar sem marca. Assim que chegar o arquivo vetorial oficial, ele
   substitui esse trecho. Enquanto isso, nao use este site como referencia da
   marca em nenhuma peca impressa.
2. **Fotografia.** O manual proibe banco de imagem em material de imovel, entao
   nao coloquei nenhuma foto generica. As areas de imagem estao com a textura de
   diagonais da propria marca e a legenda "Fotografia a incluir". Precisa da
   foto de abertura em tela cheia e de uma foto vertical por imovel.
3. **Imoveis.** A secao Curadoria esta com a estrutura montada e tres espacos
   vazios. Nao inventei nome, bairro, metragem nem valor. Falta a lista real.
4. **Contato.** WhatsApp, e-mail, endereco do escritorio e numero do CRECI estao
   como "A informar". O ano no rodape tambem precisa conferir.

## Estrutura da pagina

1. Abertura, com a tagline e um unico chamado
2. Curadoria, com os tres imoveis em destaque
3. A AMGlobal, com curadoria, precisao e discricao
4. Servicos: comprar, vender, investir e assessorar do exterior
5. Global: Orlando, Dubai e Portugal
6. Contato
7. Rodape

## Detalhes tecnicos

- Um arquivo so. CSS e JavaScript ficam dentro do `index.html`.
- Fontes vem do Google Fonts, com pilha de reserva declarada.
- O JavaScript faz duas coisas: dar fundo ao cabecalho depois da abertura e
  abrir o menu no celular. Nada alem disso.
- Acessibilidade: foco visivel em todo link e botao, menu com `aria-expanded`,
  o menu fecha no Esc, e quem pede menos movimento no sistema nao ve animacao.
- Responsivo a partir de 320px. O ponto de virada do menu e 860px.
