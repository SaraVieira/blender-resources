const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  plugins: [require("@tailwindcss/forms")],
};
