/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#08101d",
          panel: "#0d1728",
          line: "#1c2b44",
          accent: "#4d89ff",
          accentSoft: "#8fc5ff",
          cloud: "#edf4ff",
        },
      },
      boxShadow: {
        panel: "0 24px 90px -40px rgba(4, 12, 26, 0.9)",
      },
      fontFamily: {
        sans: ["Outfit", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        hero:
          "radial-gradient(circle at top left, rgba(77, 137, 255, 0.24), transparent 34%), radial-gradient(circle at 82% 18%, rgba(143, 197, 255, 0.14), transparent 22%), linear-gradient(180deg, rgba(8, 16, 29, 0.96), rgba(8, 16, 29, 1))",
      },
    },
  },
  plugins: [],
};
