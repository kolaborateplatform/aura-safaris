/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-glimmer)', 'serif'],
        secondary: ['var(--font-roboto)', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 