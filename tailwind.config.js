/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      // Remove the wine, gold, and navy color definitions
      fontFamily: {
        sans: ["var(--font-roobert)"], // This makes Roobert the default sans font
        // You can keep your other font definitions
        roobert: ["var(--font-roobert)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
} 