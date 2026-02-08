/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // --- KEEP YOUR EXISTING COLORS ---
      colors: {
        marine: {
          900: '#02042B',
          800: '#0a0e45',
        },
        brand: {
          teal: '#00D4AA',
        }
      },
      // --- ADD ONLY THIS SECTION BELOW ---
      animation: {
        typing: 'typing 3.5s steps(30, end) forwards, blink .75s step-end infinite',
        sail: 'sail 25s linear infinite',
        slideUp: 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },
        sail: {
          '0%': { transform: 'translateX(-10vw) rotate(0deg)' },
          '25%': { transform: 'translateX(25vw) rotate(3deg)' },
          '50%': { transform: 'translateX(50vw) rotate(-3deg)' },
          '75%': { transform: 'translateX(75vw) rotate(2deg)' },
          '100%': { transform: 'translateX(110vw) rotate(0deg)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}