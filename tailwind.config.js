/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "950px",
      xl: "1320px",
      "2xl": "1536px",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },
    container: {
      center: true,
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
          light: "var(--primary-light)",
          DEFAULT: "var(--primary)",
          dark: "var(--primary-dark)",
        },
        secondary: {
          light: "var(--secondary-light)",
          DEFAULT: "var(--secondary)",
          dark: "var(--secondary-dark)",
        },
        gray: {
          light: "var(--gray-light)",
          DEFAULT: "var(--gray)",
          dark: "var(--gray-dark)",
        },
        green: "var(--green)",
        yellow: "var(--yellow)",
        blue: "var(--blue)",
        red: "var(--red)",
        black: "var(--black)",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
