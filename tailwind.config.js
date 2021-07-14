module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: "#f5f5f5",
        },
        black: {
          DEFAULT: "#1F1F1F",
        },
        orange: {
          DEFAULT: "#FFBA3B",
          light: "#ffca3b",
        },
      },
      boxShadow: {
        DEFAULT:
          "0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
