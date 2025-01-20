/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "rgba(255, 255, 255, 1)",
        "secondary-color": "rgba(136, 136, 136, 1)",
        "custom-gray": "rgba(224, 224, 224, 1)",
      },
      fontFamily: {
        "instrument-serif": ["Instrument Serif", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        sm: "100px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xl2: "1536px",
      },
      scale: {
        125: "1.25", // 125% scale
        150: "1.5", // 150% scale
        175: "1.75", // 175% scale
      },
    },
  },
  plugins: [],
};
