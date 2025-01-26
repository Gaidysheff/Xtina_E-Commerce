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
        primaryDark: "#A68705",
        primaryLight: "#FFE67B",
        secondary: "391FB0",
        brandLightGray: "#9ca3af",
        brandDarkGray: "#374151",
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
