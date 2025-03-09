/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-sans)", // Add a custom font-family using CSS variables
      },
    },
  },
  plugins: [],
}

