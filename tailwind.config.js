/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Hover styles only on devices that can hover, so taps don't leave cards stuck in their hover state
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#14161a',
          soft: '#4b5160',
          faint: '#8a8f9c',
        },
        canvas: '#f7f5f0',
        line: '#e4e1d9',
        // Brand palette: each section/card picks one tone
        cobalt: { DEFAULT: '#1f5eff', deep: '#1647c7', soft: '#e7eeff' },
        coral: { DEFAULT: '#ff6a4d', deep: '#d9432a', soft: '#ffebe6' },
        mint: { DEFAULT: '#14b885', deep: '#0b8a62', soft: '#e0f6ee' },
        sun: { DEFAULT: '#ffc233', deep: '#a87700', soft: '#fff4d6' },
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'Geist', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      boxShadow: {
        card: '0 1px 2px rgba(20,22,26,0.04), 0 8px 24px -12px rgba(20,22,26,0.12)',
        lift: '0 2px 4px rgba(20,22,26,0.05), 0 24px 48px -20px rgba(20,22,26,0.25)',
      },
    },
  },
  plugins: [],
}
