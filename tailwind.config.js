/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at center, var(--tw-gradient-stops))",
      },
    },
  },
  screens: {
    xl: { max: "1400px" },
    lg: { max: "1150px" },
    md: { max: "767px" },
    sm: { max: "639px" },
    xs: { max: "479px" },
  },
  plugins: [],
};
