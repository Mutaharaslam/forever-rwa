/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem", // Base padding
        sm: "1rem", // Padding for small screens
        md: "1rem", // Padding for medium screens
        lg: "1.2rem", // Padding for large screens
        xl: "2rem", // Padding for extra large screens
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "950px",
      xl: "1320px",
      "2xl": "1536px",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      sans: ["Montserrat", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },
    backgroundImage: {
      "layyer-bg": "url('/src/assets/images/wave.png')",
    },
    extend: {
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        75: "4.688rem",
        128: "25rem",
        144: "36rem",
      },
      colors: {
        primary: {
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          DEFAULT: "var(--primary)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
          950: "var(--primary-950)",
        },
        secondary: {
          50: "var(--secondary-50)",
          100: "var(--secondary-100)",
          200: "var(--secondary-200)",
          300: "var(--secondary-300)",
          400: "var(--secondary-400)",
          500: "var(--secondary-500)",
          600: "var(--secondary-600)",
          700: "var(--secondary-700)",
          800: "var(--secondary-800)",
          900: "var(--secondary-900)",
          DEFAULT: "var(--secondary)",
        },
        green: "var(--green)",
        yellow: "var(--yellow)",
        blue: "var(--blue)",
        red: "var(--red)",
        black: "var(--black)",
        white: "var(--white)",
        "white-base": "var(--base-white)",
        "black-base": "var(--base-black)",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
