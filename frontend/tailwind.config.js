/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      colors: {
        erp: {
          blue: '#063970', // Main header blue
          yellow: '#ffcc00', // Yellow accent line
          dark: '#2d2d2d', // Sub header / nav bar
          hover: '#295b8d', // Hover state for dashboard cards
          sidebar: '#337ab7', // Academic menu header
          bg: '#f8f9fa',
          border: '#ddd',
        }
      },
    },
  },
  plugins: [],
}
