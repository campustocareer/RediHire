/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF0000',
          light: '#FF3333',
          dark: '#CC0000',
        },
        secondary: {
          DEFAULT: '#FFFFFF',
          dark: '#F5F5F5',
        },
      },
      fontFamily: {
        abyssinica: ["Abyssinica SIL", "serif"],
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};