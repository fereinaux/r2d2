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
    extend: {
      keyframes: {
        crawl: {
          '0%': { top: '-100px', transform: 'rotateX(20deg)  translateZ(0)' },
          '100%': { top: '-6000px', transform: 'rotateX(25deg) translateZ(-2500px);' },
        },
      },
      animation: {
        crawl: 'crawl 240s linear',
      }

    },
  },
  plugins: [],
}

