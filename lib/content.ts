import {
  BadgeCheck,
  Circle,
  Flame,
  Gem,
  HeartHandshake,
  Moon,
  MoonStar,
  Sparkles,
  Sun,
  WandSparkles
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/cristais", label: "Cristais" },
  { href: "/tarot", label: "Tarot" },
  { href: "https://luzcomaromas.vercel.app", label: "Site LuzComAromas", external: true }
];

export const homeBenefits = [
  {
    icon: Flame,
    title: "Chamas de sabedoria",
    description:
      "Mensagens inspiradas na linguagem sensorial da LuzComAromas: presença, aroma, pausa e intenção."
  },
  {
    icon: Gem,
    title: "Cristais como coleção",
    description:
      "Cada pedra se conecta a um estado de alma: Serenidade, Energia, Intuição ou Purificação."
  },
  {
    icon: WandSparkles,
    title: "Tarot ritualístico",
    description:
      "Os 22 Arcanos Maiores foram traduzidos para o universo da chama, do cuidado e do aroma."
  }
];

export const trustSignals = [
  { value: "22", label: "arcanos maiores" },
  { value: "4", label: "coleções-guia" },
  { value: "1", label: "ritual por vez" }
];

export const crystals = [
  {
    name: "Ametista",
    chakra: "Coleção Intuição",
    ritual: "Acenda Intuição Lunar, segure a ametista e deixe a pergunta repousar antes de buscar resposta.",
    description:
      "Pedra da escuta interna. Ela suaviza o excesso de pensamento para que a sabedoria possa aparecer em silêncio.",
    properties: ["Lua interior", "Sonhos", "Escuta"],
    gradient: "from-intuicao/45 via-deep-soft/70 to-deep"
  },
  {
    name: "Quartzo Rosa",
    chakra: "Coleção Serenidade",
    ritual: "Use com Acalanto da Alma quando o corpo pedir maciez e a mente ainda não souber parar.",
    description:
      "Cristal de acolhimento. Ele lembra que descanso, afeto e gentileza também são formas de força.",
    properties: ["Acolhimento", "Maciez", "Amor-próprio"],
    gradient: "from-serenidade/45 via-[rgba(201,169,197,0.2)] to-deep"
  },
  {
    name: "Citrino",
    chakra: "Coleção Energia",
    ritual: "Coloque perto da rotina da manhã com Despertar Solar e escolha uma ação pequena para acender o dia.",
    description:
      "Pedra de movimento. Traz calor para decisões que pedem coragem, criatividade e presença no agora.",
    properties: ["Ação", "Brilho", "Coragem"],
    gradient: "from-golden-light/55 via-energia/35 to-deep"
  },
  {
    name: "Obsidiana Negra",
    chakra: "Coleção Purificação",
    ritual: "Use com Manto de Claridade para encerrar o peso do dia e abrir espaço no ambiente.",
    description:
      "Guardião de limites. Ajuda a nomear o que pesa, cortar ruídos e devolver firmeza ao corpo.",
    properties: ["Limpeza", "Limites", "Proteção"],
    gradient: "from-black/70 via-deep-soft to-purificacao/25"
  },
  {
    name: "Selenita",
    chakra: "Coleção Purificação",
    ritual: "Passe ao redor do espaço antes de acender a vela, como quem abre uma janela interna.",
    description:
      "Cristal de clareza leve. Ele organiza o campo sem pressa, como luz entrando devagar pela casa.",
    properties: ["Clareza", "Alinhamento", "Leveza"],
    gradient: "from-bg-light/60 via-purificacao/25 to-deep-soft"
  },
  {
    name: "Olho de Tigre",
    chakra: "Coleção Energia",
    ritual: "Segure antes de uma decisão e pergunte: qual gesto sustenta minha intenção hoje?",
    description:
      "Pedra de direção. Sustenta foco, magnetismo e a coragem de agir sem abandonar a própria essência.",
    properties: ["Foco", "Direção", "Magnetismo"],
    gradient: "from-energia/50 via-golden/30 to-deep"
  }
];

export const cards = [
  {
    number: 0,
    name: "O Louco",
    archetype: "Primeira chama",
    collection: "Energia",
    message: "Comece antes de saber tudo. A chama aprende o caminho enquanto arde.",
    ritual: "Acenda sua intenção e escolha um gesto pequeno para abrir passagem.",
    gradient: "from-energia via-golden/35 to-deep",
    Icon: Flame
  },
  {
    number: 1,
    name: "O Mago",
    archetype: "Intenção em mãos",
    collection: "Energia",
    message: "Você já tem matéria-prima: presença, desejo, corpo e respiração.",
    ritual: "Nomeie sua intenção antes que o aroma preencha o ambiente.",
    gradient: "from-golden-light via-energia/45 to-deep",
    Icon: WandSparkles
  },
  {
    number: 2,
    name: "A Sacerdotisa",
    archetype: "Lua interior",
    collection: "Intuição",
    message: "Quando a mente cala, a alma acende uma resposta baixa e firme.",
    ritual: "Feche os olhos por três respirações antes de interpretar o sinal.",
    gradient: "from-intuicao via-deep-soft to-deep",
    Icon: MoonStar
  },
  {
    number: 3,
    name: "A Imperatriz",
    archetype: "Acolhimento fértil",
    collection: "Serenidade",
    message: "Cuidar de si também cria mundos. Maciez é força em outra frequência.",
    ritual: "Prepare um canto bonito e permita que o corpo receba cuidado.",
    gradient: "from-serenidade via-[rgba(201,169,197,0.25)] to-deep",
    Icon: Sparkles
  },
  {
    number: 4,
    name: "O Imperador",
    archetype: "Limite sagrado",
    collection: "Purificação",
    message: "Estrutura é amor quando protege a sua energia do excesso.",
    ritual: "Escolha um limite simples para honrar até o fim do dia.",
    gradient: "from-purificacao via-deep-soft to-deep",
    Icon: BadgeCheck
  },
  {
    number: 5,
    name: "O Hierofante",
    archetype: "Ritual que ensina",
    collection: "Purificação",
    message: "O sagrado cabe no repetido: acender, respirar, permanecer.",
    ritual: "Repita um gesto de cuidado como quem assina um pacto consigo.",
    gradient: "from-purificacao via-golden/20 to-deep",
    Icon: Circle
  },
  {
    number: 6,
    name: "Os Enamorados",
    archetype: "Escolha com presença",
    collection: "Serenidade",
    message: "Escolher bem é ouvir o coração sem abandonar a própria verdade.",
    ritual: "Pergunte ao corpo o que suaviza e o que pesa.",
    gradient: "from-serenidade via-intuicao/35 to-deep",
    Icon: HeartHandshake
  },
  {
    number: 7,
    name: "O Carro",
    archetype: "Movimento alinhado",
    collection: "Energia",
    message: "Avance sem atropelar sua alma. Direção também precisa de respiração.",
    ritual: "Transforme pressa em foco e siga uma prioridade por vez.",
    gradient: "from-energia via-deep-soft to-deep",
    Icon: Sun
  },
  {
    number: 8,
    name: "A Força",
    archetype: "Fogo gentil",
    collection: "Energia",
    message: "A força verdadeira não grita. Ela sustenta a chama sem se consumir.",
    ritual: "Aja com firmeza, mas deixe espaço para o corpo descansar.",
    gradient: "from-golden-light via-energia/40 to-deep",
    Icon: Flame
  },
  {
    number: 9,
    name: "O Eremita",
    archetype: "Silêncio luminoso",
    collection: "Intuição",
    message: "A resposta que você procura precisa de menos ruído e mais escuta.",
    ritual: "Afaste uma distração e fique alguns minutos em presença.",
    gradient: "from-intuicao via-black/30 to-deep",
    Icon: Moon
  },
  {
    number: 10,
    name: "A Roda da Fortuna",
    archetype: "Ciclo aromático",
    collection: "Purificação",
    message: "O ciclo gira. O que hoje termina também abre espaço para aroma novo.",
    ritual: "Agradeça um encerramento antes de pedir o próximo começo.",
    gradient: "from-purificacao via-golden/25 to-deep",
    Icon: Sparkles
  },
  {
    number: 11,
    name: "A Justiça",
    archetype: "Clareza justa",
    collection: "Purificação",
    message: "A verdade não precisa ferir. Ela precisa limpar o que estava embaçado.",
    ritual: "Escreva uma decisão honesta em uma frase curta.",
    gradient: "from-purificacao via-bg-light/20 to-deep",
    Icon: BadgeCheck
  },
  {
    number: 12,
    name: "O Enforcado",
    archetype: "Pausa que revela",
    collection: "Serenidade",
    message: "Nem toda pausa é atraso. Algumas são a forma da alma reorganizar a luz.",
    ritual: "Adie a resposta e observe o que muda quando você descansa.",
    gradient: "from-serenidade via-deep-soft to-deep",
    Icon: MoonStar
  },
  {
    number: 13,
    name: "A Morte",
    archetype: "Cera que se transforma",
    collection: "Purificação",
    message: "O que derrete não se perde. Vira espaço, cheiro, memória e recomeço.",
    ritual: "Solte uma expectativa antiga e abra uma fresta para o novo.",
    gradient: "from-black via-purificacao/35 to-deep",
    Icon: Flame
  },
  {
    number: 14,
    name: "A Temperança",
    archetype: "Mistura sagrada",
    collection: "Serenidade",
    message: "Equilíbrio é dosar luz e sombra até o ambiente voltar a respirar.",
    ritual: "Escolha uma coisa para suavizar e outra para fortalecer.",
    gradient: "from-serenidade via-purificacao/30 to-deep",
    Icon: Sparkles
  },
  {
    number: 15,
    name: "O Diabo",
    archetype: "Apego em sombra",
    collection: "Purificação",
    message: "Olhe com coragem para o que prende. Nomear já começa a limpeza.",
    ritual: "Pergunte: o que estou mantendo por hábito, não por desejo?",
    gradient: "from-deep-soft via-black/70 to-energia/25",
    Icon: Circle
  },
  {
    number: 16,
    name: "A Torre",
    archetype: "Quebra necessária",
    collection: "Purificação",
    message: "Quando a estrutura cai, a luz encontra entradas que antes não existiam.",
    ritual: "Respire antes de reconstruir. Nem todo vazio precisa ser preenchido hoje.",
    gradient: "from-purificacao via-black/45 to-deep",
    Icon: WandSparkles
  },
  {
    number: 17,
    name: "A Estrela",
    archetype: "Esperança acesa",
    collection: "Serenidade",
    message: "A cura aparece devagar, como brilho pequeno que insiste na noite.",
    ritual: "Faça um pedido simples e deixe a chama testemunhar.",
    gradient: "from-serenidade via-intuicao/30 to-deep",
    Icon: Sparkles
  },
  {
    number: 18,
    name: "A Lua",
    archetype: "Mistério perfumado",
    collection: "Intuição",
    message: "Nem tudo precisa ser visto por inteiro para ser sentido com verdade.",
    ritual: "Confie no sinal que chega pelo corpo antes de virar explicação.",
    gradient: "from-intuicao via-deep-soft to-black",
    Icon: Moon
  },
  {
    number: 19,
    name: "O Sol",
    archetype: "Brilho permitido",
    collection: "Energia",
    message: "Seu brilho não precisa diminuir para caber. Ele também é cuidado.",
    ritual: "Escolha uma forma concreta de aparecer hoje.",
    gradient: "from-golden-light via-energia/45 to-deep",
    Icon: Sun
  },
  {
    number: 20,
    name: "O Julgamento",
    archetype: "Chamado interno",
    collection: "Intuição",
    message: "Algo em você sabe que está na hora de responder ao próprio chamado.",
    ritual: "Escute a frase que retorna muitas vezes. Ela quer virar ação.",
    gradient: "from-intuicao via-golden/25 to-deep",
    Icon: MoonStar
  },
  {
    number: 21,
    name: "O Mundo",
    archetype: "Ritual integrado",
    collection: "Serenidade",
    message: "Quando presença, aroma e intenção se encontram, você volta para casa em si.",
    ritual: "Finalize agradecendo o caminho e levando uma ação para a vida real.",
    gradient: "from-serenidade via-golden/30 to-deep",
    Icon: Gem
  }
];

export const ritualSteps = [
  {
    icon: MoonStar,
    title: "Respire",
    description: "Entre no clima com uma intenção simples e verdadeira."
  },
  {
    icon: HeartHandshake,
    title: "Escolha",
    description: "Selecione sua carta pelo chamado visual e emocional."
  },
  {
    icon: BadgeCheck,
    title: "Integre",
    description: "Transforme a mensagem em uma ação prática para hoje."
  }
];

export const featuredActions = [
  { icon: Sun, label: "Clareza para o dia" },
  { icon: MoonStar, label: "Ritual da lua" },
  { icon: Sparkles, label: "Banho energético" }
];
