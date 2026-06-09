import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-cabinet)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        bg: "#090909",
        surface: "#111111",
        elevated: "#1A1A1A",
        border: "#222222",
        primary: "#FAFAFA",
        secondary: "#A1A1AA",
        accent: "#14B8A6",
        "accent-dim": "#0D9488",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        spotlight: "spotlight 2s ease forwards",
        "counter-in": "counterIn 1s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        spotlight: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        counterIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
