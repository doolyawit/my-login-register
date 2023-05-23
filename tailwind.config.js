/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
        green: "#38470B",
        brown: "#A0855B",
        white: "#F9F6F2",
        beige: "#F1D6AB",
        red: "#BF382A",
      },
    },
  },
  plugins: [],
};
