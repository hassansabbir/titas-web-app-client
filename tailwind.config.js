/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      displayOne: ["Montserrat", "sans-serif"],
      displayTwo: ["Raleway", "sans-serif"],
      displayThree: ["Arsenal SC", "sans-serif"],
    },
    extend: {
      animation: {
        border: "border 2s linear infinite",
      },
      keyframes: {
        border: {
          to: { "--border-angle": "360deg" },
        },
      },
    },
  },
  plugins: [],
};
