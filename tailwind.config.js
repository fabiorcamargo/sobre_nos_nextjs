/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
        white: '#ffffff',
        black: '#000000',
        purple: '#611F69',
        'purple-claro': '#a004ff',
        lightgrey: '#8C8C8C',
        green: '#6B9F36',
        green400: '#90c457',
        lightpink: '#FCF6EF',
        orange: '#F9CD92',
        grey500: '#ECECEC',
        bgpink: '#FCF5EF',
        bgpurple: '#0d0e49',
        emailbg: '#6a4c6d',
        offwhite: ' #FDFDFD',
        offblack: '#333333',
        red: '#FF305C',
        yellow: '#FDC500',
        blue: '#425cf4',
        'y-contrast': '#392008',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
};
