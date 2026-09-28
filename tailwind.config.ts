import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: { DEFAULT: '#F5412C', light: '#E03520' },
        surface: { dark: '#0B0B0B', light: '#FAFAFA' },
      },
    },
  },
  plugins: [],
};
export default config;
