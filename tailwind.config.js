const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    mode: "all",
    preserveHtmlElements: false,
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FFA400",
      },
      zIndex: {
        1: "1",
      },
    },
    fontFamily: {
      display: ['"Futura PT Bold"'],
      body: ['"Futura Book"'],
    },
  },
  variants: {
    extend: {
      backgroundColor: ["group-focus"],
      textColor: ["group-focus"],
    },
  },
  plugins: [],
};
