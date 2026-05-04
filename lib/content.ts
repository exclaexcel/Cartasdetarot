import {
  BadgeCheck,
  Gem,
  HeartHandshake,
  MoonStar,
  Sparkles,
  Sun,
  WandSparkles
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/cristais", label: "Cristais" },
  { href: "/tarot", label: "Tarot" }
];

export const homeBenefits = [
  {
    icon: Sparkles,
    title: "Rituais com intenção",
    description:
      "Experiências guiadas para transformar autocuidado em um momento sagrado e acessível."
  },
  {
    icon: Gem,
    title: "Cristais selecionados",
    description:
      "Curadoria energética com linguagem clara para você escolher o cristal ideal para cada fase."
  },
  {
    icon: WandSparkles,
    title: "Tarot visual",
    description:
      "Uma jornada intuitiva para abrir caminhos, refletir escolhas e reconectar com sua própria luz."
  }
];

export const trustSignals = [
  { value: "+3k", label: "leituras inspiradas" },
  { value: "21", label: "cristais catalogados" },
  { value: "4.9", label: "experiência média" }
];

export const crystals = [
  {
    name: "Ametista",
    chakra: "Terceiro olho",
    ritual: "Use antes de dormir para silenciar ruídos mentais e abrir espaço para sonhos intuitivos.",
    description:
      "Acalma a mente, favorece meditação profunda e amplia a percepção intuitiva.",
    properties: ["Intuição", "Proteção", "Sono tranquilo"],
    gradient: "from-violet-500/40 via-purple-900/30 to-indigo-950"
  },
  {
    name: "Quartzo Rosa",
    chakra: "Coração",
    ritual: "Segure próximo ao peito por alguns minutos e mentalize uma frase de acolhimento.",
    description:
      "Suaviza emoções, fortalece autoestima e abre espaço para relações mais gentis.",
    properties: ["Amor-próprio", "Cura emocional", "Afeto"],
    gradient: "from-pink-300/40 via-fuchsia-900/25 to-purple-950"
  },
  {
    name: "Citrino",
    chakra: "Plexo solar",
    ritual: "Coloque na mesa de trabalho ao definir metas criativas ou decisões de prosperidade.",
    description:
      "Ativa criatividade, confiança e energia de abundância para novos ciclos.",
    properties: ["Abundância", "Criatividade", "Confiança"],
    gradient: "from-amber-300/45 via-yellow-700/25 to-purple-950"
  },
  {
    name: "Obsidiana Negra",
    chakra: "Raiz",
    ritual: "Use em rituais de limpeza quando precisar encerrar ciclos ou reforçar limites.",
    description:
      "Ajuda a cortar densidades, revelar padrões e sustentar limites energéticos.",
    properties: ["Limpeza", "Aterramento", "Limites"],
    gradient: "from-slate-700/55 via-black/60 to-purple-950"
  },
  {
    name: "Selenita",
    chakra: "Coronário",
    ritual: "Passe ao redor do campo energético para criar uma sensação de purificação leve.",
    description:
      "Eleva a vibração do ambiente e harmoniza outros cristais com suavidade.",
    properties: ["Purificação", "Paz", "Alinhamento"],
    gradient: "from-white/50 via-violet-100/20 to-purple-950"
  },
  {
    name: "Olho de Tigre",
    chakra: "Plexo solar",
    ritual: "Leve com você em momentos que pedem presença, coragem e foco prático.",
    description:
      "Une foco, proteção e presença para decisões com firmeza e magnetismo.",
    properties: ["Foco", "Coragem", "Magnetismo"],
    gradient: "from-orange-400/45 via-yellow-900/30 to-stone-950"
  }
];

export const cards = [
  {
    name: "A Sacerdotisa",
    archetype: "Intuição",
    message: "Escute os sinais silenciosos antes de agir.",
    gradient: "from-violet-500 via-indigo-950 to-black",
    Icon: MoonStar
  },
  {
    name: "A Estrela",
    archetype: "Esperança",
    message: "A cura aparece quando você volta a confiar no fluxo.",
    gradient: "from-blue-300 via-purple-900 to-black",
    Icon: Sparkles
  },
  {
    name: "O Sol",
    archetype: "Vitalidade",
    message: "Mostre sua luz sem reduzir o brilho para caber.",
    gradient: "from-gold-200 via-amber-700 to-purple-950",
    Icon: Sun
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
