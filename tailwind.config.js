/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: "#9f5085",
        dark: "#121212",
        light: "#eee",
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
