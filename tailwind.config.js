module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/controls/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
      fontSize: {},
      spacing: {},
      maxWidth: {
      },
      maxHeight: {
      }
    }
  },
  variants: {
    extend: {
      textDecoration: ['focus-visible']
    }
  },
  plugins: []
}
