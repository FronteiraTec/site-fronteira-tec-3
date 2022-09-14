/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      backgroundImage: {
        'orange-waves': "url('./fundoMembros.png')"
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
  plugins: [require('flowbite/plugin')]
}
