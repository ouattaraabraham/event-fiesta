/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        navBar:'0 1px 5px #d3cece'
      },
      fontFamily:{
        enraSlabVariable:'enra-slab-variable,sans-serif',
      },
    },
  },
  plugins: [],
}

