const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "media",
  theme: {
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
