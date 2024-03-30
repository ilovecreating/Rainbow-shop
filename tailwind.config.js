/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        ph600: '600px',
        // => @media (min-width: 600px) { ... }
        ph420: '420px',
        // => @media (min-width: 400px) { ... }
        ph300: '300px',
        // => @media (min-width: 300px) { ... }

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px'
        // => @media (min-width: 1280px) { ... }
      }
    }
  },
  plugins: []
}
