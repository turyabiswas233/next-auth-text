/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        default_bg: "#474E68",
        primary: "#D8D8D8",
        secondery_bg: "#50577A",
      },
    },
  },
  plugins: [],
};
