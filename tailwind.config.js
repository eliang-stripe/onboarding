/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#353A44',
        'secondary': '#717171',
        'accent': '#0074D4',
        'alert': '#DF1B41',
      },
      containers: {
        'small': '400px',
        'medium': '550px',
        'large': '800px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}

