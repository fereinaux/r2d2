/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-cyan-900',
    'bg-indigo-900',
    'bg-emerald-900',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

