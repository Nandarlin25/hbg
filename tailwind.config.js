/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    // fontFamily: {
    //   sans: ["Montserrat", "Padauk", "sans-serif"],
    //   },
    fontFamily: {
      emerald: ["Hanken Grotesk", "sans-serif"],
      caveat: ["Caveat", "cursive"],
      heading:["Playfair", "serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#18181B", // Primary dark color
          frame: "#FAFAFA", // Light frame color
        },
        secondary: {
          // Fixed typo from 'secondaty' to 'secondary'
          DEFAULT: "#71717A", // Secondary dark color
          card: "#F4F4F5", // Light card section color
        },
        footer: {
          DEFAULT: "#27272A", // Default footer color
        },
        nav: {
          DEFAULT: "#A1A1AA", // Default navigation color
          zic300: "#D4D4D8", // Additional nav color
        },
        border: {
          DEFAULT: "#D4D4D8", // Default border color
        },
        stroke: {
          DEFAULT: "#fafafa", // Default stroke color
        },
        orderComplete: {
          DEFAULT: "#00E510", // Color indicating completed orders
        },
        star:{
          solid:"#FFE338",
        },
        // Add more color categories as needed
        natural:{
          light:"#E7E7E7",
        },
  
        zinc: {
          100: '#f4f4f5', // Lightest zinc
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a', // Neutral gray
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#0f0f10', // Darkest zinc
        },
      }, 
    },
    },
  plugins: [require("flowbite/plugin")],
  
};
