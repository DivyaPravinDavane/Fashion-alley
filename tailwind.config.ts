import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#FAF7F2",
          secondary: "#FFFDFC",
          cream: "#F7F3EC",
          card: "#FFFFFF",
        },
        blush: {
          light: "#FBF3F4",
          DEFAULT: "#F0DDE0",
          medium: "#E5C8CD",
        },
        rose: {
          dusty: "#D5A1AB",
          deep: "#B87584",
        },
        champagne: {
          light: "#F6EFE6",
          DEFAULT: "#E8D8C5",
          dark: "#CDBAA3",
        },
        espresso: {
          DEFAULT: "#30231F",
          dark: "#201714",
          light: "#4A3934",
        },
        charcoal: {
          DEFAULT: "#292725",
          light: "#423E3A",
          muted: "#6B6560",
        },
        gold: {
          DEFAULT: "#B89A68",
          light: "#D4BC91",
          dark: "#987A49",
        },
        taupe: {
          DEFAULT: "#A99B8C",
          light: "#C5B9AC",
          muted: "#8E8172",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "Manrope", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out forwards",
        "slide-down": "slideDown 0.3s ease-out forwards",
        "pulse-subtle": "pulseSubtle 2.5s infinite ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(48, 35, 31, 0.05)",
        luxury: "0 10px 30px -4px rgba(48, 35, 31, 0.08)",
        floating: "0 20px 40px -6px rgba(48, 35, 31, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
