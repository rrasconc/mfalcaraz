/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        star: "url('./assets/star.svg')",
      },
      keyframes: {
        fullPulse: {
          "0%": { opacity: 1 },
          "30%": { opacity: 0 },
        },
        fullPulseReverse: {
          "0%": { opacity: 0 },
          "30%": { opacity: 1 },
        },
      },
      animation: {
        loadingDot1: "fullPulseReverse 2s 0.7s infinite",
        loadingDot2: "fullPulse 2s 0.5s infinite",
        loadingDot3: "fullPulse 2s 0.6s infinite",
      },
      colors: {
        primaryBlue: "#1E1EF0",
        white: "#F2F1ED",
        gray: "#A8A7A7",
        secondaryGray: "#D9D9D9",
        yellow: "#FED500",
      },
    },
  },
  plugins: [],
};
