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
        // Salty signature vibrant orange & warm peach tints
        orange: {
          DEFAULT: "#DD592A",
          hover: "#C74718",
          dark: "#B83E12",
          light: "#FBE7DE",
          soft: "#FFF6F2",
          border: "#F2D8CB",
        },
        salty: {
          DEFAULT: "#DD592A",
          orange: "#DD592A",
          hover: "#C74718",
          dark: "#B83E12",
          peach: "#FBE7DE",
          cream: "#FDF6E8",
          charcoal: "#2B2B2B",
          muted: "#6B6B66",
        },
        background: {
          DEFAULT: "#FDFBF8",
          secondary: "#FFFDFB",
          cream: "#FDF6E8",
          peach: "#FBE7DE",
          card: "#FFFFFF",
        },
        // Salty UI font shade & contrast tones
        espresso: {
          DEFAULT: "#2B2B2B",
          dark: "#1D1D1D",
          light: "#444441",
        },
        charcoal: {
          DEFAULT: "#2B2B2B",
          light: "#444441",
          muted: "#6B6B66",
        },
        // Mapped warm peach / Salty accent tones
        blush: {
          light: "#FFF7F2",
          DEFAULT: "#FBE7DE",
          medium: "#F5D4C4",
        },
        rose: {
          dusty: "#DD592A",
          deep: "#C74718",
        },
        champagne: {
          light: "#FFFDFB",
          DEFAULT: "#FDF6E8",
          dark: "#EEDCC5",
        },
        gold: {
          DEFAULT: "#DD592A",
          light: "#F5A17E",
          dark: "#C74718",
        },
        taupe: {
          DEFAULT: "#8C827A",
          light: "#EAD9CF",
          muted: "#A59C94",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        serif: ["var(--font-heading)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "slide-down": "slideDown 0.3s ease-out forwards",
        "pulse-subtle": "pulseSubtle 2.5s infinite ease-in-out",
        "marquee": "marquee 25s linear infinite",
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
          "50%": { opacity: "0.85" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(221, 89, 42, 0.06)",
        luxury: "0 10px 30px -4px rgba(43, 43, 43, 0.08)",
        floating: "0 20px 40px -6px rgba(221, 89, 42, 0.15)",
        salty: "0 8px 24px -4px rgba(221, 89, 42, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
