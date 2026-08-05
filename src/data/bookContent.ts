import { Recipe } from '../types';

export const BOOK_METADATA = {
  title: "Os Segredos Milenares da Medicina Chinesa",
  subtitle: "100 Receitas Tradicionais Inspiradas na Sabedoria Oriental para o Bem-Estar do Dia a Dia",
  author: "Mestra Lin",
  coverDescription: "A arte da capa apresenta a figura carinhosa e serena da Mestra Lin, uma senhora oriental de olhar acolhedor e sorriso doce, vestindo túnica de linho bege-natural. Ela segura delicadamente uma xícara de cerâmica artesanal fumegante com as duas mãos. Redor do retrato, elementos botânicos tradicionais flutuam em composição harmoniosa: fatias de gengibre fresco, bagas de goji berry avermelhadas, paus de canela, flores douradas de crisântemo e raminhos de hortelã sobre fundo aquarelado em tons de papel arroz, bambu e sépia vintage. A tipografia do título é refinada, em tom marrom-terroso profundo, transmitindo acolhimento, tradição e paz.",
};

export const PAGE_CONTENTS = {
  page1_cover: {
    title: BOOK_METADATA.title,
    subtitle: BOOK_METADATA.subtitle,
    author: BOOK_METADATA.author,
    artDescription: BOOK_METADATA.coverDescription
  },

  page2_copyright: {
    title: "Direitos Autorais e Isenção de Responsabilidade Legal",
    sections: [
      {
        heading: "Propriedade Intelectual e Proteção Legal",
        content: "Copyright © Mestra Lin. Todos os direitos reservados no Brasil e no exterior. Nenhuma parte desta obra digital pode ser reproduzida, duplicada, armazenada em sistemas eletrônicos de recuperação ou transmitida por qualquer meio (seja eletrônico, mecânico, fotocópia, gravação ou outros) sem a prévia autorização por escrito da autora e de seus editores."
      },
      {
        heading: "Aviso Importante sobre Saúde e Bem-Estar",
        content: "Todo o conteúdo apresentado neste livro — incluindo histórias, descrições culturais, receitas caseiras, infusões, caldos e sugestões de rotina — possui finalidade estritamente EDUCATIVA, CULTURAL e INFORMATIVA. O material reflete práticas tradicionais transmitidas de geração em geração na sabedoria popular oriental."
      },
      {
        heading: "Isenção de Aconselhamento Médico",
        content: "As informações e receitas contidas neste obra NÃO constituem consulta médica, diagnóstico, prescrição ou tratamento clínico de qualquer natureza. Elas NÃO substituem o acompanhamento individualizado realizado por médicos, nutricionistas ou profissionais de saúde devidamente habilitados."
      },
      {
        heading: "Sem Promessas de Cura ou Milagres",
        content: "Este livro não promete nem garante a cura, prevenção ou alívio definitivo de doenças ou condições crônicas. O bem-estar é fruto de um estilo de vida equilibrado. Caso você esteja grávida, amamentando, seja idoso com fragilidades, tenha diagnóstico de doença grave ou faça uso contínuo de medicamentos, consulte impreterivelmente o seu médico antes de alterar sua alimentação ou incluir plantas e especiarias em sua rotina."
      }
    ]
  },

  page3_presentation: {
    title: "Apresentação da Mestra Lin",
    subtitle: "O carinho de uma avó e o perfume do chá no bule de barro",
    textParagraphs: [
      "Olá, meu querido leitor, minha querida leitora. Seja muito bem-vindo a este cantinho morno do nosso livro.",
      "Meu nome é Mestra Lin. Tenho aproximadamente 60 anos bem vividos e o meu coração sempre se enche de alegria quando vejo alguém se sentando à mesa para tomar uma xícara de chá. Cresci em uma pequena vila interiorana cercada por montanhas verdejantes e névoa suave na Ásia. Naquele lugar calmo, a vida não corria com a pressa dos dias de hoje.",
      "Tudo o que aprendi sobre o cuidado com o corpo e a mente não veio de grandes bibliotecas ou de salas de aula frias. Veio da cozinha acolhedora da minha avó e da minha mãe. Lembro-me claramente, como se fosse hoje, do som ritmado do pilão de pedra moendo sementes de gergelim preto, do perfume picante do gengibre fervendo no fogão a lenha e da paciência amorosa com que elas secavam flores de crisântemo ao sol do final de tarde.",
      "Quando alguém na vizinhança acordava indisposto, triste ou com a barriga pesada, não havia correria. Minha avó abria um baú antigo de madeira de cânfora onde guardava cadernos amarelados, escritos à mão com pincel e tinta nanquim. Ela lia algumas linhas, ia até a horta de ervas ou ao armário de mantimentos, escolhia três ou quatro ingredientes simples e preparava um caldo morno ou uma infusão cheirosa.",
      "Com poucas colheradas e algumas palavras doces de aconchego, o rosto das pessoas mudava. O olhar voltava a brilhar e o corpo encontrava o seu descanso natural. Minha família guardou e aprimorou esses cadernos ao longo de gerações, tratando cada receita como uma joia preciosa de carinho humano.",
      "Hoje, ao olhar para o mundo moderno, vejo muitas pessoas acima dos 45 anos cansadas, correndo sem parar, com o sono picado, preocupadas com a família e com a saúde. Vejo corações ansiosos e corpos pedindo um momento de pausa.",
      "Foi por isso que decidi abrir este baú de memórias da minha família e compartilhar com você estas 100 receitas tradicionais. Elas não são remédios amargos ou complicados. São lembretes de amor em forma de alimento, preparados para que você aprenda a ouvir o seu próprio corpo e a se acolher todos os dias."
    ]
  },

  page4_message: {
    title: "Uma Mensagem da Mestra Lin ao Leitor",
    subtitle: "Puxe uma cadeira e sirva-se de uma xícara morna",
    paragraphs: [
      "Querido leitor, querida leitora,",
      "Gostaria que você imaginasse que agora estamos sentados juntos em uma varanda tranquila, ouvindo o barulho suave do vento nas folhas de bambu e sentindo o vapor quentinho subindo de uma xícara de chá acabada de fazer.",
      "Se este livro chegou até as suas mãos, não foi por acaso. Acredito que o seu corpo, a sua mente e a sua alma estavam pedindo um momento de carinho e desaceleração.",
      "Muitas vezes, com o passar dos anos, esquecemos o quanto a simplicidade tem poder. Achamos que para cuidar de nós mesmos precisamos de coisas difíceis, caras ou distantes. Mas a sabedoria dos nossos ancestrais nos ensina o oposto: o verdadeiro bem-estar mora no que é simples, no ingrediente que você tem no armário da cozinha e na paciência de preparar algo bom para você mesmo.",
      "Não leia estas páginas com pressa de cumprir tarefas. Não se cobre. Trate cada receita como um presente que você dá a si mesmo no final de um dia longo ou no começo de uma manhã abençoada.",
      "Desejo do fundo do meu coração que cada gole e cada colherada tragam aconchego para a sua vida, alívio para os seus dias e muita paz para a sua caminhada.",
      "Com todo o meu carinho de avó,",
      "— Mestra Lin"
    ]
  },

  page5_howToUse: {
    title: "Como Utilizar Este Livro",
    subtitle: "Sua jornada no seu próprio ritmo, sem cobranças",
    steps: [
      {
        number: "1",
        title: "Navegação Livre e Sem Pressa",
        description: "Você não precisa ler este livro do começo ao fim como se estivesse estudando. Pense nele como uma gaveta de chás perfumados: você abre e escolhe a receita que mais combina com o que você está sentindo hoje."
      },
      {
        number: "2",
        title: "Encontre o Capítulo Ideal",
        description: "Organizamos as 100 receitas em 10 capítulos temáticos (desde o alívio para noites mal dormidas até o conforto para as articulações e a digestão). Basta olhar o sumário e ir direto ao tema que deseja."
      },
      {
        number: "3",
        title: "Ingredientes Simples e Acessíveis",
        description: "A maioria das receitas utiliza ingredientes que você já tem em casa ou encontra facilmente em feiras e mercados (como gengibre, canela, limão, alho, mel e hortelã). Se não encontrar um item raro, não se preocupe: a intenção amorosa do preparo é o ingrediente principal."
      },
      {
        number: "4",
        title: "Adapte à Sua Rotina",
        description: "Escolha uma ou duas receitas por semana para experimentar com calma. Observe como seu corpo reage ao calor e ao aroma dos alimentos mornos. Faça disso um ritual prazeroso e relaxante."
      }
    ]
  },

  page6_structure: {
    title: "Como Cada Receita Está Organizada",
    subtitle: "A estrutura pensada para facilitar o seu dia a dia",
    components: [
      {
        tag: "Introdução",
        text: "Uma breve história acolhedora sobre o propósito tradicional daquela combinação."
      },
      {
        tag: "Ingredientes",
        text: "Lista clara em medidas caseiras fáceis (colheres de chá, xícaras, rodelas)."
      },
      {
        tag: "Modo de Preparo",
        text: "Passo a passo simples, sem complicações ou técnicas difíceis."
      },
      {
        tag: "Como Consumir",
        text: "A melhor forma e horário para apreciar a preparação (morno, antes de dormir, pela manhã)."
      },
      {
        tag: "Cuidados",
        text: "Recomendações simples e sensatas para evitar excessos ou reações indesejadas."
      },
      {
        tag: "Curiosidade",
        text: "O significado cultural e o simbolismo oriental dos ingredientes utilizados."
      },
      {
        tag: "Dica da Mestra Lin",
        text: "Um segredo amoroso de avó para deixar o sabor e a experiência ainda melhores."
      }
    ]
  },

  page7_mtcExplanation: {
    title: "O que é a Medicina Tradicional Chinesa",
    subtitle: "A arte do equilíbrio explicada com simplicidade",
    sections: [
      {
        title: "O Corpo como um Jardim Harmonioso",
        content: "Esqueça os termos complicados e as teorias difíceis. Para os antigos sábios orientais, o corpo humano funciona exatamente como um jardim. Se o jardim recebe sol demais e pouca água, a terra seca e as plantas murcham. Se recebe água demais e nenhum sol, as raízes apodrecem e o ar fica abafado. O segredo da vida saudável é manter o jardim no clima perfeito: nem quente demais, nem frio demais; nem parado demais, nem agitado demais."
      },
      {
        title: "A Força do Que É Morno e Aconchegante",
        content: "Na tradição oriental, o nosso estômago é visto como uma pequena panela de cozimento no centro do corpo. Quando ingerimos bebidas muito geladas ou alimentos pesados o tempo todo, jogamos água fria nessa panela, exigindo um esforço enorme do corpo. Por isso, a Mestra Lin valoriza tanto as infusões mornas, os caldos leves e os aromas que aquecem suavemente por dentro."
      },
      {
        title: "Os Cinco Pilares da Vida Tranquila",
        content: "Mais do que tomar um chá, o bem-estar tradicional oriental baseia-se em cinco atitudes diárias: comer alimentos frescos com gratidão, beber líquidos mornos em pequenos goles, dormir cedo para descansar a mente, movimentar o corpo com suavidade e manter pensamentos de paz no coração."
      }
    ]
  },

  page8_ingredientsGuide: {
    title: "Ingredientes Mais Utilizados",
    subtitle: "Curiosidades culturais e sabedoria tradicional da nossa cozinha",
    items: [
      { name: "Gengibre", desc: "Conhecido há milênios por trazer calor ao estômago e espantar a sensação de frio nas estações úmidas." },
      { name: "Canela", desc: "Especiaria perfumada que traz sensação de aconchego, acalenta o peito e ilumina os dias cinzentos." },
      { name: "Limão", desc: "Fruta cítrica vibrante, valorizada por trazer frescor matinal e despertar a energia do corpo com leveza." },
      { name: "Alho", desc: "O guardião protetor das cozinhas de antigamente, usado desde a antiguidade para reforçar a vitalidade caseira." },
      { name: "Mel", desc: "O xarope dourado da natureza que suaviza a garganta, traz doçura à vida e acalma as mucosas secas." },
      { name: "Goji Berry", desc: "Pequenas frutinhas vermelhas reveredadas na Ásia por trazerem vivacidade aos olhos e vigor ao corpo." },
      { name: "Jujuba (Tâmara Chinesa)", desc: "Fruta doce tradicionalmente usada em caldos para nutrir a energia e trazer sensação de serenidade." },
      { name: "Hortelã", desc: "Folha refrescante perfeita para acalmar a mente agitada, aliviar a sensação de peso na cabeça e refrescar o estômago." },
      { name: "Crisântemo", desc: "Flor delicada e perfumada, muito apreciada em infusões orientais para relaxar a visão e trazer leveza à mente." },
      { name: "Camomila", desc: "A florzinha da tranquilidade por excelência, querida por avós do mundo inteiro para desacelerar ao entardecer." },
      { name: "Erva-doce", desc: "Semente aromática que traz conforto suave para a barriga e alívio de gases após as refeições." },
      { name: "Alecrim", desc: "A erva da alegria que desperta o aroma da casa, clareia as ideias e renova a disposição diária." },
      { name: "Chá Verde", desc: "A bebida milenar da sabedoria oriental que limpa a mente, traz foco calmo e purifica a rotina." },
      { name: "Gergelim Preto", desc: "Semente nobre da culinária ancestral usada para nutrir a força profunda, os cabelos e a vitalidade." }
    ]
  },

  page9_bestPractices: {
    title: "Como Aproveitar Melhor as Receitas",
    subtitle: "Conselhos simples para transformar o preparo em um ritual de bem-estar",
    tips: [
      {
        title: "1. Valorize Ingredientes Frescos e Água Pura",
        text: "Sempre que possível, escolha ervas frescas, raiz de gengibre firme e água limpa e filtrada. A energia daquilo que colocamos na panela se reflete na qualidade da infusão."
      },
      {
        title: "2. Beba Líquidos Mornos em Pequenos Goles",
        text: "Evite beber chás fervendo ou congelados. O morno é a temperatura do afeto e permite que seu estômago receba a preparação com total conforto."
      },
      {
        title: "3. Cultive um Momento de Pausa e Presença",
        text: "Enquanto a água esquenta e as ervas soltam seu aroma, desligue a televisão e o celular por dez minutos. Respire fundo e sinta o cheiro gostoso subindo da xícara."
      },
      {
        title: "4. Respeite o Sono e o Ritmo do Seu Corpo",
        text: "O sono é o maior reparador da nossa vitalidade. Tome suas infusões noturnas pelo menos uma hora antes de se deitar e deite-se em um quarto escuro e tranquilo."
      },
      {
        title: "5. Mantenha a Constância sem Obsessão",
        text: "Mais vale uma xícara tomada com carinho três vezes na semana do que tentar fazer dez receitas no mesmo dia por ansiedade. O bem-estar é construído passo a passo."
      }
    ]
  },

  page10_tableOfContents: {
    title: "Sumário dos Capítulos",
    subtitle: "100 Receitas Tradicionais divididas em 10 Capítulos Temáticos",
    chapters: [
      { id: 1, title: "Capítulo 1", name: "Receitas Tradicionais para Gripe e Resfriados", count: 10 },
      { id: 2, title: "Capítulo 2", name: "Receitas Tradicionais para Digestão e Intestino", count: 10 },
      { id: 3, title: "Capítulo 3", name: "Receitas Tradicionais para Memória e Concentração", count: 10 },
      { id: 4, title: "Capítulo 4", name: "Receitas Tradicionais para Sono, Ansiedade e Relaxamento", count: 10 },
      { id: 5, title: "Capítulo 5", name: "Receitas Tradicionais para Pressão Alta e Circulação", count: 10 },
      { id: 6, title: "Capítulo 6", name: "Receitas Tradicionais para Dores nas Articulações", count: 10 },
      { id: 7, title: "Capítulo 7", name: "Receitas Tradicionais para Pele, Cabelo e Unhas", count: 10 },
      { id: 8, title: "Capítulo 8", name: "Receitas Tradicionais para Energia e Disposição", count: 10 },
      { id: 9, title: "Capítulo 9", name: "Receitas Tradicionais para Emagrecimento e Metabolismo", count: 10 },
      { id: 10, title: "Capítulo 10", name: "Receitas Especiais da Mestra Lin", count: 10 }
    ]
  },

  introChapter1: {
    title: "Capítulo 1: Receitas Tradicionais para Gripe e Resfriados",
    subtitle: "O aconchego do calor caseiro para afastar o frio do corpo",
    paragraphs: [
      "Quando o vento frio da mudança de estação sopra lá fora ou quando sentimos aquele arrepio no pescoço que avisa que o corpo ficou vulnerável, não há nada mais acolhedor do que o aroma do gengibre com canela fervendo docemente na panela.",
      "Na sabedoria oriental, o resfriado é visto como um 'vento frio' que tenta se alojar na pele e nas vias respiratórias. Para responder a esse frio, nossas avós sempre usaram ingredientes simples que trazem um calor suave e reconfortante por dentro.",
      "Neste primeiro capítulo, preparei 10 receitas tradicionais e carinhosas que trazem o vapor perfumado e a leveza de que seu corpo precisa para atravessar os dias de vento e chuva com muito aconchego."
    ],
    mestraLinClosingQuote: "Agora que você conhece um pouco da minha história, convido você a caminhar comigo por essas receitas que atravessaram gerações. Espero que elas tragam momentos de cuidado, carinho e bem-estar para a sua rotina."
  }
};

export interface ChapterIntro {
  title: string;
  subtitle: string;
  paragraphs: string[];
  mestraLinClosingQuote: string;
}

export const CHAPTER_INTROS: Record<number, ChapterIntro> = {
  1: {
    title: "Capítulo 1: Receitas Tradicionais para Gripe e Resfriados",
    subtitle: "O aconchego do calor caseiro para afastar o frio do corpo",
    paragraphs: [
      "Quando o vento frio da mudança de estação sopra lá fora ou quando sentimos aquele arrepio no pescoço que avisa que o corpo ficou vulnerável, não há nada mais acolhedor do que o aroma do gengibre com canela fervendo docemente na panela.",
      "Na sabedoria oriental, o resfriado é visto como um 'vento frio' que tenta se alojar na pele e nas vias respiratórias. Para responder a esse frio, nossas avós sempre usaram ingredientes simples que trazem um calor suave e reconfortante por dentro.",
      "Neste capítulo, selecionei 10 receitas tradicionais e carinhosas que trazem o vapor perfumado e a leveza de que seu corpo precisa para atravessar os dias frios com muito aconchego."
    ],
    mestraLinClosingQuote: "O calor de uma xícara morna tomada com calma dissolve o frio e devolve o sorriso ao rosto."
  },
  2: {
    title: "Capítulo 2: Receitas Tradicionais para Digestão e Intestino",
    subtitle: "O conforto leve para aquecer e pacificar o centro do corpo",
    paragraphs: [
      "Na Medicina Tradicional Chinesa, o estômago e o baço são o caldeirão dourado onde transformamos a comida em energia pura. Quando comemos com pressa ou ingerimos alimentos muito gelados, essa chama enfraquece.",
      "As receitas deste capítulo foram pensadas para acalmar a estufagem, aliviar a sensação de peso após as refeições e devolver o ritmo natural e suave ao seu estômago.",
      "Escolha uma das 10 receitas abaixo para saborear após o almoço ou jantar e sinta o alívio imediato no seu centro."
    ],
    mestraLinClosingQuote: "Quando a barriga está em paz, todo o corpo suspira de alívio e a mente fica leve."
  },
  3: {
    title: "Capítulo 3: Receitas Tradicionais para Memória e Concentração",
    subtitle: "Nutrição e clareza para iluminar os pensamentos e afastar o cansaço mental",
    paragraphs: [
      "Em um mundo agitado, com tantas informações e preocupações diárias, é natural que a mente se sinta cansada e o foco comece a falhar ao final do dia.",
      "A culinária ancestral valoriza frutos, sementes e flores que nutrem o cérebro, ativam o fluxo sutil de energia na cabeça e limpam a névoa dos pensamentos.",
      "Explore estas 10 infusões e caldos preparados para trazer foco calmo, memória viva e serenidade aos seus estudos e leituras."
    ],
    mestraLinClosingQuote: "Uma mente tranquila é como um lago cristalino: reflete a sabedoria sem se agitar."
  },
  4: {
    title: "Capítulo 4: Receitas Tradicionais para Sono, Ansiedade e Relaxamento",
    subtitle: "Ervas e flores suaves para desacelerar o coração e repousar em paz",
    paragraphs: [
      "A noite foi feita para repousar o corpo e permitir que a alma se revigore no silêncio do sono profundo. Quando a mente insiste em girar sem parar, o corpo pede aconchego.",
      "Aqui você encontrará preparados tradicionais com camomila, noz-moscada, capim-santo e sementes de jujuba — ingredientes queridos por gerações para convidar o sono tranquilo.",
      "Prepare sua receita favorita uma hora antes de se deitar, apague as luzes fortes e prepare-se para uma noite de descanso abençoado."
    ],
    mestraLinClosingQuote: "Deite-se no silêncio sabendo que o dia que passou fez o seu melhor. Amanhã o sol renasce."
  },
  5: {
    title: "Capítulo 5: Receitas Tradicionais para Pressão Alta e Circulação",
    subtitle: "O fluxo suave e refrescante da vitalidade nos vasos do corpo",
    paragraphs: [
      "O sangue e o Qi (energia vital) precisam fluir pelos canais do nosso corpo como um rio calmo, sem turbulências ou obstruções.",
      "Flores de crisântemo, folhas de amora, alho suave e casca de maçã são ingredientes tradicionais reconhecidos por acalmar o calor interno e suavizar o ritmo do coração.",
      "Aproveite estas 10 receitas preparadas para trazer leveza ao peito, refrescar a cabeça e promover uma circulação harmoniosa."
    ],
    mestraLinClosingQuote: "Respire fundo, beba em pequenos goles e sinta seu coração bater no ritmo calmo da natureza."
  },
  6: {
    title: "Capítulo 6: Receitas Tradicionais para Dores nas Articulações",
    subtitle: "Calor e alívio amoroso para destravar as juntas e afastar a rigidez",
    paragraphs: [
      "Com a maturidade e a chegada dos dias frios ou úmidos, as articulações podem acumular rigidez e desconforto nos joelhos, mãos e ombros.",
      "O segredo ancestral para aliviar as juntas é afastar a umidade e trazer calor sutil aos tendões com especiarias aquecedoras como a cúrcuma, o gengibre, a canela e o gergelim.",
      "Experimente estas 10 infusões e caldos revigorantes e sinta a flexibilidade e o alívio retornarem aos seus movimentos."
    ],
    mestraLinClosingQuote: "O calor de hoje prepara o corpo para caminhar com firmeza e leveza amanhã."
  },
  7: {
    title: "Capítulo 7: Receitas Tradicionais para Pele, Cabelo e Unhas",
    subtitle: "O brilho natural e a nutrição profunda que nascem de dentro para fora",
    paragraphs: [
      "Na visão da Medicina Oriental, a pele radiante e os cabelos fortes são o espelho de um organismo bem nutrido por dentro.",
      "Goji berry, tˆamara chinesa, arroz integral e flores de rosa silvestre são tesouros tradicionais usados para hidratar os tecidos e devolver a vivacidade à pele e aos cabelos.",
      "Descubra as 10 elixires e caldos da beleza e transforme seu momento de autocuidado em um ritual de amor próprio."
    ],
    mestraLinClosingQuote: "A verdadeira beleza é a saúde que transborda em forma de serenidade no olhar."
  },
  8: {
    title: "Capítulo 8: Receitas Tradicionais para Energia e Disposição",
    subtitle: "O vigor sutil sem agitação para iluminar a sua rotina diária",
    paragraphs: [
      "Saber recarregar a vitalidade sem usar estimulantes agressivos é uma das maiores artes da sabedoria oriental.",
      "Ginseng suave, chá verde com maçã, aveia com mel e sementes nobres trazem energia sustentável que dura o dia todo sem causar ansiedade ou palpitações.",
      "Conheça as 10 receitas deste capítulo para começar suas manhãs com o peito aberto e cheia de disposição."
    ],
    mestraLinClosingQuote: "A energia que permanece é aquela que é cultivada com carinho e sem pressa."
  },
  9: {
    title: "Capítulo 9: Receitas Tradicionais para Emagrecimento e Metabolismo",
    subtitle: "Leveza e purificação harmoniosa sem agressão ao organismo",
    paragraphs: [
      "Acelerar o metabolismo na tradição oriental não significa passar fome, mas sim acender o fogo digestivo e eliminar a retenção de líquidos acumulados.",
      "Hibisco, casca de laranja seca, vinagre de maçã natural e dente-de-leão trabalham juntos para desinchar o corpo e limpar os resíduos de forma natural.",
      "Desfrute destas 10 receitas levemente purificantes para sentir sua silhueta mais leve e seu corpo desinchado."
    ],
    mestraLinClosingQuote: "A paciência e a constância são as chaves para conquistar um corpo leve e saudável."
  },
  10: {
    title: "Capítulo 10: Receitas Especiais da Mestra Lin",
    subtitle: "Os segredos mais amados e preciosos transmitidos pela família Lin",
    paragraphs: [
      "Neste capítulo final, reuni os elixires mais preciosos do caderno de receitas de minha avó — preparações guardadas com imenso afeto ao longo de décadas.",
      "São caldos renovadores, chás de flores nobres e infusões da longevidade que celebram a gratidão pela vida e o carinho familiar.",
      "Que estas 10 receitas especiais tragam paz, saúde e longevidade para você e para todas as pessoas que você ama."
    ],
    mestraLinClosingQuote: "Abençoado seja o seu caminho. Que a sabedoria dos antigos ilumine sempre os seus dias."
  }
};
