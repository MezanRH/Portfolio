/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ["Inter"],
      },
      spacing: {
        'container': '1600px',
      },
      colors: {
        'primary': '#010716', 
        '2nd': '#111828', 
        '3rd': '#F8F4FF', 
        'color': '#18A5E0', 
      },
    },
  },
  plugins: [],
}

