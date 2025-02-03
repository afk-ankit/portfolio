/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "black",
        accent: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca6a5",
          400: "#f87271",
          500: "#f04443",
          600: "#dd2625",
          700: "#bd1d1c",
          800: "#991c1b",
          900: "#7f1e1d",
          950: "#450a0a",
          DEFAULT: "#bd1d1c",
        },
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
