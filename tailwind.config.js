/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
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
        q: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
