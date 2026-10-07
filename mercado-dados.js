/* GERADO por ferramentas/coletar-mercado.js em 2026-10-07. Nao edite a mao: rode o coletor. */
window.MERCADO = {
  "geradoEm": "2026-10-07",
  "paises": [
    {
      "id": "brasil",
      "nome": "Brasil",
      "moeda": "R$",
      "estados": [
        "sao-paulo",
        "rio-de-janeiro",
        "santa-catarina",
        "parana",
        "rio-grande-do-sul",
        "goias"
      ],
      "cartoes": [
        {
          "rotulo": "Venda, por m² (média das cidades)",
          "valor": "R$ 10.015",
          "variacao": 5.5,
          "nota": "Índice FipeZAP, set/2026",
          "periodo": null
        },
        {
          "rotulo": "Aluguel, por m² (média das cidades)",
          "valor": "R$ 54,5",
          "variacao": 9.2,
          "nota": "Índice FipeZAP, ago/2026",
          "periodo": null
        },
        {
          "rotulo": "Preços dos imóveis financiados",
          "valor": "+5,3%",
          "variacao": null,
          "nota": "em 12 meses, IVG-R, Banco Central, jul/2026",
          "periodo": null
        },
        {
          "rotulo": "Selic",
          "valor": "13,75% ao ano",
          "variacao": null,
          "nota": "Banco Central, vigente em outubro de 2026",
          "periodo": null
        }
      ],
      "detalhe": {
        "nacional": {
          "venda": 10015.101269667004,
          "vendaVarMes": 0.58,
          "vendaVar12": 5.5,
          "aluguel": 54.4866114202957,
          "aluguelVar12": 9.2,
          "rentabilidadeAno": 6.1
        },
        "bc": {
          "selic": {
            "valor": 13.75,
            "texto": "13,75% ao ano",
            "referencia": "vigente em outubro de 2026",
            "fonte": "Banco Central, série 432"
          },
          "ipca": {
            "valor": 4.22,
            "texto": "4,22%",
            "referencia": "ago/2026",
            "fonte": "IBGE via Banco Central, série 13522"
          },
          "ivgr": {
            "valor": 5.3,
            "texto": "+5,3% em 12 meses",
            "referencia": "jul/2026",
            "fonte": "Banco Central, IVG-R (série 21340)"
          }
        },
        "refVenda": "set/2026",
        "refAluguel": "ago/2026"
      },
      "fontes": [
        "Índice FipeZAP (Fipe e ZAP), set/2026",
        "Banco Central (Selic, IPCA, IVG-R)"
      ],
      "referencia": "set/2026",
      "leitura": "No Brasil, o Índice FipeZAP de venda subiu 5,5% em 12 meses (set/2026), com preço médio de R$ 10.015 por m² nas cidades acompanhadas; o aluguel subiu 9,2% e rende 6,1% ao ano, antes de custos. Os preços dos imóveis financiados (IVG-R, Banco Central) subiu 5,3% em 12 meses até jul/2026. Selic em 13,75% ao ano e inflação de 4,22% em 12 meses.",
      "leituraOrigem": "modelo fixo"
    },
    {
      "id": "estados-unidos",
      "nome": "Estados Unidos",
      "moeda": "US$",
      "estados": [
        "florida"
      ],
      "cartoes": [
        {
          "rotulo": "Valor típico de residência, país",
          "valor": "US$ 368.697",
          "variacao": 1.2,
          "nota": "Zillow ZHVI, ago/2026",
          "periodo": null
        },
        {
          "rotulo": "Imóveis à venda, país",
          "valor": "1.406.231",
          "variacao": 1.9,
          "nota": "Zillow, ago/2026",
          "periodo": null
        },
        {
          "rotulo": "Miami frente ao país",
          "valor": "1,3 vezes",
          "variacao": null,
          "nota": "valor típico, Zillow",
          "periodo": null
        },
        {
          "rotulo": "Orlando frente ao país",
          "valor": "1,0 vezes",
          "variacao": null,
          "nota": "valor típico, Zillow",
          "periodo": null
        }
      ],
      "detalhe": {
        "eua": {
          "valor": 368696.68474913173,
          "var12": 1.2,
          "data": "2026-08-31"
        },
        "oferta": {
          "valor": 1406231,
          "var12": 1.9,
          "data": "2026-08-31"
        },
        "miami": {
          "valor": 475829.62549971975,
          "var12": -0.5,
          "data": "2026-08-31"
        },
        "orlando": {
          "valor": 383445.4629870343,
          "var12": -1.8,
          "data": "2026-08-31"
        },
        "refZ": "ago/2026"
      },
      "fontes": [
        "Zillow Research, ago/2026"
      ],
      "referencia": "ago/2026",
      "leitura": "Nos Estados Unidos, o valor típico de uma residência está em US$ 368.697 (Zillow, ago/2026), subiu 1,2% em 12 meses. A oferta à venda no país subiu 1,9% em um ano, para 1.406.231 imóveis. Na Flórida, Miami vale 1,3 vez o país e Orlando, 1.",
      "leituraOrigem": "modelo fixo"
    },
    {
      "id": "emirados",
      "nome": "Emirados",
      "moeda": "AED",
      "estados": [
        "dubai"
      ],
      "cartoes": [
        {
          "rotulo": "Venda residencial mediana, por m²",
          "valor": "AED 17.882",
          "variacao": -6.6,
          "nota": "unidades e vilas, DLD, set/2026",
          "periodo": "desde janeiro"
        },
        {
          "rotulo": "Vendas residenciais no mês",
          "valor": "11.134",
          "variacao": -1.4,
          "nota": "registradas no DLD, set/2026",
          "periodo": "frente a agosto"
        },
        {
          "rotulo": "Valor mediano por venda",
          "valor": "AED 1.156.682",
          "variacao": null,
          "nota": "unidades e vilas, DLD, set/2026",
          "periodo": null
        },
        {
          "rotulo": "Vendas na planta",
          "valor": "72%",
          "variacao": null,
          "nota": "das vendas de moradia, DLD, set/2026",
          "periodo": null
        }
      ],
      "detalhe": {
        "m2": 17881.999367288834,
        "varJan": -6.6,
        "transacoes": 11134,
        "varVendas": -1.4,
        "ticket": 1156682.36,
        "naPlantaPct": 72.36827751718118,
        "referenciaLonga": "setembro de 2026",
        "mesAntNome": "agosto"
      },
      "fontes": [
        "Dubai Land Department (API de dados abertos), set/2026"
      ],
      "referencia": "set/2026",
      "nota": "O Dubai Land Department cobre o emirado de Dubai, a praça da AMGlobal nos Emirados.",
      "leitura": "Nos Emirados, a praça da AMGlobal é Dubai, e o Dubai Land Department cobre o emirado inteiro. Em Dubai, a venda residencial mediana saiu a AED 17.882 por m² em setembro de 2026 (Dubai Land Department, 11.134 vendas registradas no mês), caiu 6,6% desde janeiro. O valor mediano por negócio foi AED 1.156.682, e 72% das vendas de moradia foram na planta. Frente a agosto, o número de vendas caiu 1,4%.",
      "leituraOrigem": "modelo fixo"
    },
    {
      "id": "portugal",
      "nome": "Portugal",
      "moeda": "€",
      "estados": [
        "lisboa"
      ],
      "cartoes": [
        {
          "rotulo": "Venda mediana, país, por m²",
          "valor": "€ 2.168",
          "variacao": 17.5,
          "nota": "INE, 12 meses até o 1º trimestre de 2026",
          "periodo": null
        },
        {
          "rotulo": "Lisboa frente ao país",
          "valor": "2,3 vezes",
          "variacao": null,
          "nota": "medianas, INE",
          "periodo": null
        },
        {
          "rotulo": "Cascais frente ao país",
          "valor": "2,2 vezes",
          "variacao": null,
          "nota": "medianas, INE",
          "periodo": null
        },
        {
          "rotulo": "Lisboa, por m²",
          "valor": "€ 5.082",
          "variacao": 15.2,
          "nota": "INE, 12 meses até o 1º trimestre de 2026",
          "periodo": null
        }
      ],
      "detalhe": {
        "lisboa": {
          "valor": 5082,
          "var12": 15.2
        },
        "cascais": {
          "valor": 4687,
          "var12": 11.9
        },
        "portugal": {
          "valor": 2168,
          "var12": 17.5
        },
        "referencia": "1º trimestre de 2026",
        "fonte": "INE Portugal, indicador 0012234"
      },
      "fontes": [
        "INE Portugal, indicador 0012234, 1º trimestre de 2026"
      ],
      "referencia": "1º trimestre de 2026",
      "leitura": "Em Portugal, o preço mediano de venda foi de € 2.168 por m² nos 12 meses até o 1º trimestre de 2026 (INE), subiu 17,5% frente ao mesmo período do ano anterior. Lisboa (€ 5.082) vale 2,3 vezes a mediana nacional; Cascais (€ 4.687), 2,2.",
      "leituraOrigem": "modelo fixo"
    }
  ],
  "geradoEmTexto": "7 de outubro de 2026",
  "brasil": {
    "selic": {
      "valor": 13.75,
      "texto": "13,75% ao ano",
      "referencia": "vigente em outubro de 2026",
      "fonte": "Banco Central, série 432"
    },
    "ipca12": {
      "valor": 4.22,
      "texto": "4,22%",
      "referencia": "ago/2026",
      "fonte": "IBGE via Banco Central, série 13522"
    },
    "ivgr12": {
      "valor": 5.3,
      "texto": "+5,3% em 12 meses",
      "referencia": "jul/2026",
      "fonte": "Banco Central, IVG-R (série 21340)"
    },
    "fipezapNacional": {
      "vendaVar12": 5.5,
      "aluguelVar12": 9.2,
      "venda": 10015.101269667004,
      "referencia": "set/2026"
    }
  },
  "estados": [
    {
      "id": "sao-paulo",
      "nome": "São Paulo",
      "pais": "Brasil",
      "moeda": "R$",
      "amostra": false,
      "principal": "São Paulo",
      "cidades": [
        {
          "nome": "São Paulo",
          "venda": 12206.0257613325,
          "vendaVar12": 3.6,
          "aluguel": 65.3635650679039,
          "aluguelVar12": 5.7,
          "rentabilidadeAno": 6.4
        }
      ],
      "cartoes": [
        {
          "rotulo": "Venda, por m²",
          "valor": "R$ 12.206",
          "variacao": 3.6,
          "nota": "FipeZap, set/2026",
          "periodo": null
        },
        {
          "rotulo": "Aluguel, por m²",
          "valor": "R$ 65,4",
          "variacao": 5.7,
          "nota": "FipeZap, ago/2026",
          "periodo": null
        },
        {
          "rotulo": "Rentabilidade do aluguel",
          "valor": "6,4% ao ano",
          "variacao": null,
          "nota": "bruta, FipeZap, ago/2026",
          "periodo": null
        },
        {
          "rotulo": "Frente à média nacional",
          "valor": "-1,9 p.p.",
          "variacao": null,
          "nota": "Índice FipeZAP em 12 meses: +5,5%",
          "periodo": null
        }
      ],
      "fontes": [
        "FipeZap (Fipe e ZAP), set/2026",
        "Banco Central"
      ],
      "referencia": "set/2026",
      "leitura": "Em São Paulo, o metro quadrado de venda está em R$ 12.206 (FipeZap, set/2026), subiu 3,6% em 12 meses, abaixo da média nacional do Índice FipeZAP (+5,5%). O aluguel subiu 5,7% no mesmo período e rende 6,4% ao ano, antes de custos. Pano de fundo no Brasil: Selic em 13,75% ao ano e inflação de 4,22% em 12 meses.",
      "leituraOrigem": "modelo fixo",
      "paisId": "brasil"
    },
    {
      "id": "rio-de-janeiro",
      "nome": "Rio de Janeiro",
      "pais": "Brasil",
      "moeda": "R$",
      "amostra": false,
      "principal": "Rio de Janeiro",
      "cidades": [
        {
          "nome": "Rio de Janeiro",
          "venda": 11301.821178770582,
          "vendaVar12": 5.6,
          "aluguel": 61.40428319897278,
          "aluguelVar12": 14.2,
          "rentabilidadeAno": 6.3
        }
      ],
      "cartoes": [
        {
          "rotulo": "Venda, por m²",
          "valor": "R$ 11.302",
          "variacao": 5.6,
          "nota": "FipeZap, set/2026",
          "periodo": null
        },
        {
          "rotulo": "Aluguel, por m²",
          "valor": "R$ 61,4",
          "variacao": 14.2,
          "nota": "FipeZap, ago/2026",
          "periodo": null
        },
        {
          "rotulo": "Rentabilidade do aluguel",
          "valor": "6,3% ao ano",
          "variacao": null,
          "nota": "bruta, FipeZap, ago/2026",
          "periodo": null
        },
        {
          "rotulo": "Frente à média nacional",
          "valor": "+0,1 p.p.",
          "variacao": null,
          "nota": "Índice FipeZAP em 12 meses: +5,5%",
          "periodo": null
        }
      ],
      "fontes": [
        "FipeZap (Fipe e ZAP), set/2026",
        "Banco Central"
      ],
      "referencia": "set/2026",
      "leitura": "Em Rio de Janeiro, o metro quadrado de venda está em R$ 11.302 (FipeZap, set/2026), subiu 5,6% em 12 meses, acima da média nacional do Índice FipeZAP (+5,5%). O aluguel subiu 14,2% no mesmo período e rende 6,3% ao ano, antes de custos. Pano de fundo no Brasil: Selic em 13,75% ao ano e inflação de 4,22% em 12 meses.",
      "leituraOrigem": "modelo fixo",
      "paisId": "brasil"
    },
    {
      "id": "santa-catarina",
      "nome": "Santa Catarina",
      "pais": "Brasil",
      "moeda": "R$",
      "amostra": false,
      "principal": "Florianópolis",
      "cidades": [
        {
          "nome": "Florianópolis",
          "venda": 13607.391518938077,
          "vendaVar12": 8.3,
          "aluguel": 61.18908644821917,
          "aluguelVar12": 2.8,
          "rentabilidadeAno": 5.4
        },
        {
          "nome": "Balneário Camboriú",
          "venda": 15368.615683006075,
          "vendaVar12": 3.4,
          "aluguel": null,
          "aluguelVar12": null,
          "rentabilidadeAno": null
        },
        {
          "nome": "Itajaí (Praia Brava)",
          "venda": 13452.88388134881,
          "vendaVar12": 5.3,
          "aluguel": null,
          "aluguelVar12": null,
          "rentabilidadeAno": null
        }
      ],
      "cartoes": [
        {
          "rotulo": "Venda, por m²",
          "valor": "R$ 13.607",
          "variacao": 8.3,
          "nota": "FipeZap, set/2026",
          "periodo": null
        },
        {
          "rotulo": "Aluguel, por m²",
          "valor": "R$ 61,2",
          "variacao": 2.8,
          "nota": "FipeZap, ago/2026",
          "periodo": null
        },
        {
          "rotulo": "Rentabilidade do aluguel",
          "valor": "5,4% ao ano",
          "variacao": null,
          "nota": "bruta, FipeZap, ago/2026",
          "periodo": null
        },
        {
          "rotulo": "Frente à média nacional",
          "valor": "+2,8 p.p.",
          "variacao": null,
          "nota": "Índice FipeZAP em 12 meses: +5,5%",
          "periodo": null
        }
      ],
      "fontes": [
        "FipeZap (Fipe e ZAP), set/2026",
        "Banco Central"
      ],
      "referencia": "set/2026",
      "leitura": "Em Florianópolis, o metro quadrado de venda está em R$ 13.607 (FipeZap, set/2026), subiu 8,3% em 12 meses, acima da média nacional do Índice FipeZAP (+5,5%). O aluguel subiu 2,8% no mesmo período e rende 5,4% ao ano, antes de custos. Em Balneário Camboriú, R$ 15.369 por m² (+3,4% em 12 meses); Em Itajaí (Praia Brava), R$ 13.453 por m² (+5,3% em 12 meses). Pano de fundo no Brasil: Selic em 13,75% ao ano e inflação de 4,22% em 12 meses.",
      "leituraOrigem": "modelo fixo",
      "paisId": "brasil"
    },
    {
      "id": "parana",
      "nome": "Paraná",
      "pais": "Brasil",
      "moeda": "R$",
      "amostra": false,
      "principal": "Curitiba",
      "cidades": [
        {
          "nome": "Curitiba",
          "venda": 11765.741804921983,
          "vendaVar12": 1.9,
          "aluguel": 49.114249552152714,
          "aluguelVar12": 9.5,
          "rentabilidadeAno": 4.9
        }
      ],
      "cartoes": [
        {
          "rotulo": "Venda, por m²",
          "valor": "R$ 11.766",
          "variacao": 1.9,
          "nota": "FipeZap, set/2026",
          "periodo": null
        },
        {
          "rotulo": "Aluguel, por m²",
          "valor": "R$ 49,1",
          "variacao": 9.5,
          "nota": "FipeZap, ago/2026",
          "periodo": null
        },
        {
          "rotulo": "Rentabilidade do aluguel",
          "valor": "4,9% ao ano",
          "variacao": null,
          "nota": "bruta, FipeZap, ago/2026",
          "periodo": null
        },
        {
          "rotulo": "Frente à média nacional",
          "valor": "-3,6 p.p.",
          "variacao": null,
          "nota": "Índice FipeZAP em 12 meses: +5,5%",
          "periodo": null
        }
      ],
      "fontes": [
        "FipeZap (Fipe e ZAP), set/2026",
        "Banco Central"
      ],
      "referencia": "set/2026",
      "leitura": "Em Curitiba, o metro quadrado de venda está em R$ 11.766 (FipeZap, set/2026), subiu 1,9% em 12 meses, abaixo da média nacional do Índice FipeZAP (+5,5%). O aluguel subiu 9,5% no mesmo período e rende 4,9% ao ano, antes de custos. Pano de fundo no Brasil: Selic em 13,75% ao ano e inflação de 4,22% em 12 meses.",
      "leituraOrigem": "modelo fixo",
      "paisId": "brasil"
    },
    {
      "id": "rio-grande-do-sul",
      "nome": "Rio Grande do Sul",
      "pais": "Brasil",
      "moeda": "R$",
      "amostra": false,
      "principal": "Porto Alegre",
      "cidades": [
        {
          "nome": "Porto Alegre",
          "venda": 7544.527441208758,
          "vendaVar12": 0.9,
          "aluguel": 46.464293884995186,
          "aluguelVar12": 11,
          "rentabilidadeAno": 7.3
        }
      ],
      "cartoes": [
        {
          "rotulo": "Venda, por m²",
          "valor": "R$ 7.545",
          "variacao": 0.9,
          "nota": "FipeZap, set/2026",
          "periodo": null
        },
        {
          "rotulo": "Aluguel, por m²",
          "valor": "R$ 46,5",
          "variacao": 11,
          "nota": "FipeZap, ago/2026",
          "periodo": null
        },
        {
          "rotulo": "Rentabilidade do aluguel",
          "valor": "7,3% ao ano",
          "variacao": null,
          "nota": "bruta, FipeZap, ago/2026",
          "periodo": null
        },
        {
          "rotulo": "Frente à média nacional",
          "valor": "-4,6 p.p.",
          "variacao": null,
          "nota": "Índice FipeZAP em 12 meses: +5,5%",
          "periodo": null
        }
      ],
      "fontes": [
        "FipeZap (Fipe e ZAP), set/2026",
        "Banco Central"
      ],
      "referencia": "set/2026",
      "leitura": "Em Porto Alegre, o metro quadrado de venda está em R$ 7.545 (FipeZap, set/2026), subiu 0,9% em 12 meses, abaixo da média nacional do Índice FipeZAP (+5,5%). O aluguel subiu 11,0% no mesmo período e rende 7,3% ao ano, antes de custos. Pano de fundo no Brasil: Selic em 13,75% ao ano e inflação de 4,22% em 12 meses.",
      "leituraOrigem": "modelo fixo",
      "paisId": "brasil"
    },
    {
      "id": "goias",
      "nome": "Goiás",
      "pais": "Brasil",
      "moeda": "R$",
      "amostra": false,
      "principal": "Goiânia",
      "cidades": [
        {
          "nome": "Goiânia",
          "venda": 8527.249573241263,
          "vendaVar12": 7.1,
          "aluguel": 43.36119512179551,
          "aluguelVar12": 2.4,
          "rentabilidadeAno": 6
        }
      ],
      "cartoes": [
        {
          "rotulo": "Venda, por m²",
          "valor": "R$ 8.527",
          "variacao": 7.1,
          "nota": "FipeZap, set/2026",
          "periodo": null
        },
        {
          "rotulo": "Aluguel, por m²",
          "valor": "R$ 43,4",
          "variacao": 2.4,
          "nota": "FipeZap, ago/2026",
          "periodo": null
        },
        {
          "rotulo": "Rentabilidade do aluguel",
          "valor": "6,0% ao ano",
          "variacao": null,
          "nota": "bruta, FipeZap, ago/2026",
          "periodo": null
        },
        {
          "rotulo": "Frente à média nacional",
          "valor": "+1,6 p.p.",
          "variacao": null,
          "nota": "Índice FipeZAP em 12 meses: +5,5%",
          "periodo": null
        }
      ],
      "fontes": [
        "FipeZap (Fipe e ZAP), set/2026",
        "Banco Central"
      ],
      "referencia": "set/2026",
      "leitura": "Em Goiânia, o metro quadrado de venda está em R$ 8.527 (FipeZap, set/2026), subiu 7,1% em 12 meses, acima da média nacional do Índice FipeZAP (+5,5%). O aluguel subiu 2,4% no mesmo período e rende 6,0% ao ano, antes de custos. Pano de fundo no Brasil: Selic em 13,75% ao ano e inflação de 4,22% em 12 meses.",
      "leituraOrigem": "modelo fixo",
      "paisId": "brasil"
    },
    {
      "id": "florida",
      "nome": "Flórida",
      "pais": "Estados Unidos",
      "moeda": "US$",
      "amostra": false,
      "principal": "Miami",
      "cidades": [
        {
          "nome": "Miami (região metropolitana)",
          "venda": 475829.62549971975,
          "vendaVar12": -0.5,
          "unidade": "residência",
          "oferta": 48328,
          "ofertaVar12": -14.3
        },
        {
          "nome": "Orlando (região metropolitana)",
          "venda": 383445.4629870343,
          "vendaVar12": -1.8,
          "unidade": "residência",
          "oferta": 16599,
          "ofertaVar12": -4.2
        }
      ],
      "cartoes": [
        {
          "rotulo": "Valor típico de residência, Miami",
          "valor": "US$ 475.830",
          "variacao": -0.5,
          "nota": "Zillow ZHVI, ago/2026",
          "periodo": null
        },
        {
          "rotulo": "Valor típico de residência, Orlando",
          "valor": "US$ 383.445",
          "variacao": -1.8,
          "nota": "Zillow ZHVI, ago/2026",
          "periodo": null
        },
        {
          "rotulo": "Imóveis à venda, Miami",
          "valor": "48.328",
          "variacao": -14.3,
          "nota": "Zillow, ago/2026",
          "periodo": null
        },
        {
          "rotulo": "Imóveis à venda, Orlando",
          "valor": "16.599",
          "variacao": -4.2,
          "nota": "Zillow, ago/2026",
          "periodo": null
        }
      ],
      "fontes": [
        "Zillow Research, ago/2026"
      ],
      "referencia": "ago/2026",
      "leitura": "Na região de Miami, o valor típico de uma residência está em US$ 475.830 (Zillow, ago/2026), caiu 0,5% em 12 meses; em Orlando, US$ 383.445 (-1,8%). A oferta à venda em Miami caiu 14,3% em um ano, para 48.328 imóveis; em Orlando, caiu 4,2%, para 16.599.",
      "leituraOrigem": "modelo fixo",
      "paisId": "estados-unidos"
    },
    {
      "id": "dubai",
      "nome": "Dubai",
      "pais": "Emirados",
      "moeda": "AED",
      "amostra": false,
      "principal": "Dubai",
      "cidades": [
        {
          "nome": "Dubai",
          "venda": 17881.999367288834,
          "vendaVar12": null,
          "vendaVarAno": -6.6,
          "unidade": "m²"
        }
      ],
      "cartoes": [
        {
          "rotulo": "Venda residencial mediana, por m²",
          "valor": "AED 17.882",
          "variacao": -6.6,
          "nota": "unidades e vilas, DLD, set/2026",
          "periodo": "desde janeiro"
        },
        {
          "rotulo": "Vendas residenciais no mês",
          "valor": "11.134",
          "variacao": -1.4,
          "nota": "registradas no DLD, set/2026",
          "periodo": "frente a agosto"
        },
        {
          "rotulo": "Valor mediano por venda",
          "valor": "AED 1.156.682",
          "variacao": null,
          "nota": "unidades e vilas, DLD, set/2026",
          "periodo": null
        },
        {
          "rotulo": "Vendas na planta",
          "valor": "72%",
          "variacao": null,
          "nota": "das vendas de moradia, DLD, set/2026",
          "periodo": null
        }
      ],
      "fontes": [
        "Dubai Land Department (API de dados abertos), set/2026"
      ],
      "referencia": "set/2026",
      "detalhe": {
        "m2": 17881.999367288834,
        "varJan": -6.6,
        "transacoes": 11134,
        "varVendas": -1.4,
        "ticket": 1156682.36,
        "naPlantaPct": 72.36827751718118,
        "referenciaLonga": "setembro de 2026",
        "mesAntNome": "agosto"
      },
      "leitura": "Em Dubai, a venda residencial mediana saiu a AED 17.882 por m² em setembro de 2026 (Dubai Land Department, 11.134 vendas registradas no mês), caiu 6,6% desde janeiro. O valor mediano por negócio foi AED 1.156.682, e 72% das vendas de moradia foram na planta. Frente a agosto, o número de vendas caiu 1,4%.",
      "leituraOrigem": "modelo fixo",
      "paisId": "emirados"
    },
    {
      "id": "lisboa",
      "nome": "Lisboa",
      "pais": "Portugal",
      "moeda": "€",
      "amostra": false,
      "principal": "Lisboa",
      "cidades": [
        {
          "nome": "Lisboa",
          "venda": 5082,
          "vendaVar12": 15.2,
          "unidade": "m²"
        },
        {
          "nome": "Cascais",
          "venda": 4687,
          "vendaVar12": 11.9,
          "unidade": "m²"
        }
      ],
      "cartoes": [
        {
          "rotulo": "Venda mediana, Lisboa, por m²",
          "valor": "€ 5.082",
          "variacao": 15.2,
          "nota": "INE, 12 meses até o 1º trimestre de 2026",
          "periodo": null
        },
        {
          "rotulo": "Venda mediana, Cascais, por m²",
          "valor": "€ 4.687",
          "variacao": 11.9,
          "nota": "INE, 12 meses até o 1º trimestre de 2026",
          "periodo": null
        },
        {
          "rotulo": "Portugal, por m²",
          "valor": "€ 2.168",
          "variacao": 17.5,
          "nota": "INE, mediana nacional",
          "periodo": null
        },
        {
          "rotulo": "Lisboa frente a Portugal",
          "valor": "2,3 vezes",
          "variacao": null,
          "nota": "razão entre as medianas",
          "periodo": null
        }
      ],
      "fontes": [
        "INE Portugal, indicador 0012234, 1º trimestre de 2026"
      ],
      "referencia": "1º trimestre de 2026",
      "leitura": "No município de Lisboa, o preço mediano de venda foi de € 5.082 por m² nos 12 meses até o 1º trimestre de 2026 (INE), subiu 15,2% frente ao mesmo período do ano anterior. Em Cascais, € 4.687 por m² (+11,9%). A mediana de Portugal está em € 2.168 por m² (+17,5%).",
      "leituraOrigem": "modelo fixo",
      "paisId": "portugal"
    }
  ],
  "ia": "modelo fixo (sem GEMINI_API_KEY)",
  "ressalva": "Dados de terceiros, com fonte e data em cada número. Variações observadas, não previsões. Não constituem recomendação de investimento."
};
