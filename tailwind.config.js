/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ellipse': "url('/img/Ellipse1.png')",
        'polygon1': "url('/img/Polygon1.png')",
        'polygon2': "url('/img/Polygon2.png')",
      }
    },
  },
  plugins: [],
  include: [
    "src",
    "types"
  ]
}

 