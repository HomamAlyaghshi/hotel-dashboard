/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // <-- مهم لتفعيل Dark Mode باستخدام class
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        secondary: "#F1F5F9",
        accent: "#10B981",
        danger: "#EF4444",
        warning: "#F59E0B",
        background: "#F9FAFB",
        dark: "#0F172A",

        // ألوان خاصة بالوضع الليلي
        darkBg: "#1E293B",
        darkCard: "#334155",
        darkText: "#E2E8F0",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        arabic: ["Cairo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
