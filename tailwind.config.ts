import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "bg-light": "#FCFCFC",
      "bg-dark": "#1e1e1e",
      primary: "#32BC50",
      "text-primary-light": "#070101",
      "text-primary-dark": "#FEFEFE",
      "text-secondary-light": "#565656",
      "text-secondary-dark": "#D1D1D1",
      "neutral-1-light": "#ECECEC",
      "neutral-2-light": "#D1D1D1",
      "neutral-1-dark": "#434343",
      "neutral-2-dark": "#565656",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};

export default config;
