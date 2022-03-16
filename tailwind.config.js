module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Jost"', "sans-serif"],
    },
    extend: {
      colors: {
        bglight: "#F9FAFB",
        marrsgreen: "#008C8C",
        cardlight: "#EFF3F3",

        bgdark: "#2D2D2D",
        carrigreen: "#05CE91",
        carddark: "#383838",
        textlight: "#F9FAFB",
      },
    },
  },
  plugins: [],
};
