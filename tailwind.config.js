/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Pixelify Sans"', 'cursive'],
        cute: ['"Fredoka One"', 'sans-serif'],
        script: ['"Pacifico"', 'cursive'],
      },
      colors: {
        blush: '#FFE4EC',
        sky: '#D8F3FF',
        peach: '#FFF1DB',
        rose: '#FFD6D6',
      },
    },
  },
  plugins: [],
}

