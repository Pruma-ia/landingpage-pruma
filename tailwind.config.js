/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          base: "#f6f1f7",
          soft: "#eee6f2",
          line: "#e4dae9",
          panel: "#241f37",
          ink: "#161422",
          copy: "#5d586d",
          muted: "#8a839a",
          accent: "#7a65d8",
          glow: "#c8b9ff",
        },
      },
      boxShadow: {
        panel: "0 30px 90px -60px rgba(36, 31, 55, 0.35)",
      },
      fontFamily: {
        sans: ["Outfit", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        hero:
          "radial-gradient(circle at top left, rgba(122, 101, 216, 0.12), transparent 34%), radial-gradient(circle at 82% 18%, rgba(200, 185, 255, 0.16), transparent 22%), linear-gradient(180deg, rgba(246, 241, 247, 1), rgba(246, 241, 247, 1))",
      },
    },
  },
  plugins: [],
};
