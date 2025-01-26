// const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ffd10f",
        // secondary: "#f42c37",
        // brandYellow: "#fdc62e",
        // brandGreen: "#2dcc6f",
        // brandBlue: "#1376f4",
        // brandWhite: "#eeeeee",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [],
  // plugins: [flowbite.plugin()],
};
