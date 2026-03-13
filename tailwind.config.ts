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
        cream: "#F2EDE4",
        charcoal: "#1A1A1A",
        "warm-gray": "#8A8274",
        accent: "#C4502A",
        "accent-dark": "#A33D1E",
        "light-stone": "#E8E2D6",
        "off-white": "#FAFAF8",
        gold: "#B8963E",
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "serif"],
        sans: ["var(--font-outfit)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
