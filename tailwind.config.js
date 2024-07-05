/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /bg-(red|blue|green|yellow|indigo|teal|orange|gray|cyan|purple|pink)-500/,
    },
    {
      pattern: /^(?!(?:scroll|bottom)$)(m|p)\w?-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
     'bg-white', 'bg-black',
  ],
  plugins: [],
}

