/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#b57934",

          "secondary": "#5ee58d",

          "accent": "#23d14e",

          "neutral": "#25202D",

          "base-100": "#FCFCFD",

          "info": "#1E70EB",

          "success": "#22DD7C",

          "warning": "#8F640F",

          "error": "#FA4B42",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
  //...
}  