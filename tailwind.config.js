/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        transparent: "transparent",
        orange: "#fe6e45",
        blue: "#4a79ec",
        yellow: "#fff87b",
        pink: "#feaefd",
        green: "#86f6cc",
        violet: "#7e3cf9",
        red: "#F45050",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
