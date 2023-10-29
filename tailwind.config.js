/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{.html,.js}"],
  theme: {
    extend: {
      backgroundImage:{
        'image':"url('./images/desktop/image-header.jpg')",
      }
    },
  },
  plugins: [],
}

