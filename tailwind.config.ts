import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },

      typography: (theme) => ({
        main: {
          css: {
            "--tw-prose-links": theme("colors.primary"),
            "--tw-prose-invert-links": theme("colors.primary-dark"),
          },
        },
      }),
    },
    colors: {
      "bg-light": "#FCFCFC",
      "bg-dark": "#1d212b",
      primary: "#FD9011",
      "primary-dark": "#E07C52",
      "text-primary-light": "#070101",
      "text-primary-dark": "#FEFEFE",
      "text-secondary-light": "#565656",
      "text-secondary-dark": "#D1D1D1",
      "neutral-1-light": "#ECECEC",
      "neutral-2-light": "#D1D1D1",
      "neutral-3-light": "#B0B0B0",
      "neutral-1-dark": "#292e3d",
      "neutral-2-dark": "#33394d",
      "neutral-3-dark": "#3d445c",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};

export default config;
