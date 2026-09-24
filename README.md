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
2. **Fotografia.** As cinco fotos do site sao do Unsplash, de licenca livre, e
   estao aqui a pedido da cliente so para o site nao ficar vazio. **O manual
   proibe banco de imagem em material de imovel**, entao elas sao temporarias e
   saem assim que chegar a fotografia propria. Enderecos na tabela abaixo.
   Todas entram dessaturadas por CSS, para nao brigarem com onix e travertino.
3. **Imoveis.** A secao Curadoria esta com a estrutura montada e tres espacos
   vazios. Nao inventei nome, bairro, metragem nem valor. Falta a lista real.
4. **Contato.** WhatsApp, e-mail, endereco do escritorio e numero do CRECI estao
   como "A informar". O ano no rodape tambem precisa conferir.

### Fotos provisorias em uso

Todas servidas direto pelo Unsplash, sem arquivo no repositorio.
Para trocar, substitua o `src` da tag `img` correspondente.

| Onde | Identificador da foto no Unsplash |
|---|---|
| Abertura, tela cheia | `photo-1613490493576-7fde63acd811` |
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
| 02 | Curadoria | Tres imoveis em grade escalonada, com numeral e chapa |
| 03 | A AMGlobal | Citacao grande em italico e os tres pilares |
| 04 | Servicos | Lista sanfonada: comprar, vender, investir e assessorar do exterior |
| 05 | Global | Orlando, Dubai e Portugal, com a hora local de cada praca |
| 06 | Contato | Fecho editorial e os canais |
| — | Rodape | Faixa com as frases da marca e a assinatura |

A numeracao nao e enfeite: ela aparece no indice lateral e acompanha onde a
pessoa esta na pagina.

## Movimento

O manual pede movimento discreto, entao cada efeito tem uma razao.

- **Cortina de entrada.** O simbolo se desenha uma vez, no primeiro
  carregamento, e a abertura sobe por linhas.
- **Barra de progresso.** Um filete champagne de 1px no topo mostra quanto
  falta da pagina.
- **Indice lateral.** A numeracao da secao atual acende em champagne.
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
