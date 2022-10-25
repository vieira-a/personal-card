/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'stone': {
        200: '#E7E5E4',
        800: '#292524',
        900: '#1C1917',
      },
      'cyan': {
        300: '#67E8F9',
        500: '#06B6D4',
      },
    },
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 20,
      xl: 32,

    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif' 
      }
    },
  },
  plugins: [],
}
