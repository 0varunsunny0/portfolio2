/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#020617",
        secondary: "#0f172a",
        accent: {
          blue: "#00f2fe",
          cyan: "#4facfe",
        },
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s infinite ease-in-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: 0.8, filter: 'drop-shadow(0 0 5px #4facfe)' },
          '50%': { opacity: 1, filter: 'drop-shadow(0 0 20px #00f2fe)' },
        },
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'neon-gradient': 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
      },
      boxShadow: {
        'neon': '0 0 10px rgba(0, 242, 254, 0.5), 0 0 20px rgba(79, 172, 254, 0.3)',
        'neon-hover': '0 0 20px rgba(0, 242, 254, 0.8), 0 0 40px rgba(79, 172, 254, 0.5)',
      }
    },
  },
  plugins: [],
}
