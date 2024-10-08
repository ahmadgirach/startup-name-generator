/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["IBM Plex Sans", "sans-serif"],
      },
      colors: {
        "dark-blue": "#050A30",
        "light-gray": "#a5a5a5",
      },
    },
  },
  plugins: [],
};
