/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      sans: ["Bai Jamjuree", "sans-serif"],
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        lighterCyan: "hsl(171, 66%, 60%)",
        strongCyan: "hsl(171, 66%, 44%)",
        strongerCyan: "hsl(171, 66%, 35%)",
        lighterBlue: "hsl(233, 100%, 75%)",
        lightBlue: "hsl(233, 100%, 69%)",
        lightBlueDarker: "hsl(233, 100%, 65%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
      },
      backgroundImage: {
        "header-pattern-mobile": "url('./images/bg-header-mobile.png')",
      },
    },
  },
  plugins: [],
};
