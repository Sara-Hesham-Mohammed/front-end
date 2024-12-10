/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#e8eff8", // Light shade of the primary color
          200: "#6cafca", // Medium light shade
          300: "#366ea9", // Base primary color
          400: "#1c2c7c", // Darker shade of the primary color
          500: "#1F2041", // Darkest shade of the primary color
        },
        secondary: "#2d3143",
        textColor: "#09041b",
      },
    },
  },
  plugins: [],
};
