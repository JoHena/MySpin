/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',],
  theme: {
    extend: {
      backgroundImage: {
        'jp-bg': "url('assets/bg.jpg')",
      }
    },
  },
  plugins: [],
}

