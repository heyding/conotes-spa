module.exports = {
  mode: 'jit',
  prefix: '',
  purge: [
    './src/**/*.{html,ts}'
  ],
  content: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'conotes-blue': '#24273f'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
