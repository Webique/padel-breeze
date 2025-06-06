// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'pattern-topo': "url('https://www.heropatterns.com/static/patterns/topography.svg')",
      },
    },
  },
  plugins: [],
}
