/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      sky: colors.sky,
      lime: colors.lime,
      cyan: colors.cyan,
      blue: colors.blue,
      green: colors.green,
    },
    extend: {
      colors: {
        blue: '#002244',
        green: '#69BE28',
        aqua: '#04a57b',
        gray: '#b4b3b4',
        white: '#f2f2f2',
        dark_gray: '#7c7c7c',
      }
    },
  },
  plugins: [],
}
