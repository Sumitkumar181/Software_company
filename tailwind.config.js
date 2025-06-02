/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xss: "320px",
        xs: "480px",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        roboto: ["roboto", "sans-serif"],
        Allura: ["allura", "sans-serif"]

      },
      borderRadius: {
        '4xl': '2rem',    
        '5xl': '3rem',
        '7xl': '5rem',
      },
      colors: {
        rubyRed: "#C40014",
        lightText: "#4D5267",
        extraLightText: "#808080",
        blueDark: "#27334B",
        softWhite: "#ECECEC",
        softSilver: "#F1F1F1",
        starYellow: "#FAE100",
        darkBlue: "#0c1c2c",
        gray: "#646363",
        lightBlue: "#0288d1"
      },
      backgroundImage: {},
      boxShadow: {},
    },
  },
  darkMode: "class",
  plugins: [],
};
