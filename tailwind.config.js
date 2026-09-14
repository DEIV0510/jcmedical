/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FBF8F1',
          soft: '#F6F1E6',
        },
        paper: '#F1E9D8',
        ink: {
          DEFAULT: '#211D16',
          soft: '#514A3C',
          faint: '#6B6354',
        },
        night: {
          DEFAULT: '#17140F',
          soft: '#241F17',
        },
        gold: {
          100: '#F6E9CE',
          200: '#EBD5A4',
          300: '#DEC080',
          400: '#CDA764',
          500: '#B98A46',
          600: '#8A5F2A',
          700: '#78552C',
          800: '#5C4223',
        },
        botanical: '#333F2C',
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1360px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(33,29,22,0.04), 0 12px 32px -12px rgba(33,29,22,0.14)',
        lift: '0 8px 16px -8px rgba(33,29,22,0.18), 0 24px 48px -24px rgba(33,29,22,0.2)',
        gold: '0 8px 24px -8px rgba(185,138,70,0.45)',
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
