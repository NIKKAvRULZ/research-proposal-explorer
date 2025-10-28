/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Custom colors can be added here
      },
      boxShadow: {
        'glass': '0 6px 18px rgba(15,23,42,0.08)',
        'dark-glass': '0 8px 28px rgba(2,6,23,0.6)',
      },
      borderRadius: {
        'custom': '14px',
      }
    },
  },
  plugins: [],
}