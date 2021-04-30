module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightred: '#ff525d',
        verylightred: '#ff7a85',
        verydarkblue: '#1f3f5b',
        grayishblue: '#c8c8cb',
        verydarkgrayishblue: '#4b5862',
        verydarkblackblue: '#25252d',
        verydarkgrayblue: '#2c2d3f',
        verydarkdesaturatedblue: '#3f4164'
      },
      fontFamily: {
        overpass: ['Overpass'],
        ubuntu: ['Ubuntu']
      },
      borderRadius:{
        big: '5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
