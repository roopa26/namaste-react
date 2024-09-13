/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customTextColor: 'rgb(255, 211, 133)',
        h3HeadingColor: '#1C1C1C',
        subTitlesColor: 'rgb(105, 105, 105)',
        restroLocalityColor:'rgb(156, 156, 156)'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgb(12, 14, 17) 0%, rgb(12, 14, 17) 25%, rgb(12, 14, 17) 50%, rgba(12, 14, 17, 0.8) 80%, rgba(12, 14, 17, 0) 100%)',
      },
      // colors:{
      //   'h3HeadingColor': '#1C1C1C'
      // }
    }
  },
  plugins: [],
}

