/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    // fontFamily: {
    //   sans: ["Montserrat", "Padauk", "sans-serif"],
    //   },
    fontFamily: {
      sans: ["Montserrat", "Padauk", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      body: ["Hanken Grotesk", "sans-serif"],
      caveat: ["Caveat", "cursive"],
      heading: ["Playfair Display", "serif"],
    },
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
      },
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
          DEFAULT: "#FFE338", // Default stroke color
        },
        orderComplete: {
          DEFAULT: "#00E510", // Color indicating completed orders
        },
        // Add more color categories as needed
      },
    },
    },
  plugins: [require("flowbite/plugin")],
};
