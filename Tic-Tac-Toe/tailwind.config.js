/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caprasimo: ["Caprasimo", "cursive"],
      },
      backgroundImage: {
        "image1": "url('assets/bg-pattern-dark')",
        "image2": "url('assets/bg-pattern.png')",
      },
    },
  },
  plugins: [],
};
