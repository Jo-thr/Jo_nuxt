const percentageWidth = require('tailwindcss-percentage-width')
module.exports = {
  // purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    // Breakpoints
    screens: {
      mobile: { max: '768px' },
      tablet: '768px',
      // => @media (min-width: 768px) { ... }

      desktop: '1024px',
      // => @media (min-width: 1024px) { ... }
    },
    colors: {
      white: '#FCFCFC',
      offwhite: '#F7F7F7',
      orange: '#FAC536',
      blue: '#002FC7',
      black: '#2C2C2C',
    },
    extend: {
      fontFamily: {
        fontTitle: ['Cormorant Infant'],
        paragraph: ['Noto Sans'],
      },

      // Font Size
      // name: [fontSize, lineHeight],
      fontSize: {
        'header-h1': ['192px', '192px'],
        'header-h2': ['42px', '48px'],
        'mobile-h1': ['70px', '76px'],
        'mobile-h2': ['30px', '36px'],

        'desktop-paragraph': ['14px', '22px'],
        'mobile-paragraph': ['12px', '20px'],
      },
      height: {
        '5v': '5vh',
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '80v': '80vh',
        '90v': '90vh',
        full: '100%',
        screen: '100vh',
      },
      inset: {
        20: '20px',
        40: '40px',
        60: '60px',
        80: '80px',
        120: '120px',
        '10p': '10%',
        '20p': '20%',
        '25p': '25%',
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '75p': '75%',
        '80p': '80%',
        '90p': '90%',
        '5v': '5vh',
        '10v': '10vh',
        '15v': '15vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '80v': '80vh',
        '90v': '90vh',
        screen: '100vh',
      },
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
      60: '60px',
      80: '80px',
    },
  },

  variants: {
    extend: {
      opacity: ['responsive', 'hover', 'focus', 'disabled'],
      cursor: ['responsive', 'disabled', 'hover'],
      pointerEvents: ['responsive', 'disabled'],
      textColor: ['responsive', 'hover', 'focus', 'disabled'],
      backgroundColor: ['active', 'responsive', 'hover', 'focus', 'disabled'],
      fontWeight: ['hover', 'focus'],
      textDecoration: ['hover', 'focus'],
      scale: ['hover', 'focus'],
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [percentageWidth],
}
