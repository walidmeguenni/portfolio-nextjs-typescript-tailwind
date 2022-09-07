/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          knight: "#0f1624",
          faintingLight: "#212d45",
          darklight: " rgba(255, 255, 255, 0.75)",
        },
        nightBlue: "#02073E",
        "windsor-way": "#9cc9e3",
        "warm-woolen": "#d0bb57",
        "peony-blush": "#d8bfbf",
        embroidery: "#d4c0c0",
        "madder-brown": "#6b3030",
        "rubby-Red": "#801414",
        "fainting-light": "#212D45",
      },
      padding: {
        "58-0-16": "58px 0 16px",
        "16-0-8": "16px 0 8px",
        "40-0-12": "40px 0 12px",
        "24-48-0": "24px 48px 0",
        "1-1.5": "1rem 1.5rem",
      },
      fontFamily: {
        dmSans: ["DM Sans"],
        droid: ["Droid Serif"],
      },
      margin: {
        "0-auto": "0 auto",
        "20-auto": "20px auto",
        "24-auto": "24px auto",
        "24-0-40": "24px 0 40px",
        "20-0-32": "20px 0 32px",
      },
      boxShadow: {
        buttonactive:
          "inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)",
        button:
          "inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)",
        card: "3px 3px 20px rgba(80, 78, 78, 0.5)     ",
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(400px, 1fr))",
        "auto-fit": "repeat(auto-fit, minmax(140px, 1fr))",
      },
    },

    screens: {
      xs: "480px",
      ss: "640px",
      sm: "768px",
      smd: "920px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
