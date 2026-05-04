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
        midnight: "#08030f",
        eclipse: "#11071f",
        amethyst: {
          100: "#f0e7ff",
          300: "#c79cff",
          500: "#8a4fff",
          700: "#4b197d",
          900: "#1c092d"
        },
        gold: {
          200: "#f8e6a0",
          400: "#d9a441",
          600: "#9b6a18"
        }
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "mystic-radial":
          "radial-gradient(circle at top left, rgba(138,79,255,0.28), transparent 34%), radial-gradient(circle at 80% 12%, rgba(217,164,65,0.18), transparent 30%), linear-gradient(135deg, #08030f 0%, #160826 55%, #020106 100%)",
        "gold-line": "linear-gradient(90deg, transparent, rgba(248,230,160,0.76), transparent)"
      },
      boxShadow: {
        aura: "0 0 60px rgba(138,79,255,0.22)",
        gold: "0 20px 80px rgba(217,164,65,0.18)"
      }
    }
  },
  plugins: []
};

export default config;
