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
