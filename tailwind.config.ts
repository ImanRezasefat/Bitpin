import type { Config } from "tailwindcss";
// colors created with https://uicolors.app/create
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3f56c3",
        secondary: "#3dc3ff",
        danger: "#f0434c",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;
