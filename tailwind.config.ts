import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0a041a",
        eclipse: "#1E1035",
        deep: "#1E1035",
        "deep-soft": "#2D1B4E",
        golden: "#C9A84A",
        "golden-light": "#E8CC6C",
        lavender: "#EDE6F7",
        plum: "#2D1B4E",
        candle: "#EDE6F7",
        amethyst: {
          100: "#F5F0FD",
          300: "#C9A9C5",
          500: "#9B6FC4",
          700: "#8854B9",
          900: "#1E1035"
        },
        gold: {
          200: "#E8CC6C",
          400: "#C9A84A",
          600: "#826A27"
        },
        ritual: {
          serenidade: "#9B6FC4",
          energia: "#C97A4A",
          intuicao: "#9A6A8D",
          purificacao: "#6FA88A"
        },
        serenidade: "#9B6FC4",
        energia: "#C97A4A",
        intuicao: "#9A6A8D",
        purificacao: "#6FA88A",
        "bg-light": "#F5F0FD",
        "bg-card": "rgba(30, 16, 53, 0.75)",
        "bg-surface": "rgba(30, 16, 53, 0.88)",
        surface: "rgba(30, 16, 53, 0.88)",
        card: "rgba(30, 16, 53, 0.75)",
        "bg-section-mid": "rgba(45, 20, 80, 0.70)",
        "bg-deep": "rgba(10, 4, 26, 0.98)",
        "text-primary": "#EDE6F7",
        "text-secondary": "rgba(237, 230, 247, 0.65)",
        "text-muted": "rgba(237, 230, 247, 0.45)",
        "border-gold": "rgba(212, 184, 74, 0.20)",
        "border-subtle": "rgba(237, 230, 247, 0.08)"
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        sans: ["var(--font-raleway)", "Raleway", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "mystic-radial":
          "radial-gradient(circle at top left, rgba(155,111,196,0.22), transparent 34%), radial-gradient(circle at 80% 12%, rgba(201,168,74,0.16), transparent 30%), linear-gradient(135deg, #0a041a 0%, #1E1035 55%, #0a041a 100%)",
        "gold-line": "linear-gradient(90deg, transparent, rgba(201,168,74,0.76), transparent)"
      },
      boxShadow: {
        aura: "0 0 60px rgba(155,111,196,0.20)",
        gold: "0 20px 80px rgba(201,168,74,0.18)"
      }
    }
  },
  plugins: []
};

export default config;
