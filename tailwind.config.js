// /** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 1s ease-out infinite",
      },
    },
  },
  plugins: [],
};
