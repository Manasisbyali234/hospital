/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({ ".scrollbar-hide": { "-ms-overflow-style": "none", "scrollbar-width": "none", "&::-webkit-scrollbar": { display: "none" } } });
    },
  ],
};
