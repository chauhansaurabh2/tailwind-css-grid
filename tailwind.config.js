const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    // colors: {
    //   "light-blue": colors.lightBlue,
    //   cyan: colors.cyan,
    // },
    screens: {
      // mobile: { max: "767px" },
      // // => @media (min-width: 640px) { ... }

      // tablet: { max: "1023px" },
      // // => @media (min-width: 768px) { ... }

      // desktop: { max: "1440px" },
      mobile: { min: "340px", max: "767px" },
      tablet: { min: "768px", max: "1023px" },
      desktop: { min: "1024px", max: "1440px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
