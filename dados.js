/* ---------------------------------------------------------------------------
   AMGLOBAL REALTY — a fonte unica do portfolio.

   Carregado por cidade.html e por imovel.html. As duas paginas sao montadas a
   partir DESTE arquivo: mudar aqui muda as duas, sem tocar em script nenhum.

   ATENCAO: TODO O CONTEUDO E DE DEMONSTRACAO.
   Nome de imovel, bairro, area, suites, vagas, os textos e as notas de cada
   praca foram inventados para o modelo ter forma. As fotos sao do Unsplash, de
   licenca livre, e o manual proibe banco de imagem em material de imovel: elas
   saem quando chegar a fotografia propria.

   COMO INCLUIR UMA CIDADE
   1. Acrescente uma entrada em CIDADES com um apelido novo (so minusculas e
      hifens, sem acento).
   2. Ponha o apelido em ORDEM, na posicao que quiser.
   3. No index.html, acrescente o botao dela no painel do filtro com o mesmo
      apelido em `data-slug`.

   COMO INCLUIR UM IMOVEL
   Acrescente um objeto na lista `imoveis` da cidade. O primeiro da lista e o
   que aparece na home. Os campos sao todos obrigatorios; `fotos` aceita de uma
   a quantas forem, e a primeira e a capa.
   --------------------------------------------------------------------------- */

(function () {
  'use strict';

  var U = 'https://images.unsplash.com/photo-';
  var G = '?auto=format&fit=crop&w=1500&q=68';   // foto de imovel
  var C = '?auto=format&fit=crop&w=1900&q=68';   // capa de cidade

  // atalhos das fotos, so para a lista abaixo ficar legivel
  var f = {
    patio:      U + '1706808849780-7a04fbac83ef' + G,
    pergolado:  U + '1633354747567-e0682586f082' + G,
    palmeiras:  U + '1719887805632-de5be825f72b' + G,
    branca:     U + '1660361339436-ddd4b85372da' + G,
    horizonte:  U + '1745761320791-5ae142edee8c' + G,
    jardim:     U + '1685514823717-7e1ff6ee0563' + G,
    piscina:    U + '1706164971302-e30c0640cc3b' + G,
    agua:       U + '1670589953882-b94c9cb380f5' + G,
    vidro:      U + '1748063578185-3d68121b11ff' + G,
    concreto:   U + '1580587771525-78b9dba3b914' + G,
    varandas:   U + '1721815693498-cc28507c0ba2' + G,
    clara:      U + '1628012209120-d9db7abf7eab' + G,
    entrada:    U + '1723110994499-df46435aa4b3' + G,
    ampla:      U + '1717167398817-121e3c283dbb' + G,
    terraco:    U + '1613490493576-7fde63acd811' + G,
    // interiores
    lareira:    U + '1776482128172-dd265ad0cb49' + G,
    arco:       U + '1778731660244-b6e8f905107d' + G,
    salao:      U + '1786018120871-cb134b61ddd0' + G,
    escada:     U + '1778731660451-323b78996230' + G
  };

  window.AMGLOBAL = {
    ORDEM: ['sao-paulo', 'rio-de-janeiro', 'florianopolis', 'orlando', 'miami', 'dubai', 'lisboa', 'cascais'],

    CIDADES: {
      'sao-paulo': {
        nome: 'São Paulo', pais: 'Brasil',
        capa: U + '1512531123205-560f5974e686' + C,
        linha: 'O maior mercado de alto padrão do país, e o mais exigente. Aqui a diferença entre um bom endereço e o endereço certo se mede em quadras.',
        notas: [
          ['Endereço', 'Jardins, Itaim e Vila Nova Conceição concentram o que não se repete. A distância até o que importa vale mais que a metragem.'],
          ['Arquitetura', 'Projetos assinados e retrofits bem feitos sustentam valor onde o prédio comum se desatualiza em uma década.'],
          ['Liquidez', 'É a praça que responde mais rápido no país. Um ativo bem posicionado encontra comprador sem precisar de anúncio.']
        ],
        imoveis: [
          {
            nome: 'Casa Pátio', bairro: 'Jardins', area: '520 m²', suites: '4 suítes', vagas: '4 vagas',
            texto: 'Uma casa organizada em torno de um pátio central, que ilumina os dois pavimentos sem abrir a vida para a rua. O térreo é contínuo: estar, jantar e cozinha desembocam no jardim. Os quartos ficam no pavimento de cima, longe da área social.',
            fotos: [f.patio, f.lareira, f.concreto]
          },
          {
            nome: 'Residência Vertical', bairro: 'Itaim Bibi', area: '340 m²', suites: '3 suítes', vagas: '3 vagas',
            texto: 'Andar único num prédio de poucas unidades, com elevador privativo e vista aberta para o horizonte da cidade. A planta foi refeita para juntar a área social num vão só, sem colunas no meio.',
            fotos: [f.concreto, f.arco, f.varandas]
          },
          {
            nome: 'Casa Jardim Interno', bairro: 'Vila Nova Conceição', area: '610 m²', suites: '5 suítes', vagas: '5 vagas',
            texto: 'Terreno raro no bairro, com jardim maduro e piscina orientada para o sol da tarde. A casa é de 2018 e passou por manutenção completa em 2025, com documentação em ordem.',
            fotos: [f.clara, f.salao, f.patio]
          }
        ]
      },

      'rio-de-janeiro': {
        nome: 'Rio de Janeiro', pais: 'Brasil',
        capa: U + '1662673053425-924b45c185d0' + C,
        linha: 'Poucas cidades no mundo colocam mar e montanha na mesma janela. O que é raro aqui é raro em qualquer lugar.',
        notas: [
          ['Vista', 'A vista é o ativo. Ela não se constrói depois e não se corrige: ou o imóvel nasceu com ela, ou não tem.'],
          ['Bairro', 'Leblon, Ipanema e Jardim Botânico têm lógicas próprias de preço. Comparar entre eles sem contexto leva a erro.'],
          ['Documentação', 'Prédios antigos pedem leitura cuidadosa de escritura e condomínio. É onde a maioria dos problemas aparece.']
        ],
        imoveis: [
          {
            nome: 'Cobertura Horizonte', bairro: 'Leblon', area: '410 m²', suites: '3 suítes', vagas: '3 vagas',
            texto: 'Cobertura em dois pavimentos com terraço voltado para o mar e para a montanha ao mesmo tempo. O pavimento de cima é só do terraço, com piscina e cozinha de apoio.',
            fotos: [f.pergolado, f.arco, f.terraco]
          },
          {
            nome: 'Apartamento Canal', bairro: 'Ipanema', area: '280 m²', suites: '3 suítes', vagas: '2 vagas',
            texto: 'Apartamento de frente, em prédio dos anos setenta com hall e fachada preservados. A reforma de 2024 refez instalações e esquadrias sem apagar o desenho original.',
            fotos: [f.varandas, f.lareira, f.clara]
          },
          {
            nome: 'Casa da Encosta', bairro: 'Jardim Botânico', area: '540 m²', suites: '4 suítes', vagas: '4 vagas',
            texto: 'Casa encaixada na encosta, com mata nos fundos e silêncio incomum para a distância do centro. Os ambientes se abrem em patamares, acompanhando o terreno.',
            fotos: [f.ampla, f.escada, f.jardim]
          }
        ]
      },

      'florianopolis': {
        nome: 'Florianópolis', pais: 'Brasil',
        capa: U + '1559090336-72f0d1015545' + C,
        linha: 'Uma praça que deixou de ser destino de veraneio e virou endereço de morar o ano inteiro.',
        notas: [
          ['Mar', 'Jurerê, Praia Brava e Campeche são mercados diferentes com o mesmo CEP. A escolha muda o perfil do investimento.'],
          ['Construção', 'O clima cobra caro de obra malfeita. Vale olhar o construtor antes de olhar a planta.'],
          ['Demanda', 'A migração de famílias do Sudeste sustenta a procura fora da temporada, o que era incomum aqui até pouco tempo.']
        ],
        imoveis: [
          {
            nome: 'Casa Costa Norte', bairro: 'Jurerê', area: '680 m²', suites: '5 suítes', vagas: '6 vagas',
            texto: 'Casa de praia feita para o ano inteiro, com estrutura preparada para a maresia e área de lazer coberta. O terreno tem saída direta para a areia.',
            fotos: [f.horizonte, f.salao, f.piscina]
          },
          {
            nome: 'Residência Mirante', bairro: 'Praia Brava', area: '420 m²', suites: '4 suítes', vagas: '4 vagas',
            texto: 'Implantada na parte alta, com vista para a enseada inteira e pouca construção à frente. A sala tem pé-direito duplo e caixilho de canto sem montante.',
            fotos: [f.entrada, f.arco, f.vidro]
          },
          {
            nome: 'Casa Dunas', bairro: 'Campeche', area: '390 m²', suites: '3 suítes', vagas: '3 vagas',
            texto: 'Projeto contemporâneo em terreno plano, a poucos minutos da praia, com jardim de espécies nativas que pede pouca manutenção.',
            fotos: [f.concreto, f.lareira, f.entrada]
          }
        ]
      },

      'orlando': {
        nome: 'Orlando', pais: 'Estados Unidos',
        capa: U + '1546447208-9d7b923c0204' + C,
        linha: 'O principal destino de brasileiros nos Estados Unidos, e a porta de entrada mais simples para comprar fora do país.',
        notas: [
          ['Estrutura', 'A compra por estrangeiro é rotina aqui: cartório, seguro de título e financiamento local funcionam sem fricção.'],
          ['Renda', 'Casas de temporada com gestão profissional formam um mercado maduro, com números públicos e comparáveis.'],
          ['Tributação', 'A estrutura de titularidade decide quanto se paga depois. Ela se define antes da proposta, não depois.']
        ],
        imoveis: [
          {
            nome: 'Residência Lakeside', bairro: 'Winter Park', area: '390 m²', suites: '4 suítes', vagas: '2 vagas',
            texto: 'Casa de frente para o lago, com píer privativo e jardim maduro. Bairro consolidado, de ruas arborizadas e escolas a pé.',
            fotos: [f.palmeiras, f.lareira, f.clara]
          },
          {
            nome: 'Casa do Lago', bairro: 'Windermere', area: '460 m²', suites: '5 suítes', vagas: '3 vagas',
            texto: 'Condomínio fechado com acesso ao conjunto de lagos, casa de 2021 e área de lazer voltada para o poente.',
            fotos: [f.clara, f.salao, f.ampla]
          },
          {
            nome: 'Villa Reserva', bairro: 'Lake Nona', area: '350 m²', suites: '4 suítes', vagas: '2 vagas',
            texto: 'Construção recente em bairro planejado, com piscina aquecida e estrutura pronta para locação por temporada, se for o caso.',
            fotos: [f.ampla, f.arco, f.piscina]
          }
        ]
      },

      'miami': {
        nome: 'Miami', pais: 'Estados Unidos',
        capa: U + '1611323340350-bdcc0e6cfae5' + C,
        linha: 'A cidade onde a América Latina encontra o mercado americano. Preço em dólar, liquidez alta e concorrência internacional.',
        notas: [
          ['Água', 'Frente para a baía e acesso náutico criam uma faixa de preço própria, que não acompanha o resto da cidade.'],
          ['Bairro', 'Coconut Grove, Coral Gables e Bal Harbour atraem perfis distintos. O mesmo orçamento compra coisas muito diferentes.'],
          ['Concorrência', 'Bons ativos saem rápido e recebem mais de uma proposta. Chegar preparado é parte da estratégia.']
        ],
        imoveis: [
          {
            nome: 'Villa Bayfront', bairro: 'Coconut Grove', area: '560 m²', suites: '5 suítes', vagas: '4 vagas',
            texto: 'Frente para a baía com deck e vaga de barco. A casa foi reformada em 2023, com esquadrias novas e certificação de janela para vento.',
            fotos: [f.piscina, f.salao, f.agua]
          },
          {
            nome: 'Residência Coral', bairro: 'Coral Gables', area: '480 m²', suites: '4 suítes', vagas: '3 vagas',
            texto: 'Casa de linhas mediterrâneas em rua arborizada, com pátio interno sombreado e piscina longitudinal.',
            fotos: [f.varandas, f.arco, f.jardim]
          },
          {
            nome: 'Apartamento Oceano', bairro: 'Bal Harbour', area: '300 m²', suites: '3 suítes', vagas: '2 vagas',
            texto: 'Andar alto, de frente para o mar, em prédio com serviço completo e acesso direto à praia.',
            fotos: [f.entrada, f.lareira, f.terraco]
          }
        ]
      },

      'dubai': {
        nome: 'Dubai', pais: 'Emirados',
        capa: U + '1598737652403-6e0ee5bf5cf2' + C,
        linha: 'Um mercado de expansão rápida, com estrutura feita para o comprador estrangeiro e sem imposto sobre a renda do aluguel.',
        notas: [
          ['Acesso', 'Estrangeiro compra em propriedade plena nas zonas designadas, com registro próprio e prazo curto.'],
          ['Entrega', 'Boa parte do mercado é na planta. Escolher incorporadora é tão importante quanto escolher o endereço.'],
          ['Residência', 'A compra acima de certos valores abre caminho para visto de residência, o que muda o cálculo da decisão.']
        ],
        imoveis: [
          {
            nome: 'Residência Dunas', bairro: 'Palm Jumeirah', area: '740 m²', suites: '6 suítes', vagas: '4 vagas',
            texto: 'Casa em uma das frondes, com praia privativa e piscina de borda infinita voltada para a linha do horizonte da cidade.',
            fotos: [f.agua, f.salao, f.piscina]
          },
          {
            nome: 'Villa Marina', bairro: 'Dubai Marina', area: '430 m²', suites: '4 suítes', vagas: '3 vagas',
            texto: 'Unidade de esquina com vista dupla, para a marina e para o mar aberto, em prédio com serviço de hotel.',
            fotos: [f.ampla, f.escada, f.vidro]
          },
          {
            nome: 'Casa Downtown', bairro: 'Downtown Dubai', area: '310 m²', suites: '3 suítes', vagas: '2 vagas',
            texto: 'Andar alto no centro, a pé do que interessa, com entrega prevista e incorporadora com histórico entregue.',
            fotos: [f.concreto, f.arco, f.varandas]
          }
        ]
      },

      'lisboa': {
        nome: 'Lisboa', pais: 'Portugal',
        capa: U + '1613490493576-7fde63acd811' + C,
        linha: 'A porta de entrada na Europa, entre segunda residência e diversificação de patrimônio, com o idioma a favor.',
        notas: [
          ['Centro histórico', 'Palacetes e prédios reabilitados no Príncipe Real e na Lapa são um mercado pequeno e disputado.'],
          ['Reabilitação', 'Obra em imóvel antigo tem regra própria e prazo longo. O orçamento realista nasce da vistoria, não do anúncio.'],
          ['Fiscal', 'A estrutura de compra e o regime fiscal do comprador mudam o custo final. Definir isso antes evita retrabalho.']
        ],
        imoveis: [
          {
            nome: 'Palacete Restaurado', bairro: 'Príncipe Real', area: '430 m²', suites: '4 suítes', vagas: '2 vagas',
            texto: 'Palacete do século dezenove restaurado com licença patrimonial, mantendo estuques, azulejo original e a escada de madeira. Instalações inteiramente novas por trás disso tudo.',
            fotos: [f.jardim, f.escada, f.arco]
          },
          {
            nome: 'Apartamento Tejo', bairro: 'Lapa', area: '260 m²', suites: '3 suítes', vagas: '1 vaga',
            texto: 'Andar nobre com vista para o rio, pé-direito alto e janelas de sacada originais. Prédio com poucos vizinhos.',
            fotos: [f.clara, f.lareira, f.varandas]
          },
          {
            nome: 'Casa do Miradouro', bairro: 'Graça', area: '340 m²', suites: '4 suítes', vagas: '1 vaga',
            texto: 'Casa em rua calma, com terraço no topo e vista para o castelo. Reabilitada em 2024, pronta para morar.',
            fotos: [f.varandas, f.salao, f.terraco]
          }
        ]
      },

      'cascais': {
        nome: 'Cascais', pais: 'Portugal',
        capa: U + '1660361339436-ddd4b85372da' + C,
        linha: 'Mar, golfe e trinta minutos de Lisboa. A praça escolhida por quem se muda com a família inteira.',
        notas: [
          ['Vida', 'Escolas internacionais e clubes fazem parte da decisão tanto quanto a casa. É o que costuma definir o bairro.'],
          ['Oferta', 'Quinta da Marinha e Guincho têm oferta limitada e pouca rotatividade. Esperar o imóvel certo é comum aqui.'],
          ['Valor', 'A proximidade de Lisboa segura o preço mesmo fora da temporada, o que não acontece em praças só de verão.']
        ],
        imoveis: [
          {
            nome: 'Casa Atlântico', bairro: 'Quinta da Marinha', area: '610 m²', suites: '5 suítes', vagas: '4 vagas',
            texto: 'Casa térrea de implantação horizontal, voltada para o campo de golfe, com pinhal nos fundos e piscina abrigada do vento.',
            fotos: [f.vidro, f.lareira, f.ampla]
          },
          {
            nome: 'Residência Guincho', bairro: 'Guincho', area: '480 m²', suites: '4 suítes', vagas: '3 vagas',
            texto: 'Vista para o oceano e para a serra, com materiais escolhidos para o vento da costa. A sala abre inteira para o deck.',
            fotos: [f.entrada, f.escada, f.horizonte]
          },
          {
            nome: 'Villa do Pinhal', bairro: 'Birre', area: '400 m²', suites: '4 suítes', vagas: '3 vagas',
            texto: 'Rua tranquila, a caminho das escolas internacionais, com jardim grande e casa de hóspedes independente.',
            fotos: [f.ampla, f.arco, f.jardim]
          }
        ]
      }
    }
  };
})();
