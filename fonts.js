// src/fonts.js or similar
import localFont from 'next/font/local'

export const myFont = localFont({
  src: [
    {
      path: '../fonts/Roobert-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Roobert-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    // Add other weights/styles as needed
  ],
  variable: '--font-roobert', // This creates a CSS variable
})