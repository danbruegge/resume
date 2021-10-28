const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: "media",
  theme: {
    colors,
    extend: {
      colors: {
        primary: colors.emerald["700"],
        primaryDark: "#aacc33",
      },
      fontSize: {
        sm: "20px",
        base: "25px",
        lg: "30px",
        xl: "35px",
        xxl: "40px",
      },
      screens: {
        print: { raw: "print" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
