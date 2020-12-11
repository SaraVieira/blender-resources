const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      screens: {
        ...defaultTheme.screens,
        "max-2xl": { max: "1535px" },
        "max-xl": { max: "1279px" },
        "max-lg": { max: "1023px" },
        "max-md": { max: "768px" },
        "max-sm": { max: "639px" },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  plugins: [require("@tailwindcss/forms")],
};
