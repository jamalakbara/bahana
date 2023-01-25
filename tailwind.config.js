/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Founders Grotesk', 'sans'],
      serif: ['Antic Didone', 'serif'],
    },
    extend: {
      colors: {
        'secondary-white': '#DDDDDD',
        'soft-black': '#131313',
        'soft-gray': '#898989',
      }
    },
  },
  plugins: [],
}