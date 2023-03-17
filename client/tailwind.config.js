/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js/jsx,ts,tsx}"
  ],
  theme: {
    extend: {
       colors:{
        appOrange: "#E9A178",
        appYellow: "#F6E1C3",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
