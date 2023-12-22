/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        test: "#000842",
        btnBlue: '#149BFC'
      },
      minWidth: {
        400: "400px",
      },
      customHoverBorder: {
        base: 'border-2 border-transparent',
        hover: 'hover:border-b-2 hover:border-b-slate-800',
      },
    },
  },

  plugins: [],
};
