/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marine: {
          900: '#02042B',
          800: '#0a0e45',
        },
        brand: {
          teal: '#00D4AA',
        }
      }
    },
  },
  plugins: [],
}