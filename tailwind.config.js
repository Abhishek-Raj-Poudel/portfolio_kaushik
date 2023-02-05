/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
        glassmorphism: "rgba(186,191,195,.1)",
        heading: "#1E2022",
        text_color: "#46525A",
        dark: {
          background: "#1E2022",
          photoBackground: "#C9D6DF",
          glassmorphism: "rgba(64,46,50,.1)",
          heading: "#F0F5F9",
          text_color: "#A6B1B8",
        },
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
