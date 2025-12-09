module.exports = {
  darkMode: "class", // use class="dark" on <html> for dark mode
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        brand: {
          50: "#f5fafb",
          100: "#eaf6f8",
          500: "#0f766e", // optional accent
        },
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        subtleScale: {
          "0%": { transform: "scale(0.995)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 300ms ease-out both",
        "subtle-scale": "subtleScale 220ms ease-out both",
      },
    },
  },
  plugins: [],
};
