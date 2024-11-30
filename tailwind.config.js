/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "black",
        accent: "#bd1d1c",
        secondary: "#03346E",
        primary: "white",
      },
      fontFamily: {
        roboto: "Roboto",
      },
    },
  },
  plugins: [],
};
