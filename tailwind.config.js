const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    mode: "all",
    preserveHtmlElements: false,
    content: ["./*.html"],
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
      minHeight: {
        "70vh": "70vh",
        "80vh": "80vh",
      },
      maxHeight: {
        "70vh": "70vh",
        "80vh": "80vh",
      },
    },
    fontFamily: {
      display: ['"Futura PT Bold"'],
      body: ['"Futura Book"'],
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover"],
      backgroundColor: ["group-focus"],
      textColor: ["group-focus"],
      translate: ["group-hover"],
      scale: ["active"],
    },
  },
  plugins: [],
};
