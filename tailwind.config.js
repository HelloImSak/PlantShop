/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "340px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {},
    keyframes: {
      move: {
        "50%": { transform: "translateY(-1rem)" },
      },
      rotate: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
      scaleUp: {
        "0%": { transform: "scale(0.8)" },
        "50%": { transform: "scale(1.2)" },
        "100%": { transform: "scale(0.8)" },
      },
    },
    animation: {
      movingY: "move 3s linear infinite",
      rotating: "rotate 15s linear infinite",
      scalingUp: "scaleUp 10s ease-in-out infinite",
    },
    fontFamily: {
      Jost: ["Jost", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        default: "14px",
        md: "28px",
      },
    },
  },
  plugins: [],
};
