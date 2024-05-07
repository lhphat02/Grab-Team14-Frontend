/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'prim-1': '#00607A',
        'prim-2': '#005066',
        'prim-3': '#004052',
        'prim-4': '#00303D',
        'prim-5': '#002029',
        'prim-text-light': '#212529',
        'prim-text-dark': '#ffffff',
      },
      animation: {
        'loading-spin': 'loading-spin 1s infinite alternate',
      },
      keyframes: {
        'loading-spin': {
          '0%, 10%': {
            'background-size': '20% 100%',
          },
          '50%': {
            'background-size': '20% 20%',
          },
          '90%, 100%': {
            'background-size': '100% 20%',
          },
        },
      },
    },
  },
  plugins: [],
};
