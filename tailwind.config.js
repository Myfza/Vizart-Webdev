/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'exo': ['Exo 2', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          orange: '#ff6b35',
          purple: '#8b5cf6',
          magenta: '#d946ef',
          cyan: '#06b6d4',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.05)',
          medium: 'rgba(255, 255, 255, 0.08)',
          dark: 'rgba(0, 0, 0, 0.3)',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #ff6b35, #f7931e, #8b5cf6, #06b6d4)',
        'gradient-card': 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(139, 92, 246, 0.1))',
        'gradient-border': 'linear-gradient(135deg, rgba(255, 107, 53, 0.3), rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3))',
      },
      animation: {
        'gradient': 'gradient-animation 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
};