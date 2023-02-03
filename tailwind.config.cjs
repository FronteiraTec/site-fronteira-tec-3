/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'orange-waves': "url('./src/Assets/Backgrounds/fundoMembros.png')",
        'fronteira-tec1': "url('./src/Assets/Backgrounds/bgFronteiraTEC1.png')",
        'fronteira-tec2': "url('./src/Assets/Backgrounds/bgFronteiraTEC2.png')",
        'fronteira-tec3': "url('./src/Assets/Backgrounds/bgFronteiraTEC3.png')",
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
