/* ---------------------------------------------------------------------------
   AMGLOBAL REALTY — a fonte unica do portfolio.

   Carregado por cidade.html e por imovel.html. As duas paginas sao montadas a
   partir DESTE arquivo: mudar aqui muda as duas, sem tocar em script nenhum.

   ATENCAO: TODO O CONTEUDO E DE DEMONSTRACAO.
   Nome de imovel, bairro, numeros, textos, ambientes e o que fica ao redor
   foram inventados para o modelo ter forma. As fotos sao do Unsplash, de
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
   que aparece na home. Campos:

     nome, bairro                 titulo e endereco curto
     area, terreno                area construida e area do terreno
     suites, vagas                contagens
     ano                          ano da construcao ou da reforma
     orientacao                   para onde a face principal olha
     condominio, iptu             custos mensais, ou 'Não há'
     situacao                     como esta a documentacao
     texto                        um ou mais paragrafos, separados por \n
     ambientes                    lista de comodos
     perto                        pares [lugar, tempo]
     fotos                        lista de fotos; a primeira e a capa

   As fotos vem do objeto `f` logo abaixo, e cada uma ja carrega a propria
   legenda. Para trocar a foto de um imovel, troque a chave.
   --------------------------------------------------------------------------- */

(function () {
  'use strict';

  var U = 'https://images.unsplash.com/photo-';
  var G = '?auto=format&fit=crop&w=1600&q=70';   // foto de imovel
  var C = '?auto=format&fit=crop&w=1900&q=68';   // capa de cidade

  function foto(id, legenda) { return { src: U + id + G, legenda: legenda }; }

  // Cada foto ja vem com a legenda: assim a galeria informa, em vez de so
  // enfileirar imagem. Trocar a foto de um imovel e trocar a chave aqui embaixo.
  var f = {
    patio:     foto('1706808849780-7a04fbac83ef', 'Fachada e piscina'),
    pergolado: foto('1633354747567-e0682586f082', 'Terraço coberto'),
    palmeiras: foto('1719887805632-de5be825f72b', 'Fachada principal'),
    branca:    foto('1660361339436-ddd4b85372da', 'Entrada'),
    horizonte: foto('1745761320791-5ae142edee8c', 'Área de lazer'),
    jardim:    foto('1685514823717-7e1ff6ee0563', 'Jardim'),
    piscina:   foto('1706164971302-e30c0640cc3b', 'Piscina'),
    agua:      foto('1670589953882-b94c9cb380f5', 'Frente para a água'),
    vidro:     foto('1748063578185-3d68121b11ff', 'Estar envidraçado'),
    concreto:  foto('1580587771525-78b9dba3b914', 'Volume principal'),
    varandas:  foto('1721815693498-cc28507c0ba2', 'Varandas'),
    clara:     foto('1628012209120-d9db7abf7eab', 'Fachada ao poente'),
    entrada:   foto('1723110994499-df46435aa4b3', 'Acesso e garagem'),
    ampla:     foto('1717167398817-121e3c283dbb', 'Implantação'),
    terraco:   foto('1613490493576-7fde63acd811', 'Terraço'),
    // interiores
    lareira:   foto('1776482128172-dd265ad0cb49', 'Estar com lareira'),
    arco:      foto('1778731660244-b6e8f905107d', 'Hall de entrada'),
    salao:     foto('1786018120871-cb134b61ddd0', 'Salão principal'),
    escada:    foto('1778731660451-323b78996230', 'Escada central')
  };

  window.AMGLOBAL = {
    ORDEM: ['sao-paulo', 'rio-de-janeiro', 'florianopolis', 'orlando', 'miami', 'dubai', 'lisboa', 'cascais'],

    CIDADES: {
      'sao-paulo': {
        nome: 'São Paulo', pais: 'Brasil',
        capa: U + '1512531123205-560f5974e686' + C,
        retrato: U + '1786018120871-cb134b61ddd0' + G,
        linha: 'O maior mercado de alto padrão do país, e o mais exigente. Aqui a diferença entre um bom endereço e o endereço certo se mede em quadras.',
        notas: [
          ['Endereço', 'Jardins, Itaim e Vila Nova Conceição concentram o que não se repete. A distância até o que importa vale mais que a metragem.'],
          ['Arquitetura', 'Projetos assinados e retrofits bem feitos sustentam valor onde o prédio comum se desatualiza em uma década.'],
          ['Liquidez', 'É a praça que responde mais rápido no país. Um ativo bem posicionado encontra comprador sem precisar de anúncio.']
        ],
        imoveis: [
          {
            nome: 'Casa Pátio', bairro: 'Jardins',
            area: '520 m²', terreno: '700 m²', suites: '4 suítes', vagas: '4 vagas',
            ano: '2019', orientacao: 'Face norte', condominio: 'Não há', iptu: 'R$ 4.200 por mês',
            situacao: 'Escritura registrada, sem ônus',
            texto: 'Uma casa organizada em torno de um pátio central, que ilumina os dois pavimentos sem abrir a vida para a rua.\nO térreo é contínuo: estar, jantar e cozinha desembocam no jardim. Os quartos ficam no pavimento de cima, longe da área social.',
            ambientes: ['Estar em dois ambientes', 'Jantar para dez', 'Cozinha integrada', 'Suíte master com closet', 'Escritório', 'Área de serviço independente'],
            perto: [['Parque Ibirapuera', '6 min de carro'], ['Escolas internacionais', '10 min de carro'], ['Avenida Faria Lima', '12 min de carro']],
            fotos: [f.patio, f.lareira, f.concreto, f.escada]
          },
          {
            nome: 'Residência Vertical', bairro: 'Itaim Bibi',
            area: '340 m²', terreno: 'Andar único', suites: '3 suítes', vagas: '3 vagas',
            ano: '2016, reformado em 2024', orientacao: 'Face leste', condominio: 'R$ 6.800 por mês', iptu: 'R$ 2.900 por mês',
            situacao: 'Escritura registrada, sem ônus',
            texto: 'Andar único num prédio de poucas unidades, com elevador privativo e vista aberta para o horizonte da cidade.\nA planta foi refeita para juntar a área social num vão só, sem colunas no meio.',
            ambientes: ['Estar de vão livre', 'Jantar integrado', 'Cozinha fechada', 'Suíte master com varanda', 'Lavabo social', 'Depósito privativo'],
            perto: [['Parque do Povo', '4 min a pé'], ['Avenida Brigadeiro Faria Lima', '7 min a pé'], ['Aeroporto de Congonhas', '15 min de carro']],
            fotos: [f.concreto, f.arco, f.varandas, f.salao]
          },
          {
            nome: 'Casa Jardim Interno', bairro: 'Vila Nova Conceição',
            area: '610 m²', terreno: '880 m²', suites: '5 suítes', vagas: '5 vagas',
            ano: '2018, manutenção completa em 2025', orientacao: 'Face noroeste', condominio: 'Não há', iptu: 'R$ 5.600 por mês',
            situacao: 'Escritura registrada, habite-se em ordem',
            texto: 'Terreno raro no bairro, com jardim maduro e piscina orientada para o sol da tarde.\nA casa passou por manutenção completa em 2025, com documentação em ordem e laudo estrutural disponível.',
            ambientes: ['Estar com pé-direito duplo', 'Sala de jantar', 'Cozinha com copa', 'Cinco suítes', 'Adega', 'Casa de hóspedes'],
            perto: [['Parque Ibirapuera', '5 min a pé'], ['Hospitais de referência', '8 min de carro'], ['Shopping Iguatemi', '11 min de carro']],
            fotos: [f.clara, f.salao, f.patio, f.jardim]
          }
        ]
      },

      'rio-de-janeiro': {
        nome: 'Rio de Janeiro', pais: 'Brasil',
        capa: U + '1662673053425-924b45c185d0' + C,
        retrato: U + '1778731660451-323b78996230' + G,
        linha: 'Poucas cidades no mundo colocam mar e montanha na mesma janela. O que é raro aqui é raro em qualquer lugar.',
        notas: [
          ['Vista', 'A vista é o ativo. Ela não se constrói depois e não se corrige: ou o imóvel nasceu com ela, ou não tem.'],
          ['Bairro', 'Leblon, Ipanema e Jardim Botânico têm lógicas próprias de preço. Comparar entre eles sem contexto leva a erro.'],
          ['Documentação', 'Prédios antigos pedem leitura cuidadosa de escritura e condomínio. É onde a maioria dos problemas aparece.']
        ],
        imoveis: [
          {
            nome: 'Cobertura Horizonte', bairro: 'Leblon',
            area: '410 m²', terreno: 'Dois pavimentos', suites: '3 suítes', vagas: '3 vagas',
            ano: '2011, reformada em 2022', orientacao: 'Face sul, para o mar', condominio: 'R$ 7.400 por mês', iptu: 'R$ 3.100 por mês',
            situacao: 'Escritura registrada, sem ônus',
            texto: 'Cobertura em dois pavimentos com terraço voltado para o mar e para a montanha ao mesmo tempo.\nO pavimento de cima é só do terraço, com piscina e cozinha de apoio.',
            ambientes: ['Estar para o mar', 'Jantar', 'Cozinha com ilha', 'Suíte master com vista', 'Terraço com piscina', 'Cozinha de apoio no terraço'],
            perto: [['Praia do Leblon', '3 min a pé'], ['Jardim de Alah', '5 min a pé'], ['Lagoa Rodrigo de Freitas', '8 min a pé']],
            fotos: [f.pergolado, f.arco, f.terraco, f.salao]
          },
          {
            nome: 'Apartamento Canal', bairro: 'Ipanema',
            area: '280 m²', terreno: 'Andar de frente', suites: '3 suítes', vagas: '2 vagas',
            ano: '1974, reformado em 2024', orientacao: 'Face norte', condominio: 'R$ 4.900 por mês', iptu: 'R$ 2.200 por mês',
            situacao: 'Escritura registrada, sem ônus',
            texto: 'Apartamento de frente, em prédio dos anos setenta com hall e fachada preservados.\nA reforma de 2024 refez instalações e esquadrias sem apagar o desenho original.',
            ambientes: ['Estar em dois ambientes', 'Varanda de frente', 'Cozinha reformada', 'Três suítes', 'Quarto de serviço', 'Vaga dupla'],
            perto: [['Praia de Ipanema', '2 min a pé'], ['Feira de Ipanema', '6 min a pé'], ['Metrô General Osório', '9 min a pé']],
            fotos: [f.varandas, f.lareira, f.clara, f.arco]
          },
          {
            nome: 'Casa da Encosta', bairro: 'Jardim Botânico',
            area: '540 m²', terreno: '1.100 m²', suites: '4 suítes', vagas: '4 vagas',
            ano: '2009, reformada em 2021', orientacao: 'Face leste', condominio: 'Não há', iptu: 'R$ 2.800 por mês',
            situacao: 'Escritura registrada, averbação em dia',
            texto: 'Casa encaixada na encosta, com mata nos fundos e silêncio incomum para a distância do centro.\nOs ambientes se abrem em patamares, acompanhando o terreno.',
            ambientes: ['Estar em patamares', 'Jantar para doze', 'Cozinha com despensa', 'Suíte master isolada', 'Estúdio independente', 'Piscina aquecida'],
            perto: [['Jardim Botânico', '4 min a pé'], ['Parque Lage', '7 min de carro'], ['Lagoa Rodrigo de Freitas', '9 min de carro']],
            fotos: [f.ampla, f.escada, f.jardim, f.lareira]
          }
        ]
      },

      'florianopolis': {
        nome: 'Florianópolis', pais: 'Brasil',
        capa: U + '1559090336-72f0d1015545' + C,
        retrato: U + '1748063578185-3d68121b11ff' + G,
        linha: 'Uma praça que deixou de ser destino de veraneio e virou endereço de morar o ano inteiro.',
        notas: [
          ['Mar', 'Jurerê, Praia Brava e Campeche são mercados diferentes com o mesmo CEP. A escolha muda o perfil do investimento.'],
          ['Construção', 'O clima cobra caro de obra malfeita. Vale olhar o construtor antes de olhar a planta.'],
          ['Demanda', 'A migração de famílias do Sudeste sustenta a procura fora da temporada, o que era incomum aqui até pouco tempo.']
        ],
        imoveis: [
          {
            nome: 'Casa Costa Norte', bairro: 'Jurerê',
            area: '680 m²', terreno: '1.000 m²', suites: '5 suítes', vagas: '6 vagas',
            ano: '2020', orientacao: 'Face norte, para o mar', condominio: 'R$ 1.900 por mês', iptu: 'R$ 2.400 por mês',
            situacao: 'Escritura registrada, habite-se em ordem',
            texto: 'Casa de praia feita para o ano inteiro, com estrutura preparada para a maresia e área de lazer coberta.\nO terreno tem saída direta para a areia.',
            ambientes: ['Estar integrado', 'Jantar de frente para o mar', 'Cozinha com churrasqueira', 'Cinco suítes', 'Espaço gourmet coberto', 'Piscina aquecida'],
            perto: [['Praia de Jurerê', 'saída direta'], ['Marina', '6 min de carro'], ['Aeroporto de Florianópolis', '35 min de carro']],
            fotos: [f.horizonte, f.salao, f.piscina, f.vidro]
          },
          {
            nome: 'Residência Mirante', bairro: 'Praia Brava',
            area: '420 m²', terreno: '600 m²', suites: '4 suítes', vagas: '4 vagas',
            ano: '2022', orientacao: 'Face nordeste', condominio: 'R$ 1.400 por mês', iptu: 'R$ 1.700 por mês',
            situacao: 'Escritura registrada, sem ônus',
            texto: 'Implantada na parte alta, com vista para a enseada inteira e pouca construção à frente.\nA sala tem pé-direito duplo e caixilho de canto sem montante.',
            ambientes: ['Estar com pé-direito duplo', 'Jantar', 'Cozinha integrada', 'Quatro suítes', 'Deck com borda infinita', 'Garagem coberta'],
            perto: [['Praia Brava', '4 min a pé'], ['Centro de Jurerê', '9 min de carro'], ['Aeroporto de Florianópolis', '40 min de carro']],
            fotos: [f.entrada, f.arco, f.vidro, f.terraco]
          },
          {
            nome: 'Casa Dunas', bairro: 'Campeche',
            area: '390 m²', terreno: '520 m²', suites: '3 suítes', vagas: '3 vagas',
            ano: '2023', orientacao: 'Face leste', condominio: 'Não há', iptu: 'R$ 1.100 por mês',
            situacao: 'Escritura registrada, habite-se em ordem',
            texto: 'Projeto contemporâneo em terreno plano, a poucos minutos da praia.\nO jardim é de espécies nativas e pede pouca manutenção.',
            ambientes: ['Estar e jantar contínuos', 'Cozinha com ilha', 'Três suítes', 'Escritório', 'Deck com piscina', 'Depósito para pranchas'],
            perto: [['Praia do Campeche', '7 min a pé'], ['Lagoa da Conceição', '15 min de carro'], ['Centro', '25 min de carro']],
            fotos: [f.concreto, f.lareira, f.entrada, f.jardim]
          }
        ]
      },

      'orlando': {
        nome: 'Orlando', pais: 'Estados Unidos',
        capa: U + '1546447208-9d7b923c0204' + C,
        retrato: U + '1776482128172-dd265ad0cb49' + G,
        linha: 'O principal destino de brasileiros nos Estados Unidos, e a porta de entrada mais simples para comprar fora do país.',
        notas: [
          ['Estrutura', 'A compra por estrangeiro é rotina aqui: cartório, seguro de título e financiamento local funcionam sem fricção.'],
          ['Renda', 'Casas de temporada com gestão profissional formam um mercado maduro, com números públicos e comparáveis.'],
          ['Tributação', 'A estrutura de titularidade decide quanto se paga depois. Ela se define antes da proposta, não depois.']
        ],
        imoveis: [
          {
            nome: 'Residência Lakeside', bairro: 'Winter Park',
            area: '390 m²', terreno: '750 m²', suites: '4 suítes', vagas: '2 vagas',
            ano: '2017', orientacao: 'Face oeste, para o lago', condominio: 'US$ 320 por mês', iptu: 'US$ 980 por mês',
            situacao: 'Title insurance disponível, sem pendências',
            texto: 'Casa de frente para o lago, com píer privativo e jardim maduro.\nBairro consolidado, de ruas arborizadas e escolas a pé.',
            ambientes: ['Estar para o lago', 'Jantar formal', 'Cozinha com ilha', 'Quatro suítes', 'Píer privativo', 'Garagem para dois carros'],
            perto: [['Park Avenue', '8 min a pé'], ['Rollins College', '10 min a pé'], ['Aeroporto internacional', '25 min de carro']],
            fotos: [f.palmeiras, f.lareira, f.clara, f.jardim]
          },
          {
            nome: 'Casa do Lago', bairro: 'Windermere',
            area: '460 m²', terreno: '1.200 m²', suites: '5 suítes', vagas: '3 vagas',
            ano: '2021', orientacao: 'Face poente', condominio: 'US$ 410 por mês', iptu: 'US$ 1.150 por mês',
            situacao: 'Title insurance disponível, sem pendências',
            texto: 'Condomínio fechado com acesso ao conjunto de lagos.\nA área de lazer é voltada para o poente, e a casa é de 2021.',
            ambientes: ['Estar de pé-direito alto', 'Jantar', 'Cozinha e cozinha de apoio', 'Cinco suítes', 'Home theater', 'Piscina aquecida'],
            perto: [['Rampa para barcos', '5 min de carro'], ['Escolas particulares', '10 min de carro'], ['Disney Springs', '20 min de carro']],
            fotos: [f.clara, f.salao, f.ampla, f.piscina]
          },
          {
            nome: 'Villa Reserva', bairro: 'Lake Nona',
            area: '350 m²', terreno: '640 m²', suites: '4 suítes', vagas: '2 vagas',
            ano: '2023', orientacao: 'Face sul', condominio: 'US$ 280 por mês', iptu: 'US$ 860 por mês',
            situacao: 'Title insurance disponível, liberada para locação',
            texto: 'Construção recente em bairro planejado, com piscina aquecida.\nA estrutura está pronta para locação por temporada, se for o caso.',
            ambientes: ['Estar integrado', 'Jantar', 'Cozinha com despensa', 'Quatro suítes', 'Lanai coberto', 'Piscina aquecida'],
            perto: [['Centro médico', '6 min de carro'], ['Campo de golfe', '9 min de carro'], ['Aeroporto internacional', '18 min de carro']],
            fotos: [f.ampla, f.arco, f.piscina, f.entrada]
          }
        ]
      },

      'miami': {
        nome: 'Miami', pais: 'Estados Unidos',
        capa: U + '1611323340350-bdcc0e6cfae5' + C,
        retrato: U + '1778731660244-b6e8f905107d' + G,
        linha: 'A cidade onde a América Latina encontra o mercado americano. Preço em dólar, liquidez alta e concorrência internacional.',
        notas: [
          ['Água', 'Frente para a baía e acesso náutico criam uma faixa de preço própria, que não acompanha o resto da cidade.'],
          ['Bairro', 'Coconut Grove, Coral Gables e Bal Harbour atraem perfis distintos. O mesmo orçamento compra coisas muito diferentes.'],
          ['Concorrência', 'Bons ativos saem rápido e recebem mais de uma proposta. Chegar preparado é parte da estratégia.']
        ],
        imoveis: [
          {
            nome: 'Villa Bayfront', bairro: 'Coconut Grove',
            area: '560 m²', terreno: '980 m²', suites: '5 suítes', vagas: '4 vagas',
            ano: '2008, reformada em 2023', orientacao: 'Face leste, para a baía', condominio: 'Não há', iptu: 'US$ 2.400 por mês',
            situacao: 'Title insurance disponível, janelas com certificação',
            texto: 'Frente para a baía, com deck e vaga de barco.\nA reforma de 2023 trocou esquadrias e trouxe certificação de janela para vento.',
            ambientes: ['Estar para a baía', 'Jantar', 'Cozinha com ilha dupla', 'Cinco suítes', 'Deck com vaga de barco', 'Piscina de borda'],
            perto: [['Marina', '3 min a pé'], ['CocoWalk', '9 min a pé'], ['Aeroporto internacional', '20 min de carro']],
            fotos: [f.piscina, f.salao, f.agua, f.lareira]
          },
          {
            nome: 'Residência Coral', bairro: 'Coral Gables',
            area: '480 m²', terreno: '900 m²', suites: '4 suítes', vagas: '3 vagas',
            ano: '1998, reformada em 2020', orientacao: 'Face norte', condominio: 'Não há', iptu: 'US$ 1.900 por mês',
            situacao: 'Title insurance disponível, sem pendências',
            texto: 'Casa de linhas mediterrâneas em rua arborizada, com pátio interno sombreado.\nA piscina é longitudinal e acompanha o comprimento do jardim.',
            ambientes: ['Estar com lareira', 'Jantar formal', 'Cozinha com copa', 'Quatro suítes', 'Pátio interno', 'Piscina longitudinal'],
            perto: [['Miracle Mile', '7 min de carro'], ['Universidade de Miami', '10 min de carro'], ['Aeroporto internacional', '15 min de carro']],
            fotos: [f.varandas, f.arco, f.jardim, f.escada]
          },
          {
            nome: 'Apartamento Oceano', bairro: 'Bal Harbour',
            area: '300 m²', terreno: 'Andar alto', suites: '3 suítes', vagas: '2 vagas',
            ano: '2015', orientacao: 'Face leste, para o mar', condominio: 'US$ 3.600 por mês', iptu: 'US$ 1.500 por mês',
            situacao: 'Title insurance disponível, sem pendências',
            texto: 'Andar alto, de frente para o mar, em prédio com serviço completo.\nO acesso à praia é direto, pelo próprio edifício.',
            ambientes: ['Estar de frente para o mar', 'Jantar', 'Cozinha fechada', 'Três suítes', 'Terraço corrido', 'Duas vagas cobertas'],
            perto: [['Praia', 'acesso direto'], ['Bal Harbour Shops', '4 min a pé'], ['Aeroporto internacional', '30 min de carro']],
            fotos: [f.entrada, f.lareira, f.terraco, f.salao]
          }
        ]
      },

      'dubai': {
        nome: 'Dubai', pais: 'Emirados',
        capa: U + '1598737652403-6e0ee5bf5cf2' + C,
        retrato: U + '1670589953882-b94c9cb380f5' + G,
        linha: 'Um mercado de expansão rápida, com estrutura feita para o comprador estrangeiro e sem imposto sobre a renda do aluguel.',
        notas: [
          ['Acesso', 'Estrangeiro compra em propriedade plena nas zonas designadas, com registro próprio e prazo curto.'],
          ['Entrega', 'Boa parte do mercado é na planta. Escolher incorporadora é tão importante quanto escolher o endereço.'],
          ['Residência', 'A compra acima de certos valores abre caminho para visto de residência, o que muda o cálculo da decisão.']
        ],
        imoveis: [
          {
            nome: 'Residência Dunas', bairro: 'Palm Jumeirah',
            area: '740 m²', terreno: '1.050 m²', suites: '6 suítes', vagas: '4 vagas',
            ano: '2019', orientacao: 'Face oeste, para o mar', condominio: 'AED 9.800 por mês', iptu: 'Não há',
            situacao: 'Propriedade plena, registro concluído',
            texto: 'Casa em uma das frondes, com praia privativa e piscina de borda infinita.\nA piscina é voltada para a linha do horizonte da cidade.',
            ambientes: ['Estar para o mar', 'Jantar para dezesseis', 'Cozinha e cozinha de serviço', 'Seis suítes', 'Praia privativa', 'Academia'],
            perto: [['Praia privativa', 'acesso direto'], ['Nakheel Mall', '7 min de carro'], ['Aeroporto internacional', '30 min de carro']],
            fotos: [f.agua, f.salao, f.piscina, f.vidro]
          },
          {
            nome: 'Villa Marina', bairro: 'Dubai Marina',
            area: '430 m²', terreno: 'Unidade de esquina', suites: '4 suítes', vagas: '3 vagas',
            ano: '2021', orientacao: 'Face noroeste', condominio: 'AED 6.200 por mês', iptu: 'Não há',
            situacao: 'Propriedade plena, registro concluído',
            texto: 'Unidade de esquina com vista dupla, para a marina e para o mar aberto.\nO prédio tem serviço de hotel, com recepção e concierge.',
            ambientes: ['Estar de esquina', 'Jantar', 'Cozinha equipada', 'Quatro suítes', 'Terraço em L', 'Serviço de concierge'],
            perto: [['Marina Walk', '5 min a pé'], ['Praia JBR', '12 min a pé'], ['Aeroporto internacional', '35 min de carro']],
            fotos: [f.ampla, f.escada, f.vidro, f.arco]
          },
          {
            nome: 'Casa Downtown', bairro: 'Downtown Dubai',
            area: '310 m²', terreno: 'Andar alto', suites: '3 suítes', vagas: '2 vagas',
            ano: 'Entrega prevista para 2027', orientacao: 'Face sul', condominio: 'AED 4.400 por mês', iptu: 'Não há',
            situacao: 'Na planta, incorporadora com histórico entregue',
            texto: 'Andar alto no centro, a pé do que interessa.\nA entrega está prevista e a incorporadora tem histórico de obras concluídas no prazo.',
            ambientes: ['Estar integrado', 'Jantar', 'Cozinha fechada', 'Três suítes', 'Varanda corrida', 'Piscina no edifício'],
            perto: [['Dubai Mall', '6 min a pé'], ['Burj Khalifa', '9 min a pé'], ['Aeroporto internacional', '18 min de carro']],
            fotos: [f.concreto, f.arco, f.varandas, f.salao]
          }
        ]
      },

      'lisboa': {
        nome: 'Lisboa', pais: 'Portugal',
        capa: U + '1613490493576-7fde63acd811' + C,
        retrato: U + '1685514823717-7e1ff6ee0563' + G,
        linha: 'A porta de entrada na Europa, entre segunda residência e diversificação de patrimônio, com o idioma a favor.',
        notas: [
          ['Centro histórico', 'Palacetes e prédios reabilitados no Príncipe Real e na Lapa são um mercado pequeno e disputado.'],
          ['Reabilitação', 'Obra em imóvel antigo tem regra própria e prazo longo. O orçamento realista nasce da vistoria, não do anúncio.'],
          ['Fiscal', 'A estrutura de compra e o regime fiscal do comprador mudam o custo final. Definir isso antes evita retrabalho.']
        ],
        imoveis: [
          {
            nome: 'Palacete Restaurado', bairro: 'Príncipe Real',
            area: '430 m²', terreno: '310 m²', suites: '4 suítes', vagas: '2 vagas',
            ano: '1887, restaurado em 2023', orientacao: 'Face sul', condominio: 'Não há', iptu: '€ 320 por mês',
            situacao: 'Licença patrimonial em ordem, caderneta atualizada',
            texto: 'Palacete do século dezenove restaurado com licença patrimonial, mantendo estuques, azulejo original e a escada de madeira.\nAs instalações são inteiramente novas por trás disso tudo.',
            ambientes: ['Sala nobre com estuques', 'Jantar', 'Cozinha contemporânea', 'Quatro suítes', 'Pátio nos fundos', 'Garagem para dois carros'],
            perto: [['Jardim do Príncipe Real', '2 min a pé'], ['Bairro Alto', '8 min a pé'], ['Aeroporto de Lisboa', '20 min de carro']],
            fotos: [f.jardim, f.escada, f.arco, f.salao]
          },
          {
            nome: 'Apartamento Tejo', bairro: 'Lapa',
            area: '260 m²', terreno: 'Andar nobre', suites: '3 suítes', vagas: '1 vaga',
            ano: '1920, reabilitado em 2021', orientacao: 'Face sul, para o rio', condominio: '€ 180 por mês', iptu: '€ 210 por mês',
            situacao: 'Caderneta atualizada, sem ônus',
            texto: 'Andar nobre com vista para o rio, pé-direito alto e janelas de sacada originais.\nO prédio tem poucos vizinhos e portaria durante o dia.',
            ambientes: ['Duas salas em enfiada', 'Jantar', 'Cozinha reabilitada', 'Três suítes', 'Escritório', 'Arrecadação'],
            perto: [['Jardim da Estrela', '6 min a pé'], ['Museu de Arte Antiga', '9 min a pé'], ['Aeroporto de Lisboa', '22 min de carro']],
            fotos: [f.clara, f.lareira, f.varandas, f.escada]
          },
          {
            nome: 'Casa do Miradouro', bairro: 'Graça',
            area: '340 m²', terreno: '240 m²', suites: '4 suítes', vagas: '1 vaga',
            ano: '1940, reabilitada em 2024', orientacao: 'Face poente, para o castelo', condominio: 'Não há', iptu: '€ 240 por mês',
            situacao: 'Licença de utilização emitida, pronta para morar',
            texto: 'Casa em rua calma, com terraço no topo e vista para o castelo.\nFoi reabilitada em 2024 e está pronta para morar.',
            ambientes: ['Estar com lareira', 'Jantar', 'Cozinha com despensa', 'Quatro suítes', 'Terraço no topo', 'Lavandaria'],
            perto: [['Miradouro da Graça', '3 min a pé'], ['Castelo de São Jorge', '11 min a pé'], ['Aeroporto de Lisboa', '15 min de carro']],
            fotos: [f.varandas, f.salao, f.terraco, f.lareira]
          }
        ]
      },

      'cascais': {
        nome: 'Cascais', pais: 'Portugal',
        capa: U + '1660361339436-ddd4b85372da' + C,
        retrato: U + '1723110994499-df46435aa4b3' + G,
        linha: 'Mar, golfe e trinta minutos de Lisboa. A praça escolhida por quem se muda com a família inteira.',
        notas: [
          ['Vida', 'Escolas internacionais e clubes fazem parte da decisão tanto quanto a casa. É o que costuma definir o bairro.'],
          ['Oferta', 'Quinta da Marinha e Guincho têm oferta limitada e pouca rotatividade. Esperar o imóvel certo é comum aqui.'],
          ['Valor', 'A proximidade de Lisboa segura o preço mesmo fora da temporada, o que não acontece em praças só de verão.']
        ],
        imoveis: [
          {
            nome: 'Casa Atlântico', bairro: 'Quinta da Marinha',
            area: '610 m²', terreno: '1.400 m²', suites: '5 suítes', vagas: '4 vagas',
            ano: '2015, reformada em 2023', orientacao: 'Face sul', condominio: '€ 260 por mês', iptu: '€ 430 por mês',
            situacao: 'Caderneta atualizada, sem ônus',
            texto: 'Casa térrea de implantação horizontal, voltada para o campo de golfe, com pinhal nos fundos.\nA piscina fica abrigada do vento pela própria implantação.',
            ambientes: ['Estar em dois ambientes', 'Jantar para catorze', 'Cozinha com copa', 'Cinco suítes', 'Piscina abrigada', 'Garagem fechada'],
            perto: [['Campo de golfe', 'acesso direto'], ['Escolas internacionais', '8 min de carro'], ['Centro de Cascais', '10 min de carro']],
            fotos: [f.vidro, f.lareira, f.ampla, f.jardim]
          },
          {
            nome: 'Residência Guincho', bairro: 'Guincho',
            area: '480 m²', terreno: '1.000 m²', suites: '4 suítes', vagas: '3 vagas',
            ano: '2019', orientacao: 'Face oeste, para o oceano', condominio: 'Não há', iptu: '€ 380 por mês',
            situacao: 'Licença de utilização emitida, sem ônus',
            texto: 'Vista para o oceano e para a serra, com materiais escolhidos para o vento da costa.\nA sala abre inteira para o deck.',
            ambientes: ['Estar que abre para o deck', 'Jantar', 'Cozinha integrada', 'Quatro suítes', 'Deck para o oceano', 'Depósito para equipamentos'],
            perto: [['Praia do Guincho', '6 min a pé'], ['Serra de Sintra', '12 min de carro'], ['Centro de Cascais', '14 min de carro']],
            fotos: [f.entrada, f.escada, f.horizonte, f.terraco]
          },
          {
            nome: 'Villa do Pinhal', bairro: 'Birre',
            area: '400 m²', terreno: '900 m²', suites: '4 suítes', vagas: '3 vagas',
            ano: '2012, reformada em 2022', orientacao: 'Face sudeste', condominio: 'Não há', iptu: '€ 290 por mês',
            situacao: 'Caderneta atualizada, pronta para morar',
            texto: 'Rua tranquila, a caminho das escolas internacionais, com jardim grande.\nA casa de hóspedes é independente, com entrada própria.',
            ambientes: ['Estar com lareira', 'Jantar', 'Cozinha com ilha', 'Quatro suítes', 'Casa de hóspedes independente', 'Jardim com piscina'],
            perto: [['Escolas internacionais', '4 min de carro'], ['Centro de Cascais', '9 min de carro'], ['Praia da Conceição', '11 min de carro']],
            fotos: [f.ampla, f.arco, f.jardim, f.piscina]
          }
        ]
      }
    }
  };
})();
