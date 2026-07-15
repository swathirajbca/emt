/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        deco: ['Marcellus', 'Georgia', 'serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        maroon: {
          DEFAULT: '#6B1D2F',
          deep: '#4A1220',
          soft: '#8C3145',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E8D399',
          deep: '#A9821F',
        },
        cream: {
          DEFAULT: '#FDFBF7',
          warm: '#F9E4C5',
          deep: '#F1E3CC',
        },
        blush: '#F4C2C2',
        ink: '#33161A',
        inkSoft: '#5C3A3F',
        border: 'hsl(var(--border))',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.75', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.06)' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
