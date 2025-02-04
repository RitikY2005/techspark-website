/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#8fbfda', //Its a light sky blue shade
        'cyber-purple': '#8fbfda', //Hex code is for sky blue not purple
        'cyber-pink': '#cdcfdb', //Hex code is for silver and not pink
        'cyber-dark-blue': '#000033',
        'gunmetal' : '#2a3135' //Its a grayish shade
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
        'tech': ['Manrope', 'sans-serif'],
        'spark': ['Black Future', 'sans-serif'],
        'mangrove': ['Mangrove', 'sans-serif']
      },
    },
  },
  plugins: [],
} 