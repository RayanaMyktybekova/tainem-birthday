/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-cream': '#FDFBF7',
        'soft-gold': '#D4AF37',
        'light-pink': '#FCE4EC',
        'dark-text': '#4A4A4A',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        heading: ['"Playfair Display"', 'serif'],
        poem: ['"Caveat"', 'cursive'],
      }
    },
  },
  plugins: [],
}
