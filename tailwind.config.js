/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        velour: {
          950: '#0C0C0D',
          900: '#151516',
          800: '#222224',
          700: '#38383C',
          500: '#71717A',
          300: '#D4D4D8',
          200: '#EAE6DF',
          100: '#F4F2ED',
          50: '#FAF9F6',
          gold: '#C5A880',
          'gold-dark': '#9A7B56',
        }
      },
      letterSpacing: {
        'luxury': '0.2em',
        'wide-luxury': '0.3em',
      }
    },
  },
  plugins: [],
};
