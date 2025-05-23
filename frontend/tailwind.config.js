const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

// const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".flowbite-react\\class-list.json"
  ],
  // content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ffd10f",
        primaryDark: "#A68705",
        primaryLight: "#FFE67B",
        secondary: "#391FB0",
        brandLightGray: "#9ca3af",
        brandDarkGray: "#374151",
      },
      container: {
        center: true,
        padding: {
          default: "2rem",
          // sm: "2rem",
        },
      },
    },
    screens: {
      "2xsm": "400px",
      xsm: "500px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [flowbiteReact],
  // plugins: [flowbite.plugin()],
};