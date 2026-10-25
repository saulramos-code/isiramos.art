/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {

         brand: {
          DEFAULT: "#171614",
        },
        texto: {
          50: '#f8f8f8',
          100: '#efefef',
          200: '#d9d9d9',
          300: '#bfbfbf',
          400: '#8f8f8f',
          500: '#666666',
          600: '#4a4a4a',
          700: '#333333',
          800: '#1f1f1f',
          900: '#111111',
          950: '#171614'
        },

        naranja: {
          100: '#F28C2C',
        },

        naranjatinte: {
           50: "#FDF2E7",
           100: "#FBDABC",
           200: "#F8C391",
           300: "#F5AB66",
           400: "#F28C2C",
           500: "#F07C0F",
           600: "#C5650D",
           700: "#994F0A",
           800: "#6E3907",
           900: "#432304",
           950: "#180C02"
        },

        coral: {
          100: '#E39A8B',
        },

        coraltinte: {
         50: "#FAEDEA",
         100: "#F1CDC6",
         200: "#E8ACA1",
         300: "#E39A8B",
         400: "#D66C57",
         500: "#CD4C32",
         600: "#A83E29",
         700: "#833020",
         800: "#5E2317",
         900: "#39150E",
         950: "#150805"
}

      },

      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Inter', '"Source Sans Pro"', 'sans-serif'],
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
};