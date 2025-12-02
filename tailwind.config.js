/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyan: {
          400: '#22d3ee',
          300: '#67e8f9'
        },
      },
      boxShadow: {
        'neon': '0 8px 30px rgba(34,211,238,0.08)'
      }
    },
  },
  plugins: [],
}
