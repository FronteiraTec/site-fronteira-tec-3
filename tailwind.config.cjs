/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      backgroundImage: {
        'orange-waves': "url('./fundoMembros.png')",
        'fronteira-tec1': "url('./bgFronteiraTEC1.png')",
        'fronteira-tec2': "url('./bgFronteiraTEC2.png')",
        'fronteira-tec3': "url('./bgFronteiraTEC3.png')"
      },
      backgroundColor: {
        'white-fronteira': '#F5F5F5'
      },
      colors: {
        'orange-fronteira': '#F27C1A',
        'green-fronteira': '#006C3C'
      }
    }
  },
  plugins: [require('tw-elements/dist/plugin')]
}
