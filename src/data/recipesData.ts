import { Recipe } from '../types';

export const ALL_RECIPES: Recipe[] = [
  // CAPÍTULO 1: Gripe e Resfriados (1-10)
  {
    id: 1,
    title: "Chá Quente de Gengibre com Limão e Mel",
    chapterId: 1,
    chapterTitle: "Receitas Tradicionais para Gripe e Resfriados",
    introducao: "Esta é a receita mais antiga da minha família para quando o corpo sente aquele primeiro arrepio de frio. O gengibre traz um calor reconfortante que desperta o corpo por dentro.",
    ingredientes: [
      "3 rodelas finas de gengibre fresco",
      "Suco de 1/2 limão espremido na hora",
      "1 colher de sopa de mel puro",
      "1 xícara e meio de água filtrada"
    ],
    modoPreparo: [
      "Ferva a água com as rodelas de gengibre em fogo baixo por 8 minutos.",
      "Desligue o fogo, tape o bule e deixe descansar por 3 minutos.",
      "Coe em uma xícara bonita, adicione o suco de limão e o mel só quando a água estiver morna."
    ],
    comoConsumir: "Tome 1 xícara bem morna, de preferência à tarde ou ao chegar da rua em um dia frio.",
    cuidados: "Se você tem estômago muito sensível a especiarias picantes, use apenas 2 rodelas finas de gengibre.",
    curiosidade: "Na China tradicional, o gengibre fresco é chamado de 'Sheng Jiang' e é venerado há mais de 2.000 anos por espantar o frio.",
    dicaMestraLin: "Não adicione o mel com a água fervendo; espere amornar um pouquinho para preservar todo o carinho e doçura natural do mel."
  },
  {
    id: 2,
    title: "Infusão de Canela, Cravo e Casca de Laranja",
    chapterId: 1,
    chapterTitle: "Receitas Tradicionais para Gripe e Resfriados",
    introducao: "O aroma picante e adocicado da canela combinado com a casca de laranja enche a casa de alegria e traz sensação de abraço no peito nos dias cinzentos.",
    ingredientes: [
      "1 pau de canela médio",
      "3 cravos-da-índia",
      "1 pedaço pequeno de casca de laranja bem lavada (sem a parte branca)",
      "2 xícaras de água filtrada"
    ],
    modoPreparo: [
      "Coloque a água, a canela, os cravos e a casca de laranja em uma panela pequena.",
      "Leve ao fogo até levantar fervura e mantenha fervendo suavemente por 5 minutos.",
      "Desligue o fogo, abafe por 5 minutos e coe antes de servir."
    ],
    comoConsumir: "Aprecie 1 xícara morna no final da tarde enquanto descansa as pernas.",
    cuidados: "Pessoas com sensibilidade acentuada a cravos devem usar apenas 1 ou 2 unidades.",
    curiosidade: "A casca de laranja seca é conhecida como 'Chen Pi' e é guardada por anos na Ásia como um tesouro gastronômico.",
    dicaMestraLin: "Retire a parte branca interna da casca de laranja para o chá não ficar amargo."
  },
  {
    id: 3,
    title: "Caldo Dourado de Alho e Gengibre",
    chapterId: 1,
    chapterTitle: "Receitas Tradicionais para Gripe e Resfriados",
    introducao: "Um caldo leve e acolhedor para aqueles dias em que não temos vontade de comer nada pesado, mas precisamos alimentar a força do corpo.",
    ingredientes: [
      "2 dentes de alho amassados",
      "2 rodelas de gengibre fresco",
      "1 pitada suave de sal marinho",
      "1 talo de cebolinha picada",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a água com o alho e o gengibre por 10 minutos em fogo brando.",
      "Adicione a pitada de sal e a cebolinha picada nos últimos 30 segundos de cozimento.",
      "Sirva em uma tigela morna."
    ],
    comoConsumir: "Tome às colheradas lentas à noite, antes de se deitar.",
    cuidados: "Use alho fresco para obter um aroma limpo e suave.",
    curiosidade: "A cebolinha é usada na medicina tradicional oriental para aquecer os canais de energia do pescoço.",
    dicaMestraLin: "Beba bem quentinho e cubra os pés com uma meia aconchegante depois de tomar."
  },
  {
    id: 4,
    title: "Chá de Hortelã com Limão e Anis Estrelado",
    chapterId: 1,
    chapterTitle: "Receitas Tradicionais para Gripe e Resfriados",
    introducao: "Esta infusão traz o frescor da hortelã com o perfume doce do anis estrelado, perfeita para aliviar a sensação de cabeça pesada e vias obstruídas.",
    ingredientes: [
      "5 folhas de hortelã fresca",
      "1 estrela de anis estrelado",
      "Rodelas finas de 1/2 limão",
      "1 xícara e meia de água"
    ],
    modoPreparo: [
      "Ferva a água com o anis estrelado por 4 minutos.",
      "Desligue o fogo e acrescente a hortelã e as rodelas de limão.",
      "Abafe por 5 minutos e coe suavemente."
    ],
    comoConsumir: "Tome 1 xícara ao longo do dia quando sentir necessidade de frescor.",
    cuidados: "Evite ferver a folha de hortelã para não perder seu aroma suave.",
    curiosidade: "O anis estrelado é uma das especiarias mais bonitas do mundo e simboliza sorte e proteção no Oriente.",
    dicaMestraLin: "Respire o vapor do chá na xícara antes de dar o primeiro gole."
  },
  {
    id: 5,
    title: "Bebida de Jujuba, Goji Berry e Gengibre",
    chapterId: 1,
    chapterTitle: "Receitas Tradicionais para Gripe e Resfriados",
    introducao: "Uma bebida levemente adocicada por frutas tradicionais da Ásia que trazem conforto e nutrem a vitalidade em períodos de cansaço.",
    ingredientes: [
      "3 jujubas secas (tâmaras chinesas)",
      "1 colher de sobremesa de goji berries",
      "2 rodelas de gengibre",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Corte as jujubas ao meio e coloque na panela com a água, as goji berries e o gengibre.",
      "Cozinhe em fogo baixo por 12 minutos até a água ficar levemente dourada.",
      "Sirva em xícaras, podendo comer as frutinhas amolecidas."
    ],
    comoConsumir: "Tome morno pela manhã ou no meio da tarde.",
    cuidados: "Se não encontrar jujubas chinesas, substitua por 2 tâmaras normais picadas.",
    curiosidade: "As goji berries são chamadas de 'Gou Qi Zi' e são famosas por alegrarem o olhar.",
    dicaMestraLin: "Mastigue as frutinhas no final do chá, elas ficam macias e deliciosas."
  },
  {
    id: 6,
    title: "Xarope Caseiro de Mel, Alho e Limão",
    chapterId: 1,
    chapterTitle: "Receitas Tradicionais para Gripe e Resfriados",
    introducao: "O preparado simples de colher que toda vovó oriental mantinha no armário durante os meses frios.",
    ingredientes: [
      "1 dente de alho fatiado bem fino",
      "Suco de 1 limão inteiro",
      "2 colheres de sopa de mel puro"
    ],
    modoPreparo: [
      "Em um copo pequeno, misture o alho fatiado, o suco de limão e o mel.",
      "Deixe descansar tampado em temperatura ambiente por 2 horas para soltar os caldos.",
      "Coe o xarope obtido."
    ],
    comoConsumir: "Tome 1 colher de chá do xarope 2 vezes ao dia.",
    cuidados: "Não administre mel para crianças menores de 1 ano.",
    curiosidade: "A combinação de mel e alho é usada em quase todas as culturas antigas do planeta.",
    dicaMestraLin: "Faça em pequenas quantidades para consumir sempre fresco."
  },
  {
    id: 7,
    title: "Vaporização Aromática de Eucalipto e Hortelã",
    chapterId: 1,
    chapterTitle: "Receitas Tradicionais para Gripe e Resfriados",
    introducao: "Não é para beber, mas para respirar! Um ritual de banho de vapor para trazer alívio e leveza ao peito e à cabeça.",
    ingredientes: [
      "3 folhas de eucalipto limpas",
      "5 folhas de hortelã fresca",
      "1 litro de água fervente"
    ],
    modoPreparo: [
      "Ferva a água em uma tigela grande resistente ao calor.",
      "Adicione as folhas de eucalipto e hortelã.",
      "Incline o rosto suavemente a uma distância segura da tigela e cubra a cabeça com uma toalha macia."
    ],
    comoConsumir: "Respire o vapor suavemente por 5 a 8 minutos antes de dormir.",
    cuidados: "Mantenha uma distância segura do recipiente para não queimar a pele com o vapor quente.",
    curiosidade: "A vaporização com ervas é uma das formas mais puras de harmonizar as vias respiratórias.",
    dicaMestraLin: "Feche os olhos durante a vaporização para relaxar também a mente."
  },
  {
    id: 8,
    title: "Infusão Suave de Crisântemo com Gengibre",
    chapterId: 1,
    chapterTitle: "Receitas Tradicionais para Gripe e Resfriados",
    introducao: "O crisântemo traz leveza à cabeça enquanto o gengibre aquece o corpo por dentro, criando uma infusão equilibrada e bonita de se ver.",
    ingredientes: [
      "4 flores secas de crisântemo culinário",
      "2 rodelas de gengibre fresco",
      "1 xícara e meia de água"
    ],
    modoPreparo: [
      "Ferva a água com o gengibre por 5 minutos.",
      "Desligue o fogo, coloque as flores de crisântemo e abafe por 4 minutos.",
      "Coe suavemente."
    ],
    comoConsumir: "Tome 1 xícara morna ao longo do dia.",
    cuidados: "Certifique-se de usar crisântemo próprio para consumo alimentício/chás.",
    curiosidade: "O chá de crisântemo ('Ju Hua') é a bebida oficial dos poetas orientais desde a Antiguidade.",
    dicaMestraLin: "Aprecie a flor se abrindo na água antes de coar."
  },
  {
    id: 9,
    title: "Caldo de Galinha com Raiz de Gengibre e Cebolinha",
    chapterId: 1,
    chapterTitle: "Receitas Tradicionais para Gripe e Resfriados",
    introducao: "O famoso 'remedio da vovó' em versão oriental: um caldo leve, transparente e extremamente reconfortante.",
    ingredientes: [
      "500ml de caldo caseiro de galinha sem gordura",
      "3 rodelas finas de gengibre",
      "2 talos de cebolinha picados",
      "1 pitada leve de pimenta-do-reino moída"
    ],
    modoPreparo: [
      "Aqueça o caldo de galinha com o gengibre por 15 minutos em fogo baixo.",
      "Retire as rodelas de gengibre e adicione a cebolinha picada e a pitada de pimenta no final.",
      "Sirva em uma tigela bem quentinha."
    ],
    comoConsumir: "Tome como uma refeição leve ao entardecer.",
    cuidados: "Evite caldos industrializados com excesso de sódio.",
    curiosidade: "Caldo morno de aves é considerado na Ásia o alimento mais gentil para o estômago fragilizado.",
    dicaMestraLin: "Tome devagar, sentindo o calor descer confortando o peito."
  },
  {
    id: 10,
    title: "Elixir Morno de Canela com Mel e Limão",
    chapterId: 1,
    chapterTitle: "Receitas Tradicionais para Gripe e Resfriados",
    introducao: "Uma bebida simples, doce e aveludada que parece uma sobremesa morna em dias de chuva.",
    ingredientes: [
      "1 colher de café de canela em pó",
      "1 colher de sopa de mel",
      "Suco de 1/2 limão",
      "1 xícara de água morna"
    ],
    modoPreparo: [
      "Misture a canela em pó e o mel na xícara até formar uma pastinha lisa.",
      "Adicione a água morna aos poucos, mexendo bem.",
      "Finalize com o suco de limão e sirva."
    ],
    comoConsumir: "Tome pela manhã ao acordar ou antes do jantar.",
    cuidados: "Mexa bem com uma colherzinha enquanto toma para a canela não assentar no fundo.",
    curiosidade: "A canela aquece o centro do corpo e traz sensação imediata de conforto físico.",
    dicaMestraLin: "Use água morna e gostosa, nunca fervendo."
  },

  // CAPÍTULO 2: Digestão e Intestino (11-20)
  {
    id: 11,
    title: "Infusão de Erva-Doce, Funcho e Camomila",
    chapterId: 2,
    chapterTitle: "Receitas Tradicionais para Digestão e Intestino",
    introducao: "O trio clássico do bem-estar digestivo que alivia a sensação de inchaço e estômago pesado após as refeições.",
    ingredientes: [
      "1 colher de chá de sementes de erva-doce",
      "1 colher de chá de sementes de funcho",
      "1 colher de sopa de flores de camomila",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a água, desligue o fogo e adicione as sementes e flores.",
      "Abafe por 8 minutos com uma tampa.",
      "Coe e sirva em xícaras quentinhas."
    ],
    comoConsumir: "Tome 1 xícara cerca de 20 minutos após o almoço ou jantar.",
    cuidados: "Guarde as sementes em potes de vidro bem vedados para manter os óleos essenciais.",
    curiosidade: "Sementes aromáticas são usadas desde a antiguidade para trazer leveza e expelir gases do ventre.",
    dicaMestraLin: "Dê uma leve amassadinha nas sementes no pilão antes de colocar na água."
  },
  {
    id: 12,
    title: "Chá de Casca de Laranja Seca com Gengibre",
    chapterId: 2,
    chapterTitle: "Receitas Tradicionais para Digestão e Intestino",
    introducao: "A casca de cítricos seca é um dos segredos mais guardados das cozinhas orientais para destravar a digestão lenta.",
    ingredientes: [
      "1 pedaço de casca de laranja seca ao sol",
      "2 rodelas finas de gengibre",
      "1 xícara e meia de água"
    ],
    modoPreparo: [
      "Ferva a água com a casca de laranja e o gengibre por 7 minutos.",
      "Deixe abafado por 3 minutos e coe."
    ],
    comoConsumir: "Tome morno após refeições mais gordurosas ou fartas.",
    cuidados: "Lave bem a casca da laranja antes de colocá-la para secar.",
    curiosidade: "Na culinária oriental, a casca seca de tangerina ou laranja melhora o fluxo de energia do abdômen.",
    dicaMestraLin: "Você pode secar cascas de laranja em casa deixando-as sobre um pano limpo ao sol por alguns dias."
  },
  {
    id: 13,
    title: "Caldo Suave de Arroz com Gengibre (Congee)",
    chapterId: 2,
    chapterTitle: "Receitas Tradicionais para Digestão e Intestino",
    introducao: "O famoso 'Congee' ou mingau de arroz medicinal, consumido por bilhões de pessoas na Ásia para descansar o estômago fragilizado.",
    ingredientes: [
      "1/2 xícara de arroz branco macio",
      "5 xícaras de água filtrada",
      "2 rodelas de gengibre",
      "1 pitada de sal"
    ],
    modoPreparo: [
      "Cozinhe o arroz com a água e o gengibre em fogo bem baixo por 45 minutos até os grãos se desmancharem e formar um caldo cremoso.",
      "Tempere com a pitada de sal e retire o gengibre.",
      "Sirva morno em tigela de cerâmica."
    ],
    comoConsumir: "Consuma no café da manhã ou no jantar como substituto leve de refeição.",
    cuidados: "Cozinhe em fogo bem brando mexendo de vez em quando para não grudar no fundo.",
    curiosidade: "O Congee é considerado o alimento mais harmonioso do Oriente para restaurar a paz digestiva.",
    dicaMestraLin: "Adicione um fiozinho de óleo de gergelim por cima na hora de comer."
  },
  {
    id: 14,
    title: "Bebida Morna de Sementes de Coentro e Cominho",
    chapterId: 2,
    chapterTitle: "Receitas Tradicionais para Digestão e Intestino",
    introducao: "Uma infusão especiada e suave para quem sofre com estômago estufado ou sensação de queimação amarga.",
    ingredientes: [
      "1 colher de chá de sementes de coentro",
      "1/2 colher de chá de sementes de cominho",
      "1 xícara e meia de água"
    ],
    modoPreparo: [
      "Ferva a água com as sementes por 5 minutos.",
      "Abafe por 5 minutos e coe bem antes de beber."
    ],
    comoConsumir: "Tome meia xícara antes ou logo após a refeição principal.",
    cuidados: "Use sementes inteiras e não em pó para um sabor mais delicado.",
    curiosidade: "O coentro em sementes tem um sabor levemente cítrico muito diferente das folhas.",
    dicaMestraLin: "Beba bem morno, sem pressa."
  },
  {
    id: 15,
    title: "Infusão de Hortelã Fresca com Limão Siciliano",
    chapterId: 2,
    chapterTitle: "Receitas Tradicionais para Digestão e Intestino",
    introducao: "Refrescância pura para dias quentes em que a digestão fica preguiçosa.",
    ingredientes: [
      "6 folhas de hortelã fresca",
      "2 rodelas de limão siciliano",
      "1 xícara de água morna"
    ],
    modoPreparo: [
      "Coloque a hortelã e as rodelas de limão na xícara.",
      "Despeje a água morna por cima e abafe com um pires por 5 minutos.",
      "Retire o pires e aprecie sem coar."
    ],
    comoConsumir: "Tome à tarde ou após o almoço.",
    cuidados: "Não use água fervendo demais para preservar as folhas de hortelã verdes.",
    curiosidade: "A hortelã acalma as paredes do estômago e desfaz o calor acumulado no ventre.",
    dicaMestraLin: "Aperte levemente as folhas na mão antes de colocar na xícara para soltar o aroma."
  },
  {
    id: 16,
    title: "Chá de Macela com Erva-Cidreira",
    chapterId: 2,
    chapterTitle: "Receitas Tradicionais para Digestão e Intestino",
    introducao: "Uma combinação muito querida das vovós para acalmar as dores de barriga e o nervosismo que afeta o intestino.",
    ingredientes: [
      "1 colher de sopa de flores de macela",
      "1 colher de sopa de erva-cidreira (capim-limão)",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a água, desligue e adicione a macela e a erva-cidreira.",
      "Abafe por 7 minutos e coe."
    ],
    comoConsumir: "Tome 1 xícara morna à tarde ou à noite.",
    cuidados: "Certifique-se de adquirir flores de macela bem limpas de boa procedência.",
    curiosidade: "A macela é tradicionalmente colhida antes do sol nascer para preservar suas virtudes.",
    dicaMestraLin: "Excelente para quando as emoções do dia deixam o estômago 'amarrado'."
  },
  {
    id: 17,
    title: "Caldo de Abóbora com Gengibre e Gergelim",
    chapterId: 2,
    chapterTitle: "Receitas Tradicionais para Digestão e Intestino",
    introducao: "A abóbora amarela é macia, adocicada e reconforta o estômago como poucas coisas na natureza.",
    ingredientes: [
      "1 xícara de abóbora amarela picada",
      "1 rodela de gengibre",
      "1 colher de chá de gergelim preto torrado",
      "2 xícaras de água",
      "Pitada de sal"
    ],
    modoPreparo: [
      "Cozinhe a abóbora com a água e o gengibre até ficar bem macia.",
      "Amasse a abóbora com o garfo no próprio caldo, tempere com o sal e polvilhe o gergelim por cima."
    ],
    comoConsumir: "Consuma morno no jantar.",
    cuidados: "Aproveite para comer bem morno.",
    curiosidade: "A cor amarela dos alimentos é associada na Ásia ao fortalecimento do centro digestivo.",
    dicaMestraLin: "Um prato simples que traz uma paz enorme ao estômago cansado."
  },
  {
    id: 18,
    title: "Água Morna Matinal com Limão e Pitada de Gengibre",
    chapterId: 2,
    chapterTitle: "Receitas Tradicionais para Digestão e Intestino",
    introducao: "O hábito mais simples e transformador para despertar o intestino logo ao acenar do dia.",
    ingredientes: [
      "1 copo de água morna (nunca gelada)",
      "Suco de 1/2 limão fresco",
      "1 pitada pequenininha de gengibre em pó"
    ],
    modoPreparo: [
      "Misture o suco de limão e o gengibre na água morna em um copo limpo.",
      "Mexa bem e beba imediatamente."
    ],
    comoConsumir: "Beba em jejum, assim que se levantar da cama.",
    cuidados: "Aguarde cerca de 15 a 20 minutos antes de tomar o seu café da manhã habitual.",
    curiosidade: "Água morna em jejum 'lava' suavemente o canal digestivo após o descanso noturno.",
    dicaMestraLin: "Faça desse primeiro copo de água um momento de gratidão por mais um dia que começa."
  },
  {
    id: 19,
    title: "Infusão de Alecrim com Casca de Maçã",
    chapterId: 2,
    chapterTitle: "Receitas Tradicionais para Digestão e Intestino",
    introducao: "Uma infusão levemente frutada e perfumada que auxilia o fígado e a vesícula a trabalharem felizes.",
    ingredientes: [
      "1 ramo pequeno de alecrim fresco",
      "Casca de 1 maçã vermelha higienizada",
      "1 xícara e meia de água"
    ],
    modoPreparo: [
      "Ferva a água com a casca de maçã por 5 minutos.",
      "Desligue, adicione o ramo de alecrim e abafe por 4 minutos.",
      "Coe e sirva."
    ],
    comoConsumir: "Tome 1 xícara morna após refeições principias.",
    cuidados: "Não exagere na quantidade de alecrim para não amargar o chá.",
    curiosidade: "A maçã traz doçura e suaviza a energia marcante do alecrim.",
    dicaMestraLin: "Coma a maçã sem casca como lanche da tarde!"
  },
  {
    id: 20,
    title: "Chá de Gengibre com Anis e Canela Pós-Refeição",
    chapterId: 2,
    chapterTitle: "Receitas Tradicionais para Digestão e Intestino",
    introducao: "O 'digestivo dos deuses' para dias de almoço de domingo em família.",
    ingredientes: [
      "2 rodelas de gengibre",
      "1 estrela de anis",
      "1 pedacinho de canela em pau",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva todos os ingredientes por 6 minutos em fogo baixo.",
      "Abafe por 3 minutos e coe em xícaras de chá."
    ],
    comoConsumir: "Sirva aos convidados logo após a refeição.",
    cuidados: "Beba pequenos goles ainda morno.",
    curiosidade: "Oferecer chá digestivo após o banquete é o ápice da hospitalidade oriental.",
    dicaMestraLin: "Sente-se à mesa para conversar um pouco mais enquanto toma seu chá."
  },

  // CAPÍTULO 3: Memória e Concentração (21-30)
  {
    id: 21,
    title: "Chá Verde Tradicional com Folhas de Hortelã",
    chapterId: 3,
    chapterTitle: "Receitas Tradicionais para Memória e Concentração",
    introducao: "O segredo dos monges orientais para manter a mente desperta, clara e serena durante longas horas de reflexão.",
    ingredientes: [
      "1 colher de chá de folhas de chá verde de boa qualidade",
      "4 folhas de hortelã",
      "2 xícaras de água filtrada"
    ],
    modoPreparo: [
      "Aqueça a água até começar a formar pequenas bolhas no fundo (sem deixar ferver forte).",
      "Desligue o fogo, adicione o chá verde e a hortelã e abafe por exatamente 3 minutos.",
      "Coe imediatamente para não amargar."
    ],
    comoConsumir: "Tome pela manhã ou logo após o almoço.",
    cuidados: "Evite consumir chá verde após as 17h se você tiver tendência a insônia.",
    curiosidade: "O chá verde contém L-teanina, substância venerada por trazer 'alerta relaxado'.",
    dicaMestraLin: "Não use água fervendo demais, a folha do chá verde é delicada como uma flor."
  },
  {
    id: 22,
    title: "Infusão de Alecrim com Maçã e Canela",
    chapterId: 3,
    chapterTitle: "Receitas Tradicionais para Memória e Concentração",
    introducao: "O alecrim é conhecido desde a Grécia antiga e no Oriente como a 'erva da memória e da alegria'.",
    ingredientes: [
      "1 colher de sobremesa de folhas de alecrim fresco",
      "1/2 maçã fatiada finamente",
      "1 pedacinho de canela em pau",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a água com a maçã e a canela por 6 minutos.",
      "Desligue o fogo, adicione o alecrim, abafe por 4 minutos e coe."
    ],
    comoConsumir: "Tome 1 xícara no meio da manhã enquanto faz suas leituras.",
    cuidados: "Gaste alguns segundos inalando o perfume delicioso da xícara antes de beber.",
    curiosidade: "Na sabedoria popular, o aroma do alecrim desperta as lembranças antigas e clareia o raciocínio.",
    dicaMestraLin: "Esfregue um raminho de alecrim entre as mãos e sinta o aroma para despertar a mente."
  },
  {
    id: 23,
    title: "Bebida de Goji Berry com Tâmara Chinesa e Gergelim",
    chapterId: 3,
    chapterTitle: "Receitas Tradicionais para Memória e Concentração",
    introducao: "Uma bebida nutritiva e consistente para dar combustível suave ao cérebro e combater o cansaço mental.",
    ingredientes: [
      "1 colher de sopa de goji berries",
      "2 jujubas (tâmaras chinesas)",
      "1 colher de chá de sementes de gergelim preto torrado",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a água com as jujubas picadas e as goji berries por 10 minutos.",
      "Sirva em xícara polvilhando o gergelim preto por cima."
    ],
    comoConsumir: "Tome morno à tarde acompanhado de um biscoitinho leve.",
    cuidados: "O gergelim preto deve ser levemente torrado na frigideira sem óleo para soltar o aroma.",
    curiosidade: "O gergelim preto é considerado na Ásia um alimento de 'longevidade' e nutrição cerebral.",
    dicaMestraLin: "As frutinhas ao fundo da xícara são um petisco delicioso."
  },
  {
    id: 24,
    title: "Chá de Sementes de Girassol com Ginkgo Acolhedor",
    chapterId: 3,
    chapterTitle: "Receitas Tradicionais para Memória e Concentração",
    introducao: "Ginkgo Biloba é uma das árvores mais antigas do planeta, combinada aqui com sementes nutritivas.",
    ingredientes: [
      "1 colher de chá de folhas secas de Ginkgo Biloba",
      "1 colher de chá de sementes de girassol sem casca",
      "1 xícara e meia de água"
    ],
    modoPreparo: [
      "Ferva a água com as sementes de girassol por 5 minutos.",
      "Desligue o fogo, adicione as folhas de Ginkgo e abafe por 5 minutos.",
      "Coe antes de beber."
    ],
    comoConsumir: "Tome 1 xícara pela manhã.",
    cuidados: "Se você toma medicamentos para afinar o sangue, consulte seu médico sobre o Ginkgo.",
    curiosidade: "A árvore de Ginkgo sobreviveu a eras glaciais na Ásia e simboliza a resistência do tempo.",
    dicaMestraLin: "Compre folhas de Ginkgo em ervanárias de confiança."
  },
  {
    id: 25,
    title: "Caldo de Nozes com Aveia e Canela",
    chapterId: 3,
    chapterTitle: "Receitas Tradicionais para Memória e Concentração",
    introducao: "A noz tem o formato exato de um cérebro humano! Os antigos orientais notaram isso e usavam nozes para fortificar a mente.",
    ingredientes: [
      "3 nozes picadas",
      "2 colheres de sopa de aveia em flocos",
      "1 colher de café de canela em pó",
      "1 xícara e meia de água ou leite vegetal morno",
      "1 colher de chá de mel"
    ],
    modoPreparo: [
      "Cozinhe a aveia e as nozes picadas na água ou leite vegetal por 5 minutos até engrossar levemente.",
      "Sirva em uma tigelinha, polvilhe a canela e adicione o mel."
    ],
    comoConsumir: "Perfeito para o café da manhã.",
    cuidados: "Pique bem as nozes para ficarem fáceis de mastigar.",
    curiosidade: "A teoria das assinaturas na medicina ancestral diz que a forma do alimento revela sua vocação na natureza.",
    dicaMestraLin: "Ameia morna no café da manhã dá uma sensação de abraço no peito que dura o dia todo."
  },
  {
    id: 26,
    title: "Infusão de Sálvia com Limão e Mel",
    chapterId: 3,
    chapterTitle: "Receitas Tradicionais para Memória e Concentração",
    introducao: "'Quem tem sálvia no jardim não envelhece', dizia o antigo ditado de sabedoria.",
    ingredientes: [
      "4 folhas de sálvia fresca",
      "Suco de 1/2 limão",
      "1 colher de chá de mel",
      "1 xícara de água"
    ],
    modoPreparo: [
      "Ferva a água, desligue e adicione as folhas de sálvia.",
      "Abafe por 5 minutos, coe, acrescente o limão e o mel."
    ],
    comoConsumir: "Tome 1 xícara pela manhã.",
    cuidados: "A sálvia tem sabor marcante, não coloque folhas demais.",
    curiosidade: "Sálvia vem do latim 'Salvare', que significa curar ou salvar.",
    dicaMestraLin: "A sálvia limpa os pensamentos emaranhados e traz clareza de ideias."
  },
  {
    id: 27,
    title: "Chá de Ginseng Suave com Goji Berry",
    chapterId: 3,
    chapterTitle: "Receitas Tradicionais para Memória e Concentração",
    introducao: "O Ginseng ('Ren Shen') é o rei das raízes orientais, usado com moderação para vitalidade do raciocínio.",
    ingredientes: [
      "1 fatia finíssima de raiz de ginseng seco",
      "1 colher de chá de goji berries",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Cozinhe o ginseng e as goji berries na água em fogo baixo por 12 minutos.",
      "Sirva morno em xícara pequena."
    ],
    comoConsumir: "Tome 1 xícara pequena pela manhã.",
    cuidados: "Evite o uso se você estiver com febre ou pressão muito descontrolada.",
    curiosidade: "A raiz de ginseng lembra a figura humana e é venerada como tônico da vida.",
    dicaMestraLin: "Use fatias bem fininhas para um efeito equilibrado e suave."
  },
  {
    id: 28,
    title: "Bebida de Castanhas com Leite de Gergelim Preto",
    chapterId: 3,
    chapterTitle: "Receitas Tradicionais para Memória e Concentração",
    introducao: "Um 'leite' vegetal ancestral preparado na hora, incrivelmente saboroso e reconfortante.",
    ingredientes: [
      "2 colheres de sopa de gergelim preto",
      "2 castanhas-do-pará ou nozes",
      "1 xícara e meia de água morna",
      "1 pitada de canela"
    ],
    modoPreparo: [
      "Bata no liquidificador o gergelim preto, as castanhas e a água morna por 2 minutos.",
      "Coe em pano limpo se desejar um leite bem fininho.",
      "Sirva morno com a pitada de canela."
    ],
    comoConsumir: "Beba no lanche da tarde.",
    cuidados: "Consuma logo após o preparo para manter o frescor.",
    curiosidade: "O gergelim preto nutre a essência profunda do corpo conforme ficamos mais velhos.",
    dicaMestraLin: "Fica um tom cinza lindo e um sabor aveludado único."
  },
  {
    id: 29,
    title: "Chá de Hortelã com Alecrim e Limão",
    chapterId: 3,
    chapterTitle: "Receitas Tradicionais para Memória e Concentração",
    introducao: "A combinação perfeita entre o frescor da hortelã e a força despertadora do alecrim.",
    ingredientes: [
      "4 folhas de hortelã",
      "1 ramo pequeno de alecrim",
      "Rodelas de 1/2 limão",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a água, desligue e junte a hortelã, o alecrim e o limão.",
      "Abafe por 5 minutos e coe."
    ],
    comoConsumir: "Tome quando precisar ler ou estudar no meio da tarde.",
    cuidados: "Beba morno para um melhor aproveitamento.",
    curiosidade: "O aroma de alecrim e hortelã juntas é um dos mais revigorantes da natureza.",
    dicaMestraLin: "Abra a janela e tome olhando para as plantas do jardim."
  },
  {
    id: 30,
    title: "Infusão Despertar de Casca de Laranja e Chá Verde",
    chapterId: 3,
    chapterTitle: "Receitas Tradicionais para Memória e Concentração",
    introducao: "A união de cítricos aromáticos com as folhas de chá verde para começar o dia com o pé direito.",
    ingredientes: [
      "1 colher de chá de chá verde",
      "1 tirinha de casca de laranja fresca",
      "1 xícara e meia de água morna (sem ferver)"
    ],
    modoPreparo: [
      "Coloque o chá verde e a casca de laranja na xícara e despeje a água morna.",
      "Abafe por 3 minutos e coe."
    ],
    comoConsumir: "Tome logo após o despertar.",
    cuidados: "Não deixe em infusão por mais de 3 minutos.",
    curiosidade: "Iniciar o dia com cítricos e chá limpa a névoa do sono com suavidade.",
    dicaMestraLin: "Sorria enquanto prepara o seu chá da manhã!"
  },

  // CAPÍTULO 4: Sono, Ansiedade e Relaxamento (31-40)
  {
    id: 31,
    title: "Infusão Noturna de Camomila, Mulungu e Maracujá",
    chapterId: 4,
    chapterTitle: "Receitas Tradicionais para Sono, Ansiedade e Relaxamento",
    introducao: "A receita do sono profundo da vovó: flores suaves e cascas serenas para acalmar os pensamentos agitados.",
    ingredientes: [
      "1 colher de sopa de flores de camomila",
      "1 colher de chá de casca de mulungu",
      "3 folhas secas de maracujá (passiflora)",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a água com a casca de mulungu por 5 minutos.",
      "Desligue o fogo, adicione a camomila e as folhas de maracujá e abafe por 8 minutos.",
      "Coe e sirva em sua xícara favorita."
    ],
    comoConsumir: "Tome 1 xícara morna cerca de 40 minutos antes de se deitar.",
    cuidados: "Desligue a televisão e as luzes fortes enquanto toma o chá.",
    curiosidade: "A camomila e o mulungu são usados há séculos para desatar os nós de preocupação do peito.",
    dicaMestraLin: "Respire três vezes bem devagar após dar o primeiro gole."
  },
  {
    id: 32,
    title: "Chá de Flores de Crisântemo com Tâmara Chinesa",
    chapterId: 4,
    chapterTitle: "Receitas Tradicionais para Sono, Ansiedade e Relaxamento",
    introducao: "Na China, esta é a bebida 'dos olhos tranquilos' tomada ao pôr do sol para tirar o calor da cabeça.",
    ingredientes: [
      "5 flores secas de crisântemo culinário",
      "2 jujubas (tâmaras chinesas) cortadas ao meio",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Cozinhe as jujubas na água por 8 minutos.",
      "Desligue, junte as flores de crisântemo e abafe por 5 minutos.",
      "Coe suavemente."
    ],
    comoConsumir: "Tome morno no final da tarde.",
    cuidados: "Ideal para quem passa muitas horas lendo ou olhando telas.",
    curiosidade: "O crisântemo esfria suavemente o calor excessivo do fígado que causa agitação noturna.",
    dicaMestraLin: "A doçura natural da jujuba dispensa a necessidade de açúcar."
  },
  {
    id: 33,
    title: "Bebida Morna de Lavanda com Camomila",
    chapterId: 4,
    chapterTitle: "Receitas Tradicionais para Sono, Ansiedade e Relaxamento",
    introducao: "O perfume celestial da lavanda combinado com a mansidão da camomila é uma verdadeira canção de ninar.",
    ingredientes: [
      "1 colher de café de flores secas de lavanda culinária",
      "1 colher de sopa de camomila",
      "1 xícara e meia de água"
    ],
    modoPreparo: [
      "Ferva a água, desligue e adicione a lavanda e a camomila.",
      "Abafe por 5 minutos com tampa.",
      "Coe com cuidado."
    ],
    comoConsumir: "Tome bem morno antes de ir para a cama.",
    cuidados: "Use pouquíssima lavanda, pois ela é extremamente perfumada e concentrada.",
    curiosidade: "O aroma da lavanda reduz naturalmente os batimentos cardíacos agitados.",
    dicaMestraLin: "Passe um pingo do chá no pulso para sentir o cheiro gostoso no travesseiro."
  },
  {
    id: 34,
    title: "Caldo Confortante de Aveia com Canela e Mel",
    chapterId: 4,
    chapterTitle: "Receitas Tradicionais para Sono, Ansiedade e Relaxamento",
    introducao: "Para quando a ansiedade dá aquela sensação de 'vazio na barriga' antes de dormir.",
    ingredientes: [
      "2 colheres de sopa de aveia",
      "1 xícara e meia de água filtrada",
      "1 pitada de canela",
      "1 colher de chá de mel"
    ],
    modoPreparo: [
      "Cozinhe a aveia na água até virar um mingau bem ralo e sedoso.",
      "Coloque na xícara, adoce com mel e polvilhe a canela."
    ],
    comoConsumir: "Coma morno com colher cerca de 1 hora antes de dormir.",
    cuidados: "Faça bem levinho para não pesar no estômago.",
    curiosidade: "A aveia contém nutrientes que ajudam o corpo a produzir melatonina natural.",
    dicaMestraLin: "É o abraço mais quente que você pode dar ao seu estômago à noite."
  },
  {
    id: 35,
    title: "Infusão de Erva-Cidreira com Folhas de Maracujá",
    chapterId: 4,
    chapterTitle: "Receitas Tradicionais para Sono, Ansiedade e Relaxamento",
    introducao: "O clássico brasileiro que se encaixa perfeitamente na filosofia oriental de acalmar o coração.",
    ingredientes: [
      "1 colher de sopa de erva-cidreira bem picadinha",
      "1 colher de sopa de folhas de maracujá",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a água, desligue e adicione as ervas.",
      "Deixe abafado por 7 minutos e coe."
    ],
    comoConsumir: "Tome 1 xícara à noite.",
    cuidados: "Evite tomar se for dirigir ou operar máquinas em seguida.",
    curiosidade: "O maracujá é chamado de 'Passiflora', a flor da paixão serena.",
    dicaMestraLin: "Adicione duas gotinhas de limão para dar um toque especial."
  },
  {
    id: 36,
    title: "Chá Tranquilo de Jasmin com Goji Berry",
    chapterId: 4,
    chapterTitle: "Receitas Tradicionais para Sono, Ansiedade e Relaxamento",
    introducao: "Flores de jasmin perfumadas que parecem estrelinhas brancas, trazendo paz à alma.",
    ingredientes: [
      "1 colher de chá de chá verde com jasmin",
      "1 colher de chá de goji berries",
      "1 xícara e meia de água morna"
    ],
    modoPreparo: [
      "Coloque os ingredientes na água morna por 4 minutos abafado.",
      "Coe e aprecie o perfume."
    ],
    comoConsumir: "Tome ao entardecer.",
    cuidados: "Prefira versões descafeinadas se for tomar muito tarde.",
    curiosidade: "Na Ásia, o aroma do jasmin é associado à elegância e à serenidade feminina.",
    dicaMestraLin: "Respire o aroma suave enquanto serve."
  },
  {
    id: 37,
    title: "Leite Morno Mágico com Canela, Noz-Moscada e Mel",
    chapterId: 4,
    chapterTitle: "Receitas Tradicionais para Sono, Ansiedade e Relaxamento",
    introducao: "O remédio mais antigo do mundo para quem acorda no meio da noite com pensamentos longe.",
    ingredientes: [
      "1 xícara de leite vegetal morno (ou leite de amêndoas/aveia)",
      "1 pitada pequenininha de noz-moscada ralada na hora",
      "1 pitada de canela",
      "1 colher de chá de mel"
    ],
    modoPreparo: [
      "Aqueça o leite vegetal sem deixar ferver.",
      "Misture a noz-moscada, a canela e o mel mexendo carinhosamente."
    ],
    comoConsumir: "Beba morno na beira da cama.",
    cuidados: "Use apenas uma raspadinha pequenininha de noz-moscada.",
    curiosidade: "A noz-moscada em dose minúscula traz um relaxamento muscular incomparável.",
    dicaMestraLin: "Coloque meias quentinhas e deite-se logo em seguida."
  },
  {
    id: 38,
    title: "Infusão de Capim-Santo com Camomila",
    chapterId: 4,
    chapterTitle: "Receitas Tradicionais para Sono, Ansiedade e Relaxamento",
    introducao: "Capim-santo fresco cortado da horta tem o cheiro da infância na casa dos avós.",
    ingredientes: [
      "2 folhas de capim-santo cortadas em pedacinhos",
      "1 colher de sopa de flores de camomila",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a água com o capim-santo por 3 minutos.",
      "Desligue, acrescente a camomila e abafe por 5 minutos.",
      "Coe bem."
    ],
    comoConsumir: "Tome 1 xícara morna à noite.",
    cuidados: "Cuidado ao manusear as folhas de capim-santo para não cortar os dedos nas bordas.",
    curiosidade: "O capim-santo acalma as dores de cabeça causadas por preocupação acumulada.",
    dicaMestraLin: "Abafe bem com pires para o aroma citral não escapar."
  },
  {
    id: 39,
    title: "Chá de Sementes de Ziziphus (Jujuba) e Camomila",
    chapterId: 4,
    chapterTitle: "Receitas Tradicionais para Sono, Ansiedade e Relaxamento",
    introducao: "A semente da jujuba ('Suan Zao Ren') é o principal ingrediente da farmacopeia chinesa para acalmar o espírito.",
    ingredientes: [
      "1 colher de chá de sementes de jujuba esmagadas",
      "1 colher de sopa de camomila",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva as sementes de jujuba na água por 10 minutos.",
      "Desligue, junte a camomila, abafe por 5 minutos e coe."
    ],
    comoConsumir: "Tome morno antes de dormir.",
    cuidados: "Amasse as sementes para liberarem seus óleos serenos.",
    curiosidade: "Esta fórmula tem mais de 1.800 anos de história documentada na Ásia.",
    dicaMestraLin: "Acalma até mesmo os corações mais agitados."
  },
  {
    id: 40,
    title: "Elixir do Sono com Maçã, Canela e Erva-Doce",
    chapterId: 4,
    chapterTitle: "Receitas Tradicionais para Sono, Ansiedade e Relaxamento",
    introducao: "Um chá frutado e doce que aquece o corpo e faz os olhos pesarem gostoso.",
    ingredientes: [
      "1/2 maçã picada com casca",
      "1 pau de canela",
      "1 colher de chá de erva-doce",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a maçã e a canela por 8 minutos.",
      "Desligue, junte a erva-doce e abafe por 5 minutos.",
      "Coe e sirva."
    ],
    comoConsumir: "Aprecie morno na poltrona da sala.",
    cuidados: "Pode comer os pedaços de maçã bem cozidos com uma colherzinha.",
    curiosidade: "A maçã cozida exala um aroma confortante que remete à infância.",
    dicaMestraLin: "Boa noite e bons sonhos, meu querido leitor!"
  },

  // CAPÍTULO 5: Pressão Alta e Circulação (41-50)
  {
    id: 41,
    title: "Infusão de Flores de Crisântemo com Goji Berry",
    chapterId: 5,
    chapterTitle: "Receitas Tradicionais para Pressão Alta e Circulação",
    introducao: "A dupla mais famosa da tradição chinesa para acalmar a sensação de pressão na cabeça e calor no rosto.",
    ingredientes: [
      "5 flores de crisântemo culinário",
      "1 colher de sobremesa de goji berries",
      "2 xícaras de água morna"
    ],
    modoPreparo: [
      "Coloque as flores e as goji berries em um bule.",
      "Despeje a água morna e deixe em infusão abafada por 7 minutos.",
      "Sirva sem necessidade de adoçar."
    ],
    comoConsumir: "Tome 1 xícara à tarde.",
    cuidados: "Beba morno ou em temperatura ambiente.",
    curiosidade: "O crisântemo ajuda a manter o fluxo de energia suave e desobstruído.",
    dicaMestraLin: "As flores ficam lindas flutuando no bule de vidro transparente."
  },
  {
    id: 42,
    title: "Chá de Erva-Cidreira com Limão e Casca de Maçã",
    chapterId: 5,
    chapterTitle: "Receitas Tradicionais para Pressão Alta e Circulação",
    introducao: "Uma infusão leve que relaxa as artérias e alivia o estresse diário com muita suavidade.",
    ingredientes: [
      "1 colher de sopa de erva-cidreira",
      "Casca de 1/2 maçã",
      "Gotas de limão fresco",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a água com a casca de maçã por 4 minutos.",
      "Desligue, acrescente a erva-cidreira e abafe por 5 minutos.",
      "Coe, adicione as gotas de limão e sirva."
    ],
    comoConsumir: "Tome ao longo do dia nos momentos de maior correria.",
    cuidados: "Mantenha-se bem hidratado bebendo água também ao longo do dia.",
    curiosidade: "A casca da maçã é rica em elementos que protegem os vasos sanguíneos.",
    dicaMestraLin: "Sente-se por cinco minutos em silêncio enquanto toma seu chá."
  },
  {
    id: 43,
    title: "Bebida de Sementes de Melancia Secas e Acentuadas",
    chapterId: 5,
    chapterTitle: "Receitas Tradicionais para Pressão Alta e Circulação",
    introducao: "Não jogue fora as sementes de melancia! Na medicina tradicional, elas são tesouros para a circulação.",
    ingredientes: [
      "1 colher de sopa de sementes de melancia secas e levemente trituradas",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva as sementes trituradas na água por 12 minutos em fogo baixo.",
      "Coe bem em peneira fina e sirva morno."
    ],
    comoConsumir: "Tome 1 xícara pela manhã.",
    cuidados: "Triture as sementes no pilão antes de ferver.",
    curiosidade: "As sementes de melancia possuem óleos tradicionais que auxiliam os rins no controle dos líquidos.",
    dicaMestraLin: "Guarde e seque as sementes no sol quando comprar melancia em casa."
  },
  {
    id: 44,
    title: "Caldo Leve de Aipo com Cenoura e Gengibre",
    chapterId: 5,
    chapterTitle: "Receitas Tradicionais para Pressão Alta e Circulação",
    introducao: "O aipo (salsão) é considerado na Ásia um dos maiores amigos da circulação fluida.",
    ingredientes: [
      "2 talos de aipo (salsão) picadinhos com as folhas",
      "1/2 cenoura fatiada",
      "1 rodela fina de gengibre",
      "3 xícaras de água",
      "Pitada leve de sal"
    ],
    modoPreparo: [
      "Cozinhe o aipo, a cenoura e o gengibre por 15 minutos até ficarem macios.",
      "Tempere com a pitada de sal e sirva o caldo quentinho com os vegetais."
    ],
    comoConsumir: "Tome antes do jantar como uma entrada leve.",
    cuidados: "Lave bem as folhas de aipo.",
    curiosidade: "O aipo purifica e refresca o sangue acumulado no centro do corpo.",
    dicaMestraLin: "O aroma do aipo cozido é fresco e traz leveza imediata."
  },
  {
    id: 45,
    title: "Infusão Suave de Folhas de Amora",
    chapterId: 5,
    chapterTitle: "Receitas Tradicionais para Pressão Alta e Circulação",
    introducao: "As folhas de amoreira ('Sang Ye') são veneradas pelos criadores de bicho-da-seda na China por suas propriedades protetoras.",
    ingredientes: [
      "1 colher de sopa de folhas secas de amora",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a água, desligue e adicione as folhas de amora.",
      "Abafe por 8 minutos e coe."
    ],
    comoConsumir: "Tome 1 xícara 2 vezes ao dia.",
    cuidados: "Escolha folhas colhidas longe de poluição ou agrotóxicos.",
    curiosidade: "As folhas de amora harmonizam os picos de calor e equilibram os fluidos.",
    dicaMestraLin: "Um chá suave e de sabor muito agradável."
  },
  {
    id: 46,
    title: "Chá de Cavalinha com Erva-Doce",
    chapterId: 5,
    chapterTitle: "Receitas Tradicionais para Pressão Alta e Circulação",
    introducao: "Para ajudar o corpo a eliminar o excesso de líquidos que fazem as pernas e tornozelos incharem ao final do dia.",
    ingredientes: [
      "1 colher de sopa de cavalinha",
      "1 colher de chá de sementes de erva-doce",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a água com a cavalinha e a erva-doce por 5 minutos.",
      "Abafe por 5 minutos e coe."
    ],
    comoConsumir: "Tome até as 17h para não atrapalhar o sono com idas ao banheiro à noite.",
    cuidados: "Beba bastante água pura durante o dia.",
    curiosidade: "A cavalinha é uma planta pré-histórica rica em minerais naturais.",
    dicaMestraLin: "Coloque as pernas para cima por 15 minutos após tomar o seu chá."
  },
  {
    id: 47,
    title: "Bebida Morna de Alho Suavizado com Limão",
    chapterId: 5,
    chapterTitle: "Receitas Tradicionais para Pressão Alta e Circulação",
    introducao: "O alho cozido perfeitamente perde o ardor forte e mantém toda a sua sabedoria protetora dos vasos.",
    ingredientes: [
      "1 dente de alho descascado inteiro",
      "Suco de 1/2 limão",
      "1 xícara e meia de água"
    ],
    modoPreparo: [
      "Cozinhe o dente de alho inteiro na água por 10 minutos em fogo bem baixo.",
      "Retire o alho, adicione o suco de limão à água morna e beba."
    ],
    comoConsumir: "Tome morno em jejum ou à tarde.",
    cuidados: "Cozinhar o alho inteiro tira o hálito forte e preserva a suavidade.",
    curiosidade: "O alho mantém o sangue fluindo livremente pelas artérias.",
    dicaMestraLin: "Você nem vai sentir o gosto forte do alho, fica um caldo leve de limão."
  },
  {
    id: 48,
    title: "Infusão de Hibisco Suave com Maçã",
    chapterId: 5,
    chapterTitle: "Receitas Tradicionais para Pressão Alta e Circulação",
    introducao: "O vermelho vibrante do hibisco traz alegria ao coração e refresca o organismo.",
    ingredientes: [
      "1 colher de chá de flores de hibisco seco",
      "1/2 maçã picadinha",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a água com a maçã por 5 minutos.",
      "Desligue, coloque o hibisco (pouca quantidade) e abafe por 4 minutos.",
      "Coe e sirva."
    ],
    comoConsumir: "Tome morno ou em temperatura ambiente à tarde.",
    cuidados: "Não exagere no hibisco para o chá não ficar ácido demais.",
    curiosidade: "A cor vermelha do hibisco é associada ao elemento Fogo e à energia do coração.",
    dicaMestraLin: "A maçã corta a acidez do hibisco deixando o sabor harmonioso."
  },
  {
    id: 49,
    title: "Chá de Sementes de Gergelim Preto Moído",
    chapterId: 5,
    chapterTitle: "Receitas Tradicionais para Pressão Alta e Circulação",
    introducao: "Uma infusão cremosa que nutre os canais profundos e flexibiliza as artérias.",
    ingredientes: [
      "1 colher de sopa de gergelim preto moído na hora",
      "1 xícara e meia de água morna",
      "1 colher de chá de mel (opcional)"
    ],
    modoPreparo: [
      "Misture o gergelim moído na água morna e leve ao fogo apenas para aquecer por 2 minutos.",
      "Sirva sem coar."
    ],
    comoConsumir: "Tome pela manhã.",
    cuidados: "Moa as sementes no moedor de café ou pilão antes de preparar.",
    curiosidade: "O gergelim preto é riquíssimo em minerais que acalmam os vasos sanguíneos.",
    dicaMestraLin: "Fica com um aroma tostado delicioso!"
  },
  {
    id: 50,
    title: "Elixir Circulatório de Alecrim com Limão",
    chapterId: 5,
    chapterTitle: "Receitas Tradicionais para Pressão Alta e Circulação",
    introducao: "O alecrim desperta a microcirculação das extremidades, aquecendo mãos e pés frios.",
    ingredientes: [
      "1 ramo de alecrim fresco",
      "Rodelas de 1/2 limão",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a água, desligue o fogo e adicione o alecrim e o limão.",
      "Abafe por 5 minutos e coe."
    ],
    comoConsumir: "Tome 1 xícara pela manhã ou à tarde.",
    cuidados: "Ótimo para dias frios em que os pés demoram a esquentar.",
    curiosidade: "O alecrim movimenta os fluidos parados do corpo.",
    dicaMestraLin: "Aproveite para massagear os pés com um creme morno após tomar o chá."
  },

  // CAPÍTULO 6: Dores nas Articulações (51-60)
  {
    id: 51,
    title: "Infusão Aquecedora de Cúrcuma, Gengibre e Pimenta Preta",
    chapterId: 6,
    chapterTitle: "Receitas Tradicionais para Dores nas Articulações",
    introducao: "A famosa 'bebida dourada' da sabedoria ancestral para dissolver a sensação de rigidez e ferrugem nas juntas.",
    ingredientes: [
      "1/2 colher de chá de cúrcuma (açafrão-da-terra) em pó",
      "2 rodelas de gengibre fresco",
      "1 pitadinha pequenininha de pimenta-do-reino moída na hora",
      "1 xícara e meia de água ou leite vegetal"
    ],
    modoPreparo: [
      "Ferva a água (ou leite vegetal) com o gengibre e a cúrcuma por 6 minutos.",
      "Adicione a pitada de pimenta-do-reino nos últimos segundos.",
      "Coe e sirva bem morno."
    ],
    comoConsumir: "Tome 1 xícara morna pela manhã ou após o almoço.",
    cuidados: "A pimenta-do-reino é fundamental para que a cúrcuma seja absorvida pelo corpo.",
    curiosidade: "A cúrcuma é usada na Índia e na China há milênios para tirar o acúmulo de 'umidade fria' das articulações.",
    dicaMestraLin: "Adicione meia colherzinha de óleo de coco para ficar ainda mais aveludado."
  },
  {
    id: 52,
    title: "Chá de Canela em Pau com Casca de Maçã",
    chapterId: 6,
    chapterTitle: "Receitas Tradicionais para Dores nas Articulações",
    introducao: "Quando as juntas doem no inverno ou em dias chuvosos, o calor da canela traz um alívio abençoado.",
    ingredientes: [
      "1 pau de canela grande",
      "Casca de 1 maçã vermelha",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a canela e a casca de maçã na água por 10 minutos em fogo brando.",
      "Deixe abafado por 3 minutos e coe."
    ],
    comoConsumir: "Tome 1 xícara morna nos dias em que o tempo mudar para frio.",
    cuidados: "Aqueça bem o corpo vestindo roupas confortáveis.",
    curiosidade: "O pau de canela ('Rou Gui') é considerado o 'fogo das articulações' na farmácia oriental.",
    dicaMestraLin: "Beba enquanto segura a xícara com as duas mãos para aquecer os dedos rígidos."
  },
  {
    id: 53,
    title: "Compressa e Bebida de Alecrim com Gengibre",
    chapterId: 6,
    chapterTitle: "Receitas Tradicionais para Dores nas Articulações",
    introducao: "Uma receita dupla: você bebe uma xícara morna e usa o caldo restante para fazer uma compressa carinhosa nos joelhos.",
    ingredientes: [
      "2 ramos grandes de alecrim fresco",
      "4 rodelas de gengibre",
      "3 xícaras de água"
    ],
    modoPreparo: [
      "Ferva o alecrim e o gengibre na água por 10 minutos.",
      "Coe 1 xícara para beber.",
      "Com o restante do caldo morno, molhe uma toalha limpa, torça suavemente e aplique sobre a articulação dolorida por 15 minutos."
    ],
    comoConsumir: "Tome a xícara enquanto faz a compressa no joelho ou ombro.",
    cuidados: "Teste a temperatura da toalha no pulso antes de colocar na pele para não queimar.",
    curiosidade: "O calor externo combinado com a infusão interna acelera o alívio das dores.",
    dicaMestraLin: "Faça esse carinho nas pernas ao final de um dia de caminhada."
  },
  {
    id: 54,
    title: "Caldo Nutritivo de Gergelim Preto com Jujuba",
    chapterId: 6,
    chapterTitle: "Receitas Tradicionais para Dores nas Articulações",
    introducao: "Na visão oriental, as articulações dependem da nutrição dos rins e dos ossos, fortalecidos pelo gergelim preto.",
    ingredientes: [
      "2 colheres de sopa de sementes de gergelim preto",
      "3 jujubas (tâmaras chinesas)",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Cozinhe as jujubas e o gergelim preto em fogo baixo por 15 minutos.",
      "Amasse as jujubas com garfo e sirva o caldo levemente denso."
    ],
    comoConsumir: "Consuma como um lanche nutritivo à tarde.",
    cuidados: "Tome morno.",
    curiosidade: "O gergelim preto lubrifica as 'engrenagens' do corpo.",
    dicaMestraLin: "Um hábito diário que traz muita firmeza para o andar."
  },
  {
    id: 55,
    title: "Infusão de Casca de Salgueiro e Camomila",
    chapterId: 6,
    chapterTitle: "Receitas Tradicionais para Dores nas Articulações",
    introducao: "A casca do salgueiro branco é a fonte natural e antiga de onde a ciência moderna inspirou os analgésicos suaves.",
    ingredientes: [
      "1 colher de chá de casca de salgueiro branco",
      "1 colher de sopa de camomila",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a casca de salgueiro na água por 8 minutos.",
      "Desligue, adicione a camomila, abafe por 5 minutos e coe."
    ],
    comoConsumir: "Tome 1 xícara quando sentir incômodo nas juntas.",
    cuidados: "Pessoas alérgicas a aspirina devem evitar o salgueiro branco.",
    curiosidade: "Os antigos chineses e gregos usavam raspa de salgueiro para aliviar dores do corpo.",
    dicaMestraLin: "A camomila suaviza o sabor da casca."
  },
  {
    id: 56,
    title: "Chá de Dente-de-Leão com Gengibre",
    chapterId: 6,
    chapterTitle: "Receitas Tradicionais para Dores nas Articulações",
    introducao: "Para eliminar o inchaço que se acumula ao redor dos tornozelos e juntas doloridas.",
    ingredientes: [
      "1 colher de sopa de raiz ou folhas de dente-de-leão",
      "2 rodelas de gengibre",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a água com o dente-de-leão e o gengibre por 6 minutos.",
      "Abafe por 5 minutos e coe."
    ],
    comoConsumir: "Tome 1 xícara pela manhã e outra à tarde.",
    cuidados: "Beba água ao longo do dia.",
    curiosidade: "O dente-de-leão limpa as impurezas acumuladas nas articulações.",
    dicaMestraLin: "Uma erva silvestre de grande valor para a saúde."
  },
  {
    id: 57,
    title: "Bebida Morna de Garra-do-Diabo Suave com Mel",
    chapterId: 6,
    chapterTitle: "Receitas Tradicionais para Dores nas Articulações",
    introducao: "Apesar do nome curioso, esta raiz africana e tradicional traz conforto para a coluna e quadris.",
    ingredientes: [
      "1/2 colher de chá de raiz de garra-do-diabo",
      "1 colher de chá de mel",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a raiz na água por 10 minutos em fogo baixo.",
      "Coe, deixe amornar e adicione o mel."
    ],
    comoConsumir: "Tome 1 xícara ao dia.",
    cuidados: "Use em doses pequenas e respeite a quantidade recomendada.",
    curiosidade: "A raiz tem ganchos em formato de garras na natureza.",
    dicaMestraLin: "Adoce com mel para suavizar o sabor amarguinho."
  },
  {
    id: 58,
    title: "Infusão de Erva-Doce com Canela e Cravo",
    chapterId: 6,
    chapterTitle: "Receitas Tradicionais para Dores nas Articulações",
    introducao: "Uma infusão ultra-aromática que traz o elemento 'Fogo' para expulsar o frio que trava a lombar.",
    ingredientes: [
      "1 colher de chá de erva-doce",
      "1 pau de canela",
      "2 cravos-da-índia",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a canela e o cravo na água por 6 minutos.",
      "Desligue, adicione a erva-doce, abafe por 4 minutos e coe."
    ],
    comoConsumir: "Tome morno antes de dormir.",
    cuidados: "Perfeito para dias em que a coluna acorda travada.",
    curiosidade: "O cravo tem propriedades anestésicas naturais conhecidas há milênios.",
    dicaMestraLin: "Sinta o calor gostoso se espalhar pelas costas."
  },
  {
    id: 59,
    title: "Caldo de Ossos Leve com Gengibre e Cebolinha",
    chapterId: 6,
    chapterTitle: "Receitas Tradicionais para Dores nas Articulações",
    introducao: "O tutano e o colágeno natural cozidos lentamente são a melhor nutrição para a cartilagem na velhice.",
    ingredientes: [
      "Ossos limpos de galinha ou bovino de boa procedência",
      "3 rodelas de gengibre",
      "2 talos de cebolinha picada",
      "1 colher de sopa de vinagre de maçã (ajuda a soltar os minerais dos ossos)",
      "1 litro de água"
    ],
    modoPreparo: [
      "Cozinhe os ossos na água com vinagre e gengibre em fogo bem baixinho por 1 a 2 horas.",
      "Coe o caldo transparente, tempere com sal leve e cebolinha."
    ],
    comoConsumir: "Tome 1 xícara pequena de caldo morno antes do almoço.",
    cuidados: "Cozinhe em fogo mínimo bem tampado.",
    curiosidade: "O caldo de ossos cozido devagar é a base da nutrição profunda na China.",
    dicaMestraLin: "Pode congelar em potinhos pequenos para usar na semana."
  },
  {
    id: 60,
    title: "Chá de Sementes de Mostarda com Gengibre Morno",
    chapterId: 6,
    chapterTitle: "Receitas Tradicionais para Dores nas Articulações",
    introducao: "A semente de mostarda é picante e ativa a circulação nos locais onde a dor parece estagnada.",
    ingredientes: [
      "1/2 colher de chá de sementes de mostarda amarela",
      "2 rodelas de gengibre",
      "1 xícara e meia de água"
    ],
    modoPreparo: [
      "Ferva as sementes de mostarda e o gengibre na água por 5 minutos.",
      "Coe imediatamente e sirva."
    ],
    comoConsumir: "Tome 1 xícara pequena.",
    cuidados: "Beba em pequenos goles.",
    curiosidade: "A mostarda dissolve os 'flemas' e a estagnação do corpo.",
    dicaMestraLin: "Aquece de dentro para fora instantaneamente!"
  },

  // CAPÍTULO 7: Pele, Cabelo e Unhas (61-70)
  {
    id: 61,
    title: "Bebida Dourada de Goji Berry com Tâmara e Gergelim Preto",
    chapterId: 7,
    chapterTitle: "Receitas Tradicionais para Pele, Cabelo e Unhas",
    introducao: "A 'bebida da juventude eterna' da tradição oriental para nutrir a pele ressecada e trazer brilho aos cabelos brancos.",
    ingredientes: [
      "1 colher de sopa de goji berries",
      "2 jujubas (tâmaras chinesas)",
      "1 colher de sopa de gergelim preto moído",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Cozinhe as jujubas e as goji berries na água por 10 minutos.",
      "Misture o gergelim preto moído no final e sirva em tigela ou xícara morna."
    ],
    comoConsumir: "Consuma 3 vezes por semana no lanche da tarde.",
    cuidados: "Coma as frutinhas com colher no final.",
    curiosidade: "Na sabedoria oriental, o cabelo reflete a abundância do sangue e a saúde dos rins.",
    dicaMestraLin: "O gergelim preto ajuda a manter os fios fortes e nutridos desde a raiz."
  },
  {
    id: 62,
    title: "Infusão de Flores de Crisântemo com Rosa Silvestre",
    chapterId: 7,
    chapterTitle: "Receitas Tradicionais para Pele, Cabelo e Unhas",
    introducao: "Um chá de pétalas nobres que limpa as impurezas do rosto e traz um rosado natural às bochechas.",
    ingredientes: [
      "4 flores de crisântemo culinário",
      "1 colher de chá de pétalas de rosa secas (próprias para chá)",
      "2 xícaras de água morna"
    ],
    modoPreparo: [
      "Coloque as flores e pétalas na água morna.",
      "Abafe por 5 minutos e coe."
    ],
    comoConsumir: "Tome à tarde curtindo o perfume das flores.",
    cuidados: "Use apenas pétalas culinárias sem agrotóxicos ou perfumes artificiais.",
    curiosidade: "As rosas acalmam as emoções e suavizam as manchas da pele.",
    dicaMestraLin: "Parece um chá de rainhas e princesas de antigamente!"
  },
  {
    id: 63,
    title: "Chá Verde com Casca de Limão e Mel",
    chapterId: 7,
    chapterTitle: "Receitas Tradicionais para Pele, Cabelo e Unhas",
    introducao: "Os antioxidantes milenares do chá verde combinados com a vitamina e o frescor do limão.",
    ingredientes: [
      "1 colher de chá de chá verde",
      "1 tirinha de casca de limão",
      "1 colher de chá de mel",
      "1 xícara e meia de água morna"
    ],
    modoPreparo: [
      "Deixe o chá verde e a casca de limão na água morna por 3 minutos.",
      "Coe, adoce com o mel e beba."
    ],
    comoConsumir: "Tome 1 xícara pela manhã.",
    cuidados: "Não deixe infusionar por mais de 3 minutos para não ficar amargo.",
    curiosidade: "O chá verde purifica a pele de dentro para fora.",
    dicaMestraLin: "Use os saquinhos de chá verde frios sobre as pálpebras por 5 minutos para descansar os olhos!"
  },
  {
    id: 64,
    title: "Caldo Revitalizante de Sementes de Abóbora e Girassol",
    chapterId: 7,
    chapterTitle: "Receitas Tradicionais para Pele, Cabelo e Unhas",
    introducao: "As sementes são ricas em óleos valiosos que fortalecem unhas quebradiças e cabelos finos.",
    ingredientes: [
      "1 colher de sopa de sementes de abóbora sem casca",
      "1 colher de sopa de sementes de girassol",
      "1 xícara e meia de água ou leite de aveia morno",
      "1 pitada de canela"
    ],
    modoPreparo: [
      "Bata levemente as sementes no liquidificador com a água/leite morno.",
      "Aqueça na panela por 3 minutos e sirva polvilhado com canela."
    ],
    comoConsumir: "Tome como vitamina morna pela manhã.",
    cuidados: "Excelente para a fase pós-menopausa.",
    curiosidade: "Sementes contêm a força concentrada para gerar uma nova planta inteira.",
    dicaMestraLin: "Suas unhas vão ficar durinhas e bonitas com o passar das semanas."
  },
  {
    id: 65,
    title: "Infusão de Cavalinha com Camomila",
    chapterId: 7,
    chapterTitle: "Receitas Tradicionais para Pele, Cabelo e Unhas",
    introducao: "A cavalinha é a maior fonte vegetal de sílica da natureza, o mineral da firmeza da pele.",
    ingredientes: [
      "1 colher de sopa de cavalinha",
      "1 colher de sopa de camomila",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a cavalinha na água por 5 minutos.",
      "Desligue, junte a camomila, abafe por 5 minutos e coe."
    ],
    comoConsumir: "Tome 1 xícara ao dia.",
    cuidados: "Beba bastante água durante o dia.",
    curiosidade: "A sílica fortalece o colágeno natural das estruturas do corpo.",
    dicaMestraLin: "A camomila traz maciez ao sabor rústico da cavalinha."
  },
  {
    id: 66,
    title: "Bebida de Amêndoas com Canela e Mel",
    chapterId: 7,
    chapterTitle: "Receitas Tradicionais para Pele, Cabelo e Unhas",
    introducao: "As amêndoas são reverenciadas na China por hidratarem o pulmão, órgão responsável pela beleza da pele.",
    ingredientes: [
      "4 amêndoas sem casca deixadas de molho na água durante a noite",
      "1 xícara e meia de água morna",
      "1 colher de chá de mel",
      "1 pitada de canela"
    ],
    modoPreparo: [
      "Bata as amêndoas descascadas com a água morna no liquidificador até virar um leite esbranquiçado.",
      "Sirva morno adoçado com mel e canela."
    ],
    comoConsumir: "Tome no café da manhã.",
    cuidados: "Retire a pelecunha marrom da amêndoa após deixar de molho.",
    curiosidade: "O 'leite de amêndoas suave' era a bebida favorita das imperatrizes orientais.",
    dicaMestraLin: "Deixa a pele aveludada e hidratada por dentro."
  },
  {
    id: 67,
    title: "Chá de Bardana Suave com Maçã",
    chapterId: 7,
    chapterTitle: "Receitas Tradicionais para Pele, Cabelo e Unhas",
    introducao: "A raiz de bardana ('Niu Bang') é a grande purificadora do sangue, tirando cravos, espinhas e vermelhidão.",
    ingredientes: [
      "1 colher de chá de raiz de bardana picada",
      "1/2 maçã picada",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a bardana e a maçã na água por 10 minutos em fogo baixo.",
      "Coe e sirva morno."
    ],
    comoConsumir: "Tome 1 xícara ao dia por 2 semanas.",
    cuidados: "Tem sabor levemente terroso equilibrado pela maçã.",
    curiosidade: "A bardana é um vegetal alimentício muito usado na culinária japonesa e chinesa.",
    dicaMestraLin: "Limpa a pele deixando o rosto luminoso."
  },
  {
    id: 68,
    title: "Elixir do Brilho com Cenoura, Gengibre e Maçã Morna",
    chapterId: 7,
    chapterTitle: "Receitas Tradicionais para Pele, Cabelo e Unhas",
    introducao: "Um suco morno reconfortante cheio de cor e vitalidade.",
    ingredientes: [
      "1/2 cenoura ralada",
      "1 rodela de gengibre",
      "1 maçã",
      "1 xícara de água morna"
    ],
    modoPreparo: [
      "Bata tudo no liquidificador com a água morna.",
      "Coe em peneira grossa e beba em seguida."
    ],
    comoConsumir: "Tome pela manhã.",
    cuidados: "Beba morno para não esfriar o estômago.",
    curiosidade: "O betacaroteno da cenoura dá uma cor dourada saudável à pele.",
    dicaMestraLin: "Gostoso e super nutritivo!"
  },
  {
    id: 69,
    title: "Infusão de Folhas de Amora com Hibisco",
    chapterId: 7,
    chapterTitle: "Receitas Tradicionais para Pele, Cabelo e Unhas",
    introducao: "Equilíbrio hormonal feminino refletido em cabelos fortes e pele firme.",
    ingredientes: [
      "1 colher de sopa de folhas de amora",
      "1/2 colher de chá de hibisco",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a água, desligue e junte as folhas de amora e hibisco.",
      "Abafe por 6 minutos e coe."
    ],
    comoConsumir: "Tome à tarde.",
    cuidados: "Sabor agradável e levemente cítrico.",
    curiosidade: "A amora é a árvore consorte da tradição feminina oriental.",
    dicaMestraLin: "Tome uma xícara todos os dias no mesmo horário."
  },
  {
    id: 70,
    title: "Caldo da Beleza com Arroz Integral e Jujuba",
    chapterId: 7,
    chapterTitle: "Receitas Tradicionais para Pele, Cabelo e Unhas",
    introducao: "A união dos grãos integrais com a doçura das tâmaras para renovar os tecidos.",
    ingredientes: [
      "2 colheres de sopa de arroz integral",
      "2 jujubas (tâmaras chinesas)",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Cozinhe em fogo baixo por 30 minutos até o arroz soltar seu amido sedoso.",
      "Sirva em tigela pequena."
    ],
    comoConsumir: "Coma como lanche morno.",
    cuidados: "Cozinhe bem para ficar bem macio.",
    curiosidade: "O amido do arroz integral acalma o sistema digestivo e reflete na pele.",
    dicaMestraLin: "Simples, barato e profundamente eficaz."
  },

  // CAPÍTULO 8: Energia e Disposição (71-80)
  {
    id: 71,
    title: "Infusão Despertar de Gengibre, Canela e Limão",
    chapterId: 8,
    chapterTitle: "Receitas Tradicionais para Energia e Disposição",
    introducao: "Para aqueles dias em que a gente acorda sentindo o corpo pesado e sem vontade de sair da cama.",
    ingredientes: [
      "2 rodelas de gengibre",
      "1 pau de canela",
      "Suco de 1/2 limão",
      "1 colher de chá de mel",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva o gengibre e a canela na água por 7 minutos.",
      "Coe, adicione o suco de limão e o mel."
    ],
    comoConsumir: "Tome 1 xícara morna logo após o café da manhã.",
    cuidados: "Traz uma energia gostosa sem dar palpitação ou agitação.",
    curiosidade: "Gengibre e canela aquecem o 'fogo vital' do corpo.",
    dicaMestraLin: "Espreguice-se bem ao sol enquanto toma as primeiras colheradas."
  },
  {
    id: 72,
    title: "Chá Verde Tradicional com Fatias de Maçã",
    chapterId: 8,
    chapterTitle: "Receitas Tradicionais para Energia e Disposição",
    introducao: "Energia limpa e constante para manter o pique ao longo de todo o dia de trabalho.",
    ingredientes: [
      "1 colher de chá de folhas de chá verde",
      "3 fatias finas de maçã com casca",
      "2 xícaras de água morna"
    ],
    modoPreparo: [
      "Infusione o chá verde e as fatias de maçã em água morna por 3 minutos.",
      "Coe e sirva."
    ],
    comoConsumir: "Tome no meio da manhã.",
    cuidados: "Não tome em jejum se tiver sensibilidade gástrica.",
    curiosidade: "A maçã suaviza o sabor das folhas de chá verde.",
    dicaMestraLin: "Coma as fatias de maçã crocantes ao final."
  },
  {
    id: 73,
    title: "Bebida de Ginseng Suave com Goji Berry",
    chapterId: 8,
    chapterTitle: "Receitas Tradicionais para Energia e Disposição",
    introducao: "O elixir nobre dos imperadores para afastar o cansaço acumulado dos anos.",
    ingredientes: [
      "1 fatia fina de raiz de ginseng",
      "1 colher de sobremesa de goji berries",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva o ginseng e as goji berries em fogo brando por 10 minutos.",
      "Sirva em xícara pequena de cerâmica."
    ],
    comoConsumir: "Tome pela manhã 2 vezes na semana.",
    cuidados: "Não consumir à noite para não afugentar o sono.",
    curiosidade: "Ginseng reforça a vitalidade profunda sem esgotar as reservas do corpo.",
    dicaMestraLin: "Sinta a força do ginseng renovando sua disposição."
  },
  {
    id: 74,
    title: "Caldo Fortificante de Jujuba com Aveia e Mel",
    chapterId: 8,
    chapterTitle: "Receitas Tradicionais para Energia e Disposição",
    introducao: "Um mingau ralo e reconfortante para quem está se recuperando de um período de cansaço intenso.",
    ingredientes: [
      "3 jujubas picadas",
      "2 colheres de sopa de aveia em flocos",
      "2 xícaras de água",
      "1 colher de chá de mel",
      "Pitada de canela"
    ],
    modoPreparo: [
      "Cozinhe a jujuba e a aveia na água por 12 minutos até virar um caldo macio.",
      "Sirva com mel e canela."
    ],
    comoConsumir: "Excelente para o café da manhã.",
    cuidados: "Sirva bem quentinho.",
    curiosidade: "A jujuba é considerada o melhor alimento para nutrir o sangue enfraquecido.",
    dicaMestraLin: "Restaura as forças de maneira carinhosa."
  },
  {
    id: 75,
    title: "Infusão de Alecrim com Hortelã e Casca de Laranja",
    chapterId: 8,
    chapterTitle: "Receitas Tradicionais para Energia e Disposição",
    introducao: "Um verdadeiro vendaval de aromas frescos que espanta a preguiça das 15h.",
    ingredientes: [
      "1 ramo de alecrim",
      "4 folhas de hortelã",
      "1 tirinha de casca de laranja",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a água, desligue e adicione os ingredientes.",
      "Abafe por 5 minutos e coe."
    ],
    comoConsumir: "Tome à tarde quando der aquela vontade de cochilar na cadeira.",
    cuidados: "Respire o aroma que sai da xícara.",
    curiosidade: "A casca de laranja desperta os sentidos de forma imediata.",
    dicaMestraLin: "Levante-se, tome seu chá e dê uma caminhada leve pela casa."
  },
  {
    id: 76,
    title: "Chá de Guaraná Natural com Limão e Mel",
    chapterId: 8,
    chapterTitle: "Receitas Tradicionais para Energia e Disposição",
    introducao: "A semente sagrada da Amazônia preparada com a sabedoria do equilíbrio oriental.",
    ingredientes: [
      "1/2 colher de café de guaraná em pó puro",
      "Suco de 1/2 limão",
      "1 colher de chá de mel",
      "1 xícara de água morna"
    ],
    modoPreparo: [
      "Misture o pó de guaraná e o mel na xícara.",
      "Adicione a água morna e o suco de limão mexendo bem."
    ],
    comoConsumir: "Tome pela manhã ao acordar.",
    cuidados: "Use em doses bem pequenas (meia colher de café).",
    curiosidade: "O guaraná traz vivacidade sem a acidez do café convencional.",
    dicaMestraLin: "Perfeito para dias em que você tem muitos afazeres pela frente."
  },
  {
    id: 77,
    title: "Bebida de Sementes de Gergelim Preto com Castanhas",
    chapterId: 8,
    chapterTitle: "Receitas Tradicionais para Energia e Disposição",
    introducao: "Riquíssimo em minerais e energia concentrada para os músculos e articulações.",
    ingredientes: [
      "1 colher de sopa de gergelim preto torrado",
      "2 nozes ou castanhas picadas",
      "1 xícara e meia de água morna",
      "1 pitada de canela"
    ],
    modoPreparo: [
      "Bata tudo no liquidificador por 2 minutos.",
      "Aqueça levemente na panela sem ferver e sirva."
    ],
    comoConsumir: "Tome como lanche saudável.",
    cuidados: "Beba morno.",
    curiosidade: "Sementes escuras reconstroem a vitalidade do organismo.",
    dicaMestraLin: "Sabor de nozes tostadas inesquecível!"
  },
  {
    id: 78,
    title: "Infusão Vital de Mate Suave com Limão e Canela",
    chapterId: 8,
    chapterTitle: "Receitas Tradicionais para Energia e Disposição",
    introducao: "A erva-mate preparada em infusão leve e perfumada com canela.",
    ingredientes: [
      "1 colher de sobremesa de erva-mate tostada",
      "1 pau de canela",
      "Rodelas de limão",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a água com a canela por 4 minutos.",
      "Desligue, acrescente a erva-mate, abafe por 3 minutos e coe.",
      "Sirva com rodelas de limão."
    ],
    comoConsumir: "Tome pela manhã ou início da tarde.",
    cuidados: "Não faça a infusão forte demais.",
    curiosidade: "A erva-mate é rica em nutrientes e alegra o espírito.",
    dicaMestraLin: "Muito gostoso morno ou em temperatura ambiente."
  },
  {
    id: 79,
    title: "Caldo de Inhame com Gengibre e Cebolinha",
    chapterId: 8,
    chapterTitle: "Receitas Tradicionais para Energia e Disposição",
    introducao: "O inhame é o tubérculo da força na terra, purificando e nutrindo o organismo.",
    ingredientes: [
      "1 inhame médio descascado e picado",
      "1 rodela de gengibre",
      "1 talo de cebolinha",
      "2 xícaras de água",
      "Pitada de sal"
    ],
    modoPreparo: [
      "Cozinhe o inhame com a água e o gengibre até desmanchar.",
      "Amasse o inhame no caldo, tempere com sal e cebolinha."
    ],
    comoConsumir: "Consuma morno no jantar.",
    cuidados: "Descasque bem o inhame sob água corrente.",
    curiosidade: "O inhame limpa o sangue e dá resistência física.",
    dicaMestraLin: "Sopa aveludada que sustenta com leveza."
  },
  {
    id: 80,
    title: "Chá de Erva-Doce com Gengibre e Cravo",
    chapterId: 8,
    chapterTitle: "Receitas Tradicionais para Energia e Disposição",
    introducao: "Aquece o centro do corpo, ativa o metabolismo e traz um sorriso no rosto.",
    ingredientes: [
      "1 colher de chá de erva-doce",
      "2 rodelas de gengibre",
      "2 cravos-da-índia",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva o gengibre e o cravo na água por 5 minutos.",
      "Desligue, junte a erva-doce, abafe por 4 minutos e coe."
    ],
    comoConsumir: "Tome morno após as refeições.",
    cuidados: "Excelente aroma que perfuma a cozinha.",
    curiosidade: "O cravo ativa a digestão e desperta a disposição.",
    dicaMestraLin: "Um chá simples e abençoado."
  },

  // CAPÍTULO 9: Emagrecimento e Metabolismo (81-90)
  {
    id: 81,
    title: "Infusão Digestiva de Chá Verde com Gengibre e Limão",
    chapterId: 9,
    chapterTitle: "Receitas Tradicionais para Emagrecimento e Metabolismo",
    introducao: "A combinação clássica para acelerar o metabolismo de forma natural e eliminar a sensação de inchaço.",
    ingredientes: [
      "1 colher de chá de chá verde",
      "2 rodelas finas de gengibre",
      "Suco de 1/2 limão",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a água com o gengibre por 5 minutos.",
      "Desligue o fogo, adicione o chá verde e abafe por 3 minutos.",
      "Coe, adicione o suco de limão e sirva morno."
    ],
    comoConsumir: "Tome 1 xícara pela manhã e outra após o almoço.",
    cuidados: "Evite tomar à noite por conter teína natural.",
    curiosidade: "O chá verde e o gengibre ajudam o corpo aquece e queimar gorduras paradas.",
    dicaMestraLin: "O segredo do emagrecimento saudável é a constância e a paciência."
  },
  {
    id: 82,
    title: "Chá de Hibisco com Canela e Anis Estrelado",
    chapterId: 9,
    chapterTitle: "Receitas Tradicionais para Emagrecimento e Metabolismo",
    introducao: "Uma infusão avermelhada de sabor picante e cítrico que limpa a retenção de líquidos.",
    ingredientes: [
      "1 colher de chá de flores de hibisco",
      "1 pau de canela",
      "1 estrela de anis",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a canela e o anis na água por 6 minutos.",
      "Desligue, adicione o hibisco e abafe por 4 minutos.",
      "Coe e sirva."
    ],
    comoConsumir: "Tome 1 xícara no meio da tarde.",
    cuidados: "Pessoas com pressão muito baixa devem tomar com moderação.",
    curiosidade: "O hibisco reduz o acúmulo de gorduras no abdômen.",
    dicaMestraLin: "A canela e o anis tiram a vontade de comer doces fora de hora."
  },
  {
    id: 83,
    title: "Bebida Morna de Casca de Laranja Seca com Hortelã",
    chapterId: 9,
    chapterTitle: "Receitas Tradicionais para Emagrecimento e Metabolismo",
    introducao: "Desbloqueia a estagnação de gorduras e líquidos acumulados no ventre.",
    ingredientes: [
      "1 pedaço de casca de laranja seca",
      "5 folhas de hortelã fresca",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a casca de laranja por 6 minutos.",
      "Desligue, junte a hortelã, abafe por 4 minutos e coe."
    ],
    comoConsumir: "Tome morno após o almoço.",
    cuidados: "Lave bem as cascas antes de secar.",
    curiosidade: "Na medicina chinesa, 'dissolver a umidade' é o primeiro passo para perder peso.",
    dicaMestraLin: "Sinta a barriga ficar mais leve após alguns dias de uso."
  },
  {
    id: 84,
    title: "Infusão de Cavalinha com Erva-Doce e Limão",
    chapterId: 9,
    chapterTitle: "Receitas Tradicionais para Emagrecimento e Metabolismo",
    introducao: "A rainha da eliminação de líquidos combinada com o conforto gástrico da erva-doce.",
    ingredientes: [
      "1 colher de sopa de cavalinha",
      "1 colher de chá de erva-doce",
      "Gotas de limão",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a cavalinha e a erva-doce na água por 5 minutos.",
      "Abafe por 5 minutos, coe e adicione as gotas de limão."
    ],
    comoConsumir: "Tome entre as refeições até as 17h.",
    cuidados: "Beba água pura ao longo do dia.",
    curiosidade: "Desincha pernas, barriga e rosto com rapidez.",
    dicaMestraLin: "Sua aliança vai voltar a rodar no dedo com facilidade!"
  },
  {
    id: 85,
    title: "Chá de Carqueja Suave com Hortelã",
    chapterId: 9,
    chapterTitle: "Receitas Tradicionais para Emagrecimento e Metabolismo",
    introducao: "A carqueja é famosa por auxiliar o fígado no processamento das gorduras da alimentação.",
    ingredientes: [
      "1 colher de chá de carqueja",
      "4 folhas de hortelã fresca",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a água, desligue e coloque a carqueja e a hortelã.",
      "Abafe por 5 minutos e coe."
    ],
    comoConsumir: "Tome meia xícara após refeições pesadas.",
    cuidados: "A hortelã suaviza o sabor amargoso da carqueja.",
    curiosidade: "O sabor amargo estimula a produção de bile e o trabalho da vesícula.",
    dicaMestraLin: "Aprecie a sabedoria das ervas amargas na medida certa."
  },
  {
    id: 86,
    title: "Caldo Purificante de Pepino com Gengibre Morno",
    chapterId: 9,
    chapterTitle: "Receitas Tradicionais para Emagrecimento e Metabolismo",
    introducao: "O pepino é extremamente hidratante e diurético, servido morno com gengibre para não esfriar o estômago.",
    ingredientes: [
      "1/2 pepino fatiado com casca lavada",
      "2 rodelas de gengibre",
      "2 xícaras de água",
      "Pitada de sal"
    ],
    modoPreparo: [
      "Cozinhe o pepino e o gengibre na água por 8 minutos.",
      "Tempere com sal leve e sirva o caldo morno."
    ],
    comoConsumir: "Tome antes do jantar.",
    cuidados: "Beba morno.",
    curiosidade: "O pepino elimina o excesso de calor e sódio do corpo.",
    dicaMestraLin: "Um caldo leve e surpreendentemente gostoso."
  },
  {
    id: 87,
    title: "Infusão de Sementes de Cominho com Limão",
    chapterId: 9,
    chapterTitle: "Receitas Tradicionais para Emagrecimento e Metabolismo",
    introducao: "Usado na Ásia para acender o 'fogo digestivo' e evitar o acúmulo de gorduras no abdômen.",
    ingredientes: [
      "1 colher de chá de sementes de cominho",
      "Suco de 1/2 limão",
      "1 xícara e meia de água"
    ],
    modoPreparo: [
      "Ferva as sementes de cominho na água por 5 minutos.",
      "Coe, adicione o limão e beba morno."
    ],
    comoConsumir: "Tome em jejum pela manhã.",
    cuidados: "Use sementes inteiras de cominho.",
    curiosidade: "O cominho é uma especiaria milenar usada para queimar gorduras viscerais.",
    dicaMestraLin: "Dá um alívio imediato no estômago estufado."
  },
  {
    id: 88,
    title: "Chá de Dente-de-Leão com Casca de Maçã",
    chapterId: 9,
    chapterTitle: "Receitas Tradicionais para Emagrecimento e Metabolismo",
    introducao: "Limpa o fígado e estimula a eliminação de resíduos parados no intestino.",
    ingredientes: [
      "1 colher de sobremesa de dente-de-leão",
      "Casca de 1/2 maçã",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a água com o dente-de-leão e a casca de maçã por 6 minutos.",
      "Abafe por 4 minutos e coe."
    ],
    comoConsumir: "Tome 1 xícara à tarde.",
    cuidados: "Excelente para rotinas de desintoxicação suave.",
    curiosidade: "O dente-de-leão é rico em potássio e nutrientes essenciais.",
    dicaMestraLin: "Sua pele e sua barriga vão agradecer."
  },
  {
    id: 89,
    title: "Bebida de Vinagre de Maçã Natural com Mel e Gengibre",
    chapterId: 9,
    chapterTitle: "Receitas Tradicionais para Emagrecimento e Metabolismo",
    introducao: "O tônico matinal da longevidade para harmonizar o açúcar no sangue e a digestão.",
    ingredientes: [
      "1 colher de sopa de vinagre de maçã orgânico e não filtrado",
      "1 colher de chá de mel",
      "1 pitada de gengibre em pó",
      "1 copo de água morna"
    ],
    modoPreparo: [
      "Misture o vinagre de maçã, o mel e o gengibre no copo de água morna.",
      "Mexa bem e tome imediatamente."
    ],
    comoConsumir: "Tome em jejum pela manhã ou 15 minutos antes do almoço.",
    cuidados: "Dilua sempre em bastante água morna.",
    curiosidade: "O vinagre de maçã artesanal mantém a 'mãe do vinagre', repleta de enzimas benéficas.",
    dicaMestraLin: "Melhora a digestão das refeições de forma incrível!"
  },
  {
    id: 90,
    title: "Infusão de Chá Vermelho Pu-Erh com Casca de Laranja",
    chapterId: 9,
    chapterTitle: "Receitas Tradicionais para Emagrecimento e Metabolismo",
    introducao: "O lendário 'chá emagrecedor dos imperadores' mantido em fermentação tradicional nas montanhas de Yunnan.",
    ingredientes: [
      "1 colher de chá de chá vermelho Pu-Erh",
      "1 tirinha de casca de laranja seca",
      "2 xícaras de água fervente"
    ],
    modoPreparo: [
      "Coloque o chá Pu-Erh e a casca de laranja no bule.",
      "Despeje a água fervente e abafe por 5 minutos.",
      "Coe e sirva."
    ],
    comoConsumir: "Tome 1 xícara logo após o almoço ou jantar.",
    cuidados: "Tem um sabor amadeirado profundo e muito reconfortante.",
    curiosidade: "O Pu-Erh é envelhecido como vinho fino na China e ajuda a digerir gorduras pesadas.",
    dicaMestraLin: "É o chá preferido da Mestra Lin para depois das festas de família!"
  },

  // CAPÍTULO 10: Receitas Especiais da Mestra Lin (91-100)
  {
    id: 91,
    title: "O Grande Chá da Longa Vida da Mestra Lin",
    chapterId: 10,
    chapterTitle: "Receitas Especiais da Mestra Lin",
    introducao: "A receita secreta que reúne os sete tesouros da minha família em uma única infusão equilibrada e abençoada.",
    ingredientes: [
      "2 rodelas de gengibre fresco",
      "2 jujubas (tâmaras chinesas) cortadas ao meio",
      "1 colher de chá de goji berries",
      "3 flores de crisântemo culinário",
      "1 pau de canela pequeno",
      "1 colher de chá de mel puro",
      "3 xícaras de água filtrada"
    ],
    modoPreparo: [
      "Ferva a água com o gengibre, as jujubas e a canela por 10 minutos em fogo baixo.",
      "Desligue o fogo, adicione as goji berries e as flores de crisântemo.",
      "Abafe por 5 minutos, coe em sua xícara favorita e adicione o mel no final."
    ],
    comoConsumir: "Aprecie morno nos momentos especiais do seu dia.",
    cuidados: "Beba devagar, sentindo cada nota de aroma e sabor.",
    curiosidade: "Esta infusão reúne o calor do gengibre, a doçura da jujuba e a serenidade do crisântemo em perfeita harmonia.",
    dicaMestraLin: "Esta é a minha receita mais querida. Prepare-a para quem você ama!"
  },
  {
    id: 92,
    title: "Caldo do Abraço da Vovó Lin",
    chapterId: 10,
    chapterTitle: "Receitas Especiais da Mestra Lin",
    introducao: "Um sopinha leve de abóbora, gengibre e gergelim preto criada para acalentar o corpo e a alma nos dias tristes.",
    ingredientes: [
      "1 xícara de abóbora amarela cozida",
      "1 rodela fina de gengibre",
      "1 colher de chá de gergelim preto torrado",
      "1/2 xícara do caldo do cozimento da abóbora",
      "Pitada leve de sal e fio de azeite de oliva"
    ],
    modoPreparo: [
      "Amasse a abóbora cozida com o gengibre ralado no caldo morno.",
      "Sirva na tigela, tempere com sal, o fio de azeite e polvilhe o gergelim por cima."
    ],
    comoConsumir: "Coma morno com colher à noite.",
    cuidados: "Siga o preparo com muito carinho e paciência.",
    curiosidade: "A abóbora amarela aquece o estômago e acalma o choro retido.",
    dicaMestraLin: "Coma devagar, como se estivesse recebendo um abraço apertado da sua avó."
  },
  {
    id: 93,
    title: "Infusão dos Sete Tesouros Orientais",
    chapterId: 10,
    chapterTitle: "Receitas Especiais da Mestra Lin",
    introducao: "Uma combinação harmônica de ervas e flores leves para renovar os pensamentos.",
    ingredientes: [
      "Flores de camomila, crisântemo, hortelã, erva-doce, casca de laranja, goji berry e canela em pau em pequenas pitadas",
      "3 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a água com a canela e casca de laranja por 5 minutos.",
      "Desligue, junte as demais ervas e flores, abafe por 6 minutos e coe."
    ],
    comoConsumir: "Sirva em xícaras bonitas ao receber visitas amadas.",
    cuidados: "A harmonia dos aromas traz alegria imediata ao ambiente.",
    curiosidade: "O número sete representa o ciclo completo da renovação da vida.",
    dicaMestraLin: "Sinta a união das flores e especiarias em uma dança de sabores."
  },
  {
    id: 94,
    title: "Bebida Secreta da Paz Noturna",
    chapterId: 10,
    chapterTitle: "Receitas Especiais da Mestra Lin",
    introducao: "Para as noites em que a cabeça recusa-se a desligar e os olhos não querem fechar.",
    ingredientes: [
      "1 colher de sopa de flores de camomila",
      "1 colher de chá de lavanda culinária",
      "1 rodela fina de maçã",
      "1 colher de chá de mel",
      "1 xícara e meia de água"
    ],
    modoPreparo: [
      "Ferva a água com a rodela de maçã por 4 minutos.",
      "Desligue, acrescente a camomila e a lavanda, abafe por 5 minutos.",
      "Coe, adoce com o mel e tome morno."
    ],
    comoConsumir: "Tome 30 minutos antes de se deitar na cama.",
    cuidados: "Apague as luzes fortes e respire fundo.",
    curiosidade: "A maçã e a lavanda criam um aroma único de tranquilidade.",
    dicaMestraLin: "Deixe as preocupações do lado de fora do quarto antes de dormir."
  },
  {
    id: 95,
    title: "Elixir da Harmonia da Mestra Lin",
    chapterId: 10,
    chapterTitle: "Receitas Especiais da Mestra Lin",
    introducao: "A infusão que equilibra as emoções quando nos sentimos sobrecarregados pela vida.",
    ingredientes: [
      "1 colher de sopa de erva-cidreira",
      "3 folhas de hortelã",
      "1 tirinha de casca de limão",
      "1 colher de chá de mel",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a água, desligue e adicione as ervas e o limão.",
      "Abafe por 5 minutos, coe e adoce com mel."
    ],
    comoConsumir: "Tome à tarde.",
    cuidados: "Aprecie o sabor suave e refrescante.",
    curiosidade: "Equilibra o calor da ansiedade e traz serenidade de pensamento.",
    dicaMestraLin: "Tudo passa nesta vida. Respire fundo e confie."
  },
  {
    id: 96,
    title: "Chá da Manhã Radiante com Goji e Crisântemo",
    chapterId: 10,
    chapterTitle: "Receitas Especiais da Mestra Lin",
    introducao: "Para abrir os olhos com alegria, clareza e entusiasmo para o novo dia.",
    ingredientes: [
      "4 flores de crisântemo culinário",
      "1 colher de chá de goji berries",
      "1 rodela de gengibre fino",
      "2 xícaras de água morna"
    ],
    modoPreparo: [
      "Infusione todos os ingredientes na água morna por 6 minutos com tampa.",
      "Sirva em xícara de porcelana."
    ],
    comoConsumir: "Tome logo após acordar.",
    cuidados: "Beba morno com um sorriso no rosto.",
    curiosidade: "Clareia a visão e desperta a mente com doçura.",
    dicaMestraLin: "Agradeça por mais uma manhã de luz antes do primeiro gole."
  },
  {
    id: 97,
    title: "Caldo Renovador de Arroz, Jujuba e Gergelim",
    chapterId: 10,
    chapterTitle: "Receitas Especiais da Mestra Lin",
    introducao: "A preparação mais acolhedora da Ásia para dias em que o corpo pede alimento leve e nutritivo.",
    ingredientes: [
      "3 colheres de sopa de arroz branco macio",
      "2 jujubas (tâmaras chinesas)",
      "1 colher de chá de gergelim preto torrado",
      "3 xícaras de água"
    ],
    modoPreparo: [
      "Cozinhe em fogo bem baixo por 35 minutos até o arroz desmanchar e virar um mingau aveludado.",
      "Polvilhe o gergelim preto por cima ao servir."
    ],
    comoConsumir: "Consuma no jantar ou café da manhã.",
    cuidados: "Sirva morno.",
    curiosidade: "Alimento milenar que devolve a vida ao estômago fragilizado.",
    dicaMestraLin: "Sinta o estômago aquecer em paz."
  },
  {
    id: 98,
    title: "Infusão de Flores Nobres da Mestra Lin",
    chapterId: 10,
    chapterTitle: "Receitas Especiais da Mestra Lin",
    introducao: "Uma mistura de flores de crisântemo, camomila e pétalas de rosa para perfumar o espírito.",
    ingredientes: [
      "3 flores de crisântemo",
      "1 colher de sopa de camomila",
      "1 colher de chá de pétalas de rosa secas",
      "2 xícaras de água morna"
    ],
    modoPreparo: [
      "Coloque todas as flores na água morna por 5 minutos abafado.",
      "Coe suavemente."
    ],
    comoConsumir: "Tome à tarde em momentos de lazer.",
    cuidados: "Um espetáculo de aromas delicados.",
    curiosidade: "As flores trazem a leveza do céu para dentro do nosso corpo.",
    dicaMestraLin: "Cultive pensamentos bonitos enquanto toma seu chá."
  },
  {
    id: 99,
    title: "Bebida do Coração Tranquilo com Canela e Mel",
    chapterId: 10,
    chapterTitle: "Receitas Especiais da Mestra Lin",
    introducao: "Para desatar os nós do peito, afastar a solidão e sentir aconchego amoroso.",
    ingredientes: [
      "1 pau de canela",
      "1/2 maçã picada",
      "1 colher de sopa de mel",
      "2 xícaras de água"
    ],
    modoPreparo: [
      "Ferva a canela e a maçã por 8 minutos.",
      "Coe, deixe amornar e adicione o mel."
    ],
    comoConsumir: "Tome morno no final da tarde.",
    cuidados: "Segure a xícara morna junto ao peito antes de beber.",
    curiosidade: "A canela aquece a energia do coração e traz alívio emocional.",
    dicaMestraLin: "Você nunca está sozinho. O carinho da vida está sempre ao seu redor."
  },
  {
    id: 100,
    title: "O Chá da Gratidão e Longevidade",
    chapterId: 10,
    chapterTitle: "Receitas Especiais da Mestra Lin",
    introducao: "Chegamos ao final das nossas 100 receitas com uma celebração à vida, à saúde e ao carinho entre gerações.",
    ingredientes: [
      "1 rodela de gengibre",
      "1 colher de chá de goji berries",
      "1 jujuba (tâmara chinesa)",
      "1 flor de crisântemo",
      "1 pau de canela",
      "1 colher de chá de mel",
      "2 xícaras de água filtrada"
    ],
    modoPreparo: [
      "Ferva o gengibre, a jujuba e a canela na água por 8 minutos.",
      "Desligue, junte as goji berries e a flor de crisântemo, abafe por 4 minutos.",
      "Coe, adicione o mel e sirva em festa de paz."
    ],
    comoConsumir: "Tome em celebração com a família ou em um momento especial de solidão abençoada.",
    cuidados: "Aproveite cada gole com o coração repleto de gratidão.",
    curiosidade: "Esta infusão encerra o livro unindo todos os elementos da tradição oriental para a saúde duradoura.",
    dicaMestraLin: "Que estas 100 receitas sejam companheiras fiéis da sua vida por muitos e muitos anos. Muito obrigada por caminhar ao meu lado!"
  }
];
