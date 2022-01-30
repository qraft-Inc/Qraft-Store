module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./node_modules/tw-elements/dist/js/**/*.js"],
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
  plugins: [
    require('tw-elements/dist/plugin'),
    require ('@tailwindcss/aspect-ratio')
  ],
}
