import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1100px",
      xl: "1280px",
    },
    extend: {
      colors: {
        slate: "#1E2328",
        "off-white": "#F7F6F3",
        concrete: "#E9E6E0",
        steel: "#6B7280",
        "dark-steel": "#3B4148",
        red: "#B91C1C",
        "red-hover": "#DC2626",
        "red-soft": "rgba(185,28,28,.08)",
      },
      fontFamily: {
        serif: ["var(--font-instrument)", "serif"],
        sans: ["var(--font-inter-tight)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
