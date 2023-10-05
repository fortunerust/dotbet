/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')
module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 5px 60px 15px rgba(0, 0, 0, 0.3)'
      }
    },
    minWidth: {
      8: '32px'
    }
  },
  plugins: []
})
