/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
    },
    colors: {
      primaryBlue: "#1E1EF0",
      white: "#F2F1ED",
    },
  },
  plugins: [],
};
