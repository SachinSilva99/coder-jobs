/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        test: "#000842",
      },
      minWidth: {
        400: "400px",
      },
    },
  },
  plugins: [],
};
