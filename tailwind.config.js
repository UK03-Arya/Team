/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm':'425px',
      'ms':'375px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1440px',
      
    },
    extend: {},
  },
  plugins: [],
}
