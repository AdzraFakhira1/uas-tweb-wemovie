module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        color1: '#c02f2e',
        color2: '#5b5f98',
        color3: '#030303',
        color4: '#616971',
        color5: '#f0eeeb'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
