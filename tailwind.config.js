module.exports = {
  purge: ["index.html", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      neon: {
        light: '#08fdd8',
        DEFAULT: '#08fdd8',
        dark: '#00b398',
      },
      red: {
        light: '#ff7ce5',
        DEFAULT: '#fd2055',
        dark: '#d41b46',
      },
      gray: {
        darkest: '#2b2b2b',
        dark: '#3c4858',
        DEFAULT: '#1d1d1d',
        light: '#8d8d8d',
        lightest: '#f9fafc', 
      },
      white: {
          
          DEFAULT: '#ffffff',
          
        },
      black: {
        
        DEFAULT: '#000000',
        
      }
       }},
  variants: {
    extend: {},
  },
  plugins: [],
}
