/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        offwhite: '#F7F4EF',
        ink: '#1A1208',
        gold: '#C9A84C',
        'ink-gray': '#6A6050',
        cream: '#F0EAD8',
        'line-green': '#06C755',
        'page-black': '#0E0D0B',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        noto: ['Noto Serif JP', 'serif'],
        elite: ['Special Elite', 'serif'],
      },
    },
  },
  plugins: [],
};
