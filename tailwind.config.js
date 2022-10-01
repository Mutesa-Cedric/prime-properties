const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans]
      },
      colors:{
        "primary-light":"#0984E3",
        "primary-dark":"#25517A",
        "gray-primary":"#333333"
      }
    },
  },
  plugins: [],
}
