/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'olive': {
          50: '#f8f9f3',
          100: '#ebefd6',
          200: '#d8e0b8',
          300: '#c4d096',
          400: '#a7b968',
          500: '#8ca349',
          600: '#6b7e36',
          700: '#59682d',
          800: '#465228',
          900: '#3c4525',
          950: '#1f2612',
        },
        'gold': {
          50: '#fbf8eb',
          100: '#f6efc5',
          200: '#eeda8a',
          300: '#e5c14e',
          400: '#e1b339',
          500: '#d29726',
          600: '#b6771f',
          700: '#92581d',
          800: '#79461e',
          900: '#673c1d',
          950: '#3d1e0d',
        },
        'cream': {
          50: '#fefdf7',
          100: '#f9f4e6',
          200: '#f3e8cf',
          300: '#e7d2a9',
          400: '#d9b579',
          500: '#cc9a51',
          600: '#c18442',
          700: '#a06838',
          800: '#835534',
          900: '#6c482f',
          950: '#3c251a',
        },
      },
    },
  },
  plugins: [],
}

