/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#8fbfda',
        'cyber-purple': '#8000ff',
        'cyber-pink': '#ff00ff',
        'cyber-dark-blue': '#000033',
      },
      backgroundImage: {
        'cyber-grid': `radial-gradient(circle, rgba(0, 243, 255, 0.1) 1px, transparent 1px),
                       linear-gradient(to right, rgba(0, 243, 255, 0.1) 1px, transparent 1px),
                       linear-gradient(to bottom, rgba(0, 243, 255, 0.1) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'cyber': '24px 24px, 24px 24px, 24px 24px',
      },
      fontFamily: {
        'tech': ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 