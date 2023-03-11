/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {},
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768PX',
      md: '1060PX',
      lg: '1200px',
      xl: '1700px',
    },
    colors:{
      green:'#00AC73',
      gray: '#7E7E7E',
      bgGray: 'rgba(126, 126, 126, 0.1);',
      darkGreen: '#00504D',
    }

  },
  plugins: [],
}
