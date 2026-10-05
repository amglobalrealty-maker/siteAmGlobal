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
   3. No index.html a praca aparece em TRES lugares, sempre com o mesmo
      apelido em `data-slug`: o botao no painel do filtro, a lamina na banda
      da curadoria (com o primeiro imovel dela) e a carta no Global (com a
      capa dela). Os tres blocos foram gerados a partir deste arquivo em
      02/10/2026 e precisam continuar casando com ele.

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
    ORDEM: ['sao-paulo', 'rio-de-janeiro', 'florianopolis', 'balneario-camboriu', 'praia-brava', 'curitiba', 'porto-alegre', 'goiania', 'florida', 'dubai', 'lisboa', 'cascais'],

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

      'balneario-camboriu': {
        nome: 'Balneário Camboriú', pais: 'Brasil',
        capa: U + '1705608043776-f451470353e7' + C,
        retrato: U + '1667577003772-ac13baccf418' + G,
        linha: 'A cidade que verticalizou a praia e criou um mercado próprio: metro quadrado entre os mais altos do país e procura que não depende de temporada.',
        notas: [
          ['Vista', 'Frente para o mar e andar alto são o que define o preço. A mesma planta, dez andares abaixo e sem mar, vale outra coisa.'],
          ['Prédio', 'Os lançamentos competem em serviço: piscina térmica, spa, garagem com manobrista. Vale ler o que o condomínio cobra por isso.'],
          ['Compra', 'Boa parte das vendas é na planta, com a incorporadora. Prazo de entrega e histórico de obra pesam mais que o renderizado.']
        ],
        imoveis: [
          {
            nome: 'Cobertura Frente Mar', bairro: 'Barra Sul',
            area: '460 m²', terreno: 'Dois pavimentos', suites: '4 suítes', vagas: '4 vagas',
            ano: '2022', orientacao: 'Face leste, para o mar', condominio: 'R$ 6.900 por mês', iptu: 'R$ 2.100 por mês',
            situacao: 'Escritura registrada, habite-se em ordem',
            texto: 'Cobertura duplex de frente para o mar, com o terraço inteiro no pavimento de cima.\nA piscina é térmica e a sala abre para a varanda sem degrau.',
            ambientes: ['Estar para o mar', 'Jantar', 'Cozinha com ilha', 'Quatro suítes', 'Terraço com piscina térmica', 'Quatro vagas'],
            perto: [['Praia Central', '2 min a pé'], ['Molhe da Barra Sul', '8 min a pé'], ['Aeroporto de Navegantes', '25 min de carro']],
            fotos: [f.horizonte, f.salao, f.terraco, f.vidro]
          },
          {
            nome: 'Apartamento Avenida', bairro: 'Centro',
            area: '280 m²', terreno: 'Andar alto', suites: '3 suítes', vagas: '3 vagas',
            ano: '2019', orientacao: 'Face nordeste', condominio: 'R$ 3.800 por mês', iptu: 'R$ 1.400 por mês',
            situacao: 'Escritura registrada, sem ônus',
            texto: 'Andar alto na avenida, com vista aberta para a praia e para a serra ao mesmo tempo.\nO prédio tem lazer completo e portaria vinte e quatro horas.',
            ambientes: ['Estar em dois ambientes', 'Varanda gourmet', 'Cozinha integrada', 'Três suítes', 'Lavabo', 'Depósito privativo'],
            perto: [['Avenida Atlântica', '3 min a pé'], ['Parque Unipraias', '10 min de carro'], ['Aeroporto de Navegantes', '28 min de carro']],
            fotos: [f.varandas, f.arco, f.vidro, f.lareira]
          },
          {
            nome: 'Casa da Enseada', bairro: 'Praia dos Amores',
            area: '520 m²', terreno: '900 m²', suites: '4 suítes', vagas: '4 vagas',
            ano: '2020', orientacao: 'Face norte', condominio: 'R$ 1.600 por mês', iptu: 'R$ 1.900 por mês',
            situacao: 'Escritura registrada, sem ônus',
            texto: 'Casa em condomínio fechado na encosta, com vista para a enseada e mata preservada ao redor.\nA área de lazer fica no nível do jardim, abrigada do vento.',
            ambientes: ['Estar integrado', 'Jantar para doze', 'Cozinha com churrasqueira', 'Quatro suítes', 'Piscina com deck', 'Garagem fechada'],
            perto: [['Praia dos Amores', '5 min a pé'], ['Centro de Balneário', '12 min de carro'], ['Aeroporto de Navegantes', '30 min de carro']],
            fotos: [f.entrada, f.jardim, f.piscina, f.escada]
          }
        ]
      },

      'praia-brava': {
        nome: 'Praia Brava', pais: 'Brasil',
        capa: U + '1658108683864-c6382d98822f' + C,
        retrato: U + '1648220540931-33e35e9fd62b' + G,
        linha: 'Uma praia só, entre Itajaí e Balneário, que virou endereço de morar: baixa, de frente para o mar e com poucos terrenos sobrando.',
        notas: [
          ['Frente', 'A primeira quadra é outro mercado. O que não tem vista direta compete com Balneário, e não com a praia.'],
          ['Gabarito', 'A altura limitada é o que mantém o lugar como é. Isso segura a oferta e sustenta o preço.'],
          ['Vizinhança', 'Restaurantes e o comércio da praia funcionam o ano inteiro, o que diferencia a praça de um balneário de verão.']
        ],
        imoveis: [
          {
            nome: 'Casa Frente Mar', bairro: 'Praia Brava',
            area: '560 m²', terreno: '800 m²', suites: '5 suítes', vagas: '4 vagas',
            ano: '2021', orientacao: 'Face leste, para o mar', condominio: 'Não há', iptu: 'R$ 2.600 por mês',
            situacao: 'Escritura registrada, habite-se em ordem',
            texto: 'Casa na primeira quadra, com o estar aberto para a praia e a piscina no nível da areia.\nMateriais escolhidos para a maresia, com manutenção documentada.',
            ambientes: ['Estar para o mar', 'Jantar', 'Cozinha com ilha', 'Cinco suítes', 'Piscina com deck', 'Espaço gourmet'],
            perto: [['Praia Brava', 'saída direta'], ['Restaurantes da praia', '4 min a pé'], ['Aeroporto de Navegantes', '20 min de carro']],
            fotos: [f.piscina, f.vidro, f.salao, f.terraco]
          },
          {
            nome: 'Apartamento Jardim', bairro: 'Praia Brava',
            area: '210 m²', terreno: 'Térreo com jardim', suites: '3 suítes', vagas: '2 vagas',
            ano: '2018', orientacao: 'Face norte', condominio: 'R$ 2.400 por mês', iptu: 'R$ 1.100 por mês',
            situacao: 'Escritura registrada, sem ônus',
            texto: 'Térreo de prédio baixo, com jardim privativo e a praia a duas quadras.\nO condomínio é pequeno, de doze unidades, e tem piscina e portaria.',
            ambientes: ['Estar e jantar contínuos', 'Jardim privativo', 'Cozinha integrada', 'Três suítes', 'Churrasqueira', 'Duas vagas cobertas'],
            perto: [['Praia Brava', '3 min a pé'], ['Mercado e farmácia', '5 min a pé'], ['Balneário Camboriú', '12 min de carro']],
            fotos: [f.jardim, f.lareira, f.clara, f.arco]
          },
          {
            nome: 'Residência do Morro', bairro: 'Morro da Brava',
            area: '430 m²', terreno: '700 m²', suites: '4 suítes', vagas: '3 vagas',
            ano: '2023', orientacao: 'Face sudeste, para a enseada', condominio: 'R$ 1.200 por mês', iptu: 'R$ 1.500 por mês',
            situacao: 'Escritura registrada, habite-se em ordem',
            texto: 'Na parte alta, com a enseada inteira na janela e o pôr do sol atrás da serra.\nProjeto de 2023, com pé-direito duplo na sala e deck com borda infinita.',
            ambientes: ['Estar com pé-direito duplo', 'Jantar', 'Cozinha integrada', 'Quatro suítes', 'Deck com borda infinita', 'Garagem coberta'],
            perto: [['Praia Brava', '6 min a pé'], ['Centro de Itajaí', '15 min de carro'], ['Aeroporto de Navegantes', '18 min de carro']],
            fotos: [f.horizonte, f.escada, f.vidro, f.entrada]
          }
        ]
      },

      'curitiba': {
        nome: 'Curitiba', pais: 'Brasil',
        capa: U + '1590067927545-f130b33d4e4c' + C,
        retrato: U + '1669308279799-29e105471c43' + G,
        linha: 'Uma praça de bairros definidos e de comprador que mora, não que especula. O que se paga aqui é endereço e construção.',
        notas: [
          ['Bairro', 'Batel, Cabral e Juvevê têm preço, perfil e oferta diferentes. A escolha de bairro costuma vir antes da escolha da planta.'],
          ['Clima', 'Inverno de verdade cobra isolamento, aquecimento e esquadria boa. Casa bem construída aqui se nota na conta de energia.'],
          ['Ritmo', 'Mercado mais lento que São Paulo e mais estável. Imóvel bem posicionado não despenca, mas também não dispara.']
        ],
        imoveis: [
          {
            nome: 'Casa Batel', bairro: 'Batel',
            area: '480 m²', terreno: '720 m²', suites: '4 suítes', vagas: '4 vagas',
            ano: '2017, reformada em 2023', orientacao: 'Face norte', condominio: 'Não há', iptu: 'R$ 2.300 por mês',
            situacao: 'Escritura registrada, sem ônus',
            texto: 'Casa em rua arborizada do Batel, com jardim de inverno no centro da planta e aquecimento de piso.\nA reforma de 2023 trocou as esquadrias por vidro duplo.',
            ambientes: ['Estar com lareira', 'Jantar', 'Cozinha com copa', 'Quatro suítes', 'Jardim de inverno', 'Garagem fechada'],
            perto: [['Shopping Pátio Batel', '6 min a pé'], ['Praça da Espanha', '9 min a pé'], ['Aeroporto Afonso Pena', '30 min de carro']],
            fotos: [f.lareira, f.concreto, f.escada, f.jardim]
          },
          {
            nome: 'Apartamento Cabral', bairro: 'Cabral',
            area: '260 m²', terreno: 'Andar alto', suites: '3 suítes', vagas: '3 vagas',
            ano: '2020', orientacao: 'Face leste', condominio: 'R$ 3.200 por mês', iptu: 'R$ 1.300 por mês',
            situacao: 'Escritura registrada, sem ônus',
            texto: 'Andar alto com vista para o verde do bairro, em prédio de poucas unidades por andar.\nSala e varanda formam um ambiente só, com aquecimento central.',
            ambientes: ['Estar integrado', 'Varanda fechada em vidro', 'Cozinha com despensa', 'Três suítes', 'Lavabo', 'Três vagas'],
            perto: [['Parque São Lourenço', '8 min a pé'], ['Colégios tradicionais', '10 min de carro'], ['Centro Cívico', '12 min de carro']],
            fotos: [f.vidro, f.arco, f.varandas, f.salao]
          },
          {
            nome: 'Residência Juvevê', bairro: 'Juvevê',
            area: '390 m²', terreno: '600 m²', suites: '3 suítes', vagas: '3 vagas',
            ano: '2015, reformada em 2022', orientacao: 'Face noroeste', condominio: 'Não há', iptu: 'R$ 1.800 por mês',
            situacao: 'Escritura registrada, averbação em dia',
            texto: 'Casa térrea de implantação horizontal, com os quartos de um lado e a área social abrindo para o quintal.\nO escritório tem entrada independente.',
            ambientes: ['Estar em dois ambientes', 'Jantar', 'Cozinha integrada', 'Três suítes', 'Escritório com entrada própria', 'Quintal com churrasqueira'],
            perto: [['Mercado Municipal', '7 min de carro'], ['Parque Barigui', '12 min de carro'], ['Aeroporto Afonso Pena', '35 min de carro']],
            fotos: [f.ampla, f.lareira, f.entrada, f.jardim]
          }
        ]
      },

      'porto-alegre': {
        nome: 'Porto Alegre', pais: 'Brasil',
        capa: U + '1632516654640-adc4c3681255' + C,
        retrato: U + '1648073819207-ae3f8e6b4914' + G,
        linha: 'O Guaíba é o ativo da cidade. Quem olha para a água, no Moinhos ou na orla, paga por uma vista que não se repete no resto do Sul.',
        notas: [
          ['Água', 'O pôr do sol sobre o Guaíba virou argumento de venda. Vista direta e vista parcial são mercados distintos.'],
          ['Bairro', 'Moinhos de Vento, Bela Vista e Três Figueiras concentram a oferta de alto padrão. Fora deles o preço cai rápido.'],
          ['Terreno', 'Depois das enchentes de 2024, cota do terreno e drenagem entraram na conversa. Vale perguntar antes de visitar.']
        ],
        imoveis: [
          {
            nome: 'Apartamento Guaíba', bairro: 'Moinhos de Vento',
            area: '320 m²', terreno: 'Andar alto', suites: '3 suítes', vagas: '3 vagas',
            ano: '2018', orientacao: 'Face oeste, para o Guaíba', condominio: 'R$ 4.100 por mês', iptu: 'R$ 1.700 por mês',
            situacao: 'Escritura registrada, sem ônus',
            texto: 'Andar alto com o Guaíba inteiro na janela e o pôr do sol dentro da sala.\nPrédio de uma unidade por andar, com elevador privativo.',
            ambientes: ['Estar para o Guaíba', 'Jantar', 'Cozinha com ilha', 'Três suítes', 'Varanda corrida', 'Elevador privativo'],
            perto: [['Parcão', '4 min a pé'], ['Rua Padre Chagas', '6 min a pé'], ['Aeroporto Salgado Filho', '15 min de carro']],
            fotos: [f.vidro, f.salao, f.varandas, f.lareira]
          },
          {
            nome: 'Casa Três Figueiras', bairro: 'Três Figueiras',
            area: '540 m²', terreno: '1.000 m²', suites: '4 suítes', vagas: '4 vagas',
            ano: '2016, reformada em 2023', orientacao: 'Face norte', condominio: 'R$ 1.900 por mês', iptu: 'R$ 2.000 por mês',
            situacao: 'Escritura registrada, habite-se em ordem',
            texto: 'Casa em condomínio fechado, com piscina coberta e aquecida para o inverno gaúcho.\nA reforma de 2023 refez a área social em vão livre.',
            ambientes: ['Estar de vão livre', 'Jantar para doze', 'Cozinha com copa', 'Quatro suítes', 'Piscina coberta e aquecida', 'Casa de hóspedes'],
            perto: [['Country Club', '5 min de carro'], ['Colégios internacionais', '8 min de carro'], ['Shopping Iguatemi', '10 min de carro']],
            fotos: [f.piscina, f.lareira, f.ampla, f.escada]
          },
          {
            nome: 'Cobertura Bela Vista', bairro: 'Bela Vista',
            area: '380 m²', terreno: 'Dois pavimentos', suites: '3 suítes', vagas: '3 vagas',
            ano: '2012, reformada em 2021', orientacao: 'Face noroeste', condominio: 'R$ 3.600 por mês', iptu: 'R$ 1.500 por mês',
            situacao: 'Escritura registrada, sem ônus',
            texto: 'Cobertura em duplex com terraço coberto e vista para a cidade, com o Guaíba ao fundo.\nO pavimento de cima tem churrasqueira fechada em vidro para o inverno.',
            ambientes: ['Estar em dois ambientes', 'Jantar', 'Cozinha integrada', 'Três suítes', 'Terraço coberto', 'Churrasqueira envidraçada'],
            perto: [['Parque Moinhos de Vento', '10 min a pé'], ['Hospital Moinhos', '6 min de carro'], ['Aeroporto Salgado Filho', '18 min de carro']],
            fotos: [f.terraco, f.arco, f.varandas, f.salao]
          }
        ]
      },

      'goiania': {
        nome: 'Goiânia', pais: 'Brasil',
        capa: U + '1716838607737-dae4efc6bf50' + C,
        retrato: U + '1704913760470-366df41fe7ce' + G,
        linha: 'Uma cidade planejada, arborizada e com um dos mercados verticais mais ativos do Centro-Oeste. Aqui se compra metro quadrado grande por preço de capital média.',
        notas: [
          ['Setor', 'Marista, Bueno e Jardim Goiás são os endereços. Em cada um, a quadra e o prédio pesam mais que o setor em si.'],
          ['Planta', 'Apartamentos grandes são a regra, não a exceção. O que diferencia é acabamento, vaga e serviço do condomínio.'],
          ['Ritmo', 'Lançamentos frequentes mantêm oferta nova no mercado. Imóvel de revenda bem localizado precisa de preço realista para sair.']
        ],
        imoveis: [
          {
            nome: 'Apartamento Marista', bairro: 'Setor Marista',
            area: '340 m²', terreno: 'Andar alto', suites: '4 suítes', vagas: '4 vagas',
            ano: '2021', orientacao: 'Face nascente', condominio: 'R$ 3.400 por mês', iptu: 'R$ 900 por mês',
            situacao: 'Escritura registrada, sem ônus',
            texto: 'Andar alto com vista aberta para o Parque Areião e varanda que corre a fachada inteira.\nO prédio tem lazer completo e uma unidade por andar.',
            ambientes: ['Estar integrado à varanda', 'Jantar', 'Cozinha com despensa', 'Quatro suítes', 'Lavabo', 'Quatro vagas'],
            perto: [['Parque Areião', '5 min a pé'], ['Flamboyant Shopping', '10 min de carro'], ['Aeroporto Santa Genoveva', '20 min de carro']],
            fotos: [f.varandas, f.salao, f.vidro, f.arco]
          },
          {
            nome: 'Casa Jardim Goiás', bairro: 'Jardim Goiás',
            area: '520 m²', terreno: '800 m²', suites: '4 suítes', vagas: '4 vagas',
            ano: '2019', orientacao: 'Face sul', condominio: 'R$ 2.200 por mês', iptu: 'R$ 1.300 por mês',
            situacao: 'Escritura registrada, habite-se em ordem',
            texto: 'Casa em condomínio fechado, de pé-direito alto e piscina com raia.\nA cozinha é dupla, com uma de apoio para receber.',
            ambientes: ['Estar de pé-direito alto', 'Jantar para catorze', 'Cozinha e cozinha de apoio', 'Quatro suítes', 'Piscina com raia', 'Espaço gourmet'],
            perto: [['Parque Flamboyant', '6 min de carro'], ['Colégios particulares', '8 min de carro'], ['Aeroporto Santa Genoveva', '25 min de carro']],
            fotos: [f.ampla, f.piscina, f.lareira, f.entrada]
          },
          {
            nome: 'Cobertura Bueno', bairro: 'Setor Bueno',
            area: '410 m²', terreno: 'Dois pavimentos', suites: '3 suítes', vagas: '3 vagas',
            ano: '2015, reformada em 2024', orientacao: 'Face oeste', condominio: 'R$ 2.900 por mês', iptu: 'R$ 1.000 por mês',
            situacao: 'Escritura registrada, sem ônus',
            texto: 'Cobertura duplex com terraço coberto e piscina, voltada para o pôr do sol do cerrado.\nA reforma de 2024 refez a área social e as instalações.',
            ambientes: ['Estar em dois ambientes', 'Jantar', 'Cozinha integrada', 'Três suítes', 'Terraço com piscina', 'Depósito privativo'],
            perto: [['Parque Vaca Brava', '8 min a pé'], ['Avenida T-63', '5 min de carro'], ['Aeroporto Santa Genoveva', '22 min de carro']],
            fotos: [f.terraco, f.arco, f.piscina, f.salao]
          }
        ]
      },

      'florida': {
        nome: 'Flórida', pais: 'Estados Unidos',
        capa: U + '1589083130544-0d6a2926e519' + C,
        retrato: U + '1535498730771-e735b998cd64' + G,
        linha: 'O principal destino de brasileiros nos Estados Unidos e a porta de entrada mais simples para comprar fora do país: preço em dólar, compra por estrangeiro como rotina e mercado maduro.',
        notas: [
          ['Estrutura', 'A compra por estrangeiro é rotina aqui: cartório, seguro de título e financiamento local funcionam sem fricção.'],
          ['Praças', 'Miami, Orlando e Boca Raton atraem perfis diferentes: água e liquidez, renda de temporada, vida de família. O mesmo orçamento compra coisas muito diferentes.'],
          ['Tributação', 'A estrutura de titularidade decide quanto se paga depois. Ela se define antes da proposta, não depois.']
        ],
        imoveis: [
          {
            nome: 'Villa Bayfront', bairro: 'Coconut Grove, Miami',
            area: '560 m²', terreno: '980 m²', suites: '5 suítes', vagas: '4 vagas',
            ano: '2008, reformada em 2023', orientacao: 'Face leste, para a baía', condominio: 'Não há', iptu: 'US$ 2.400 por mês',
            situacao: 'Title insurance disponível, janelas com certificação',
            texto: 'Frente para a baía, com deck e vaga de barco.\nA reforma de 2023 trocou esquadrias e trouxe certificação de janela para vento.',
            ambientes: ['Estar para a baía', 'Jantar', 'Cozinha com ilha dupla', 'Cinco suítes', 'Deck com vaga de barco', 'Piscina de borda'],
            perto: [['Marina', '3 min a pé'], ['CocoWalk', '9 min a pé'], ['Aeroporto internacional', '20 min de carro']],
            fotos: [f.piscina, f.salao, f.agua, f.lareira]
          },
          {
            nome: 'Residência Lakeside', bairro: 'Winter Park, Orlando',
            area: '390 m²', terreno: '750 m²', suites: '4 suítes', vagas: '2 vagas',
            ano: '2017', orientacao: 'Face oeste, para o lago', condominio: 'US$ 320 por mês', iptu: 'US$ 980 por mês',
            situacao: 'Title insurance disponível, sem pendências',
            texto: 'Casa de frente para o lago, com píer privativo e jardim maduro.\nBairro consolidado, de ruas arborizadas e escolas a pé.',
            ambientes: ['Estar para o lago', 'Jantar formal', 'Cozinha com ilha', 'Quatro suítes', 'Píer privativo', 'Garagem para dois carros'],
            perto: [['Park Avenue', '8 min a pé'], ['Rollins College', '10 min a pé'], ['Aeroporto internacional', '25 min de carro']],
            fotos: [f.palmeiras, f.lareira, f.clara, f.jardim]
          },
          {
            nome: 'Apartamento Oceano', bairro: 'Bal Harbour, Miami',
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
