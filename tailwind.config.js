/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ['Roboto'],
      },
      colors: {
        primaryColor: "#242742",
        secondColor: "#19182B",
        thirdColor: "#FF6A3A",
        fourthColor: "#FF527B",
      },
      boxShadow: {
        customShadow: '0 16px 32px 0 rgba(255, 97, 85, 0.50)'
      },
    },
  },
  plugins: [],
};