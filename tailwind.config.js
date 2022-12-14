/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        blur: "0px 4px 5px rgba(0, 0, 0, 0.02)",
      },
    },
  },
  plugins: [],
};
