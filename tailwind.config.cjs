/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.tsx', './index.html'],

  theme: {
    extend: {
      animation: {
          bounce: "bounce 1s infinite"
      },
      keyframes: {
        bounce: {
          '0%, 100%': {  
            transform: "translateX(-25%)", 
            'animation-timing-function': "cubic-bezier(0.8, 0, 1, 1)" },
          "50%": {
            transform: "translateX(0)",
            'animation-timing-function': "cubic-bezier(0, 0, 0.2, 1)"
          }
        }
      },
      backgroundImage:{
        blur: "url(/src/assets/blur-background.png)",
        backgroundSub: "url(/src/assets/react-background.png)"
        
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A',
        },
      },
    },
  },

  plugins: [],
}
