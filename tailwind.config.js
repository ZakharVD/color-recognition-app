/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Oxygen', 'sans-serif']
      },
      textColor: {
        subtext: '#81AFDD',
      }
    },
  },
  plugins: [],
}