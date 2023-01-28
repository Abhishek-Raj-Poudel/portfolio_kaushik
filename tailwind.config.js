/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm_sans: ["DM Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#ED982A",
        background: "#F0F5F9",
        photoBackground: "#C9D6DF",
        glassmorphism_light: "rgba(186,191,195,.1)",
        heading: "#1E2022",
      },
      padding: {
        90: "360px",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
};
