/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(217, 16%, 45%)",
        score: "hsl(229, 64%, 46%)",
        dark: "hsl(229, 25%, 31%)",
        back: "rgba(1,1,1,0.3)",
      },
      boxShadow: {
        "icon": "inset 0px 10px 0px 0px rgba(0,0,0,0.1)",
      },
    },
    backgroundImage: {
      main: "radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
      rock: "radial-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
      paper: "radial-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
      scissors: "radial-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
    },
    fontFamily: {
      barlow: ["Barlow Semi Condensed", "sans-serif"],
    },
  },
  plugins: [],
};
