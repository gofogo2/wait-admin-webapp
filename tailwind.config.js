/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        samsungKaki: '#638c2e',
        samsungyellow: '#f9f8da',
        samsungselected: '#e6f1bf',
        
      }, keyframes: {
        pushMenuIn: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
        pushMenuOut: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0%)" },
        },
      },
      animation: {
        pushMenuIn: "pushMenuIn 0.2s ease-in-out forwards",
        pushMenuOut: "pushMenuOut 0.2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
