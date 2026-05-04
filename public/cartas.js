const ARCANOS_MAIORES = [
  {
    id: 0,
    nome: "O Louco",
    numero: "0",
    simbolo: "🃏",
    significado: "Novos começos, espontaneidade, liberdade, inocência e aventura. Uma jornada sem medo rumo ao desconhecido.",
    invertida: "Imprudência, risco desnecessário, falta de direção e caos interior.",
    elemento: "Ar",
    palavrasChave: ["liberdade", "aventura", "inocência", "salto de fé"]
  },
  {
    id: 1,
    nome: "O Mago",
    numero: "I",
    simbolo: "🎩",
    significado: "Poder pessoal, habilidade, concentração e ação. Você tem todos os recursos necessários para alcançar seus objetivos.",
    invertida: "Manipulação, truques, falta de foco e potencial desperdiçado.",
    elemento: "Mercúrio",
    palavrasChave: ["poder", "habilidade", "manifestação", "recursos"]
  },
  {
    id: 2,
    nome: "A Sacerdotisa",
    numero: "II",
    simbolo: "🌙",
    significado: "Intuição, mistério, sabedoria interior e o subconsciente. Confie na sua voz interior.",
    invertida: "Segredos ocultos, desconexão da intuição e superficialidade.",
    elemento: "Lua",
    palavrasChave: ["intuição", "mistério", "sabedoria", "silêncio"]
  },
  {
    id: 3,
    nome: "A Imperatriz",
    numero: "III",
    simbolo: "👑",
    significado: "Fertilidade, abundância, natureza e criatividade. Um período de crescimento e nutrição.",
    invertida: "Dependência, bloqueio criativo, negligência e insegurança.",
    elemento: "Vênus",
    palavrasChave: ["abundância", "fertilidade", "criatividade", "natureza"]
  },
  {
    id: 4,
    nome: "O Imperador",
    numero: "IV",
    simbolo: "🏛️",
    significado: "Autoridade, estrutura, controle e liderança. Estabilidade através da disciplina e da ordem.",
    invertida: "Tirania, rigidez excessiva, dominação e inflexibilidade.",
    elemento: "Áries",
    palavrasChave: ["autoridade", "estrutura", "liderança", "estabilidade"]
  },
  {
    id: 5,
    nome: "O Hierofante",
    numero: "V",
    simbolo: "⛪",
    significado: "Tradição, conformidade, moralidade e espiritualidade. Busca por conhecimento e orientação espiritual.",
    invertida: "Rebeldia, subversão, dogmatismo e hipocrisia.",
    elemento: "Touro",
    palavrasChave: ["tradição", "espiritualidade", "ensinamento", "fé"]
  },
  {
    id: 6,
    nome: "Os Enamorados",
    numero: "VI",
    simbolo: "💕",
    significado: "Amor, harmonia, relacionamentos e escolhas. Uma decisão importante sobre valores e caminhos.",
    invertida: "Desequilíbrio, desarmonia, desalinhamento de valores e más escolhas.",
    elemento: "Gêmeos",
    palavrasChave: ["amor", "harmonia", "escolha", "união"]
  },
  {
    id: 7,
    nome: "O Carro",
    numero: "VII",
    simbolo: "⚔️",
    significado: "Determinação, vitória, controle e ambição. Supere obstáculos com força de vontade.",
    invertida: "Falta de controle, agressividade, obstáculos e derrota.",
    elemento: "Câncer",
    palavrasChave: ["vitória", "determinação", "controle", "conquista"]
  },
  {
    id: 8,
    nome: "A Força",
    numero: "VIII",
    simbolo: "🦁",
    significado: "Coragem, persuasão, influência e compaixão. Domínio interior através da gentileza.",
    invertida: "Fraqueza, insegurança, falta de autoconfiança e covardia.",
    elemento: "Leão",
    palavrasChave: ["coragem", "força interior", "compaixão", "domínio"]
  },
  {
    id: 9,
    nome: "O Eremita",
    numero: "IX",
    simbolo: "🏔️",
    significado: "Introspecção, solidão, orientação interior e sabedoria. Momento de buscar respostas dentro de si.",
    invertida: "Isolamento excessivo, solidão, paranoia e reclusão.",
    elemento: "Virgem",
    palavrasChave: ["introspecção", "solidão", "sabedoria", "busca interior"]
  },
  {
    id: 10,
    nome: "A Roda da Fortuna",
    numero: "X",
    simbolo: "🎡",
    significado: "Destino, ciclos, mudanças e sorte. A vida está em constante movimento e transformação.",
    invertida: "Má sorte, resistência à mudança, ciclos negativos e estagnação.",
    elemento: "Júpiter",
    palavrasChave: ["destino", "ciclos", "mudança", "sorte"]
  },
  {
    id: 11,
    nome: "A Justiça",
    numero: "XI",
    simbolo: "⚖️",
    significado: "Justiça, verdade, causa e efeito, lei. As consequências de suas ações chegarão.",
    invertida: "Injustiça, desonestidade, falta de responsabilidade e parcialidade.",
    elemento: "Libra",
    palavrasChave: ["justiça", "verdade", "equilíbrio", "karma"]
  },
  {
    id: 12,
    nome: "O Enforcado",
    numero: "XII",
    simbolo: "🔮",
    significado: "Sacrifício, nova perspectiva, pausa e rendição. Veja o mundo de um ângulo diferente.",
    invertida: "Martírio, indecisão, atraso desnecessário e resistência.",
    elemento: "Netuno",
    palavrasChave: ["sacrifício", "perspectiva", "pausa", "rendição"]
  },
  {
    id: 13,
    nome: "A Morte",
    numero: "XIII",
    simbolo: "💀",
    significado: "Transformação, fim de ciclos, mudança e renovação. Algo precisa acabar para algo novo começar.",
    invertida: "Resistência à mudança, medo, estagnação e decadência.",
    elemento: "Escorpião",
    palavrasChave: ["transformação", "fim", "renovação", "renascimento"]
  },
  {
    id: 14,
    nome: "A Temperança",
    numero: "XIV",
    simbolo: "🕊️",
    significado: "Equilíbrio, moderação, paciência e propósito. Encontre harmonia combinando opostos.",
    invertida: "Desequilíbrio, excesso, falta de visão de longo prazo e impaciência.",
    elemento: "Sagitário",
    palavrasChave: ["equilíbrio", "moderação", "paciência", "harmonia"]
  },
  {
    id: 15,
    nome: "O Diabo",
    numero: "XV",
    simbolo: "😈",
    significado: "Tentação, vícios, materialismo e apego. Cuidado com as correntes que você mesmo criou.",
    invertida: "Libertação, desapego, superação de vícios e independência.",
    elemento: "Capricórnio",
    palavrasChave: ["tentação", "vícios", "apego", "sombra"]
  },
  {
    id: 16,
    nome: "A Torre",
    numero: "XVI",
    simbolo: "⚡",
    significado: "Destruição, mudança repentina, revelação e caos. Estruturas falsas estão desmoronando.",
    invertida: "Medo da mudança, evitar desastre, adiar o inevitável.",
    elemento: "Marte",
    palavrasChave: ["destruição", "revelação", "caos", "libertação"]
  },
  {
    id: 17,
    nome: "A Estrela",
    numero: "XVII",
    simbolo: "⭐",
    significado: "Esperança, fé, renovação e inspiração. Após a tempestade, vem a calmaria e a luz.",
    invertida: "Falta de fé, desespero, desconexão e desilusão.",
    elemento: "Aquário",
    palavrasChave: ["esperança", "fé", "inspiração", "renovação"]
  },
  {
    id: 18,
    nome: "A Lua",
    numero: "XVIII",
    simbolo: "🌕",
    significado: "Ilusão, medo, ansiedade e o subconsciente. Nem tudo é o que parece — confie na intuição.",
    invertida: "Liberação do medo, clareza, superação de ansiedade.",
    elemento: "Peixes",
    palavrasChave: ["ilusão", "medo", "intuição", "subconsciente"]
  },
  {
    id: 19,
    nome: "O Sol",
    numero: "XIX",
    simbolo: "☀️",
    significado: "Alegria, sucesso, vitalidade e otimismo. Um período radiante de felicidade e realização.",
    invertida: "Tristeza temporária, excesso de otimismo e falta de clareza.",
    elemento: "Sol",
    palavrasChave: ["alegria", "sucesso", "vitalidade", "felicidade"]
  },
  {
    id: 20,
    nome: "O Julgamento",
    numero: "XX",
    simbolo: "📯",
    significado: "Renascimento, julgamento interior, absolvição e despertar. Hora de avaliar sua vida e fazer escolhas conscientes.",
    invertida: "Dúvida, autocrítica excessiva, recusa em aprender com o passado.",
    elemento: "Plutão",
    palavrasChave: ["renascimento", "julgamento", "despertar", "chamado"]
  },
  {
    id: 21,
    nome: "O Mundo",
    numero: "XXI",
    simbolo: "🌍",
    significado: "Completude, integração, realização e viagem. Um ciclo se completa com sucesso e plenitude.",
    invertida: "Incompletude, falta de fechamento, atalhos e atrasos.",
    elemento: "Saturno",
    palavrasChave: ["completude", "realização", "integração", "plenitude"]
  }
];
