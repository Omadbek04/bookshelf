/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "form-bg": "rgb(254, 254, 254)",
        "btn-bg": "rgb(98, 0, 238)",
      },
      borderColor: {
        inputBorder: "rgb(235, 235, 235)",
        "notFound":"rgb(98, 0, 238)"
      },
      boxShadow: {
        inputShadow: "0px 4px 18px 0px rgba(51, 51, 51, 0.04)",
      },
      colors: {
        countBook: "rgb(98, 0, 238)",
      },
    },
  },
  plugins: [],
};
