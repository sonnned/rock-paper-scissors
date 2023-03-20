/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(217, 16%, 45%)",
      },
    },
    backgroundImage: {
      main: "radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
    },
    fontFamily: {
      barlow: ["Barlow Semi Condensed", "sans-serif"],
    },
  },
  plugins: [],
};
