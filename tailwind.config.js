module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-blue": "#C22C4E"
      },
      spacing: {
        '35': '7rem'
      },
      maxWidth:{
        'ls': '20rem'
      },
      fontWeight:{
        'semiMedium': '400'
      },
      fontWeight:{
        'semiMedium': '400'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require ('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/forms')
  ],
}
