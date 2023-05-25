/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        secondary: "#e68455",
        primary: "#5faf5f",
      },
      fontSize: {
        xs: "15px",
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
