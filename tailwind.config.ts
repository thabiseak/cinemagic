import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#ED4001', // Premium Orange/Red
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        cosmic: {
          black: '#000000',
          purple: '#1a0b2e',
          blue: '#0f0f23',
          gold: '#ED4001',
          silver: '#C0C0C0',
        },
        space: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'parallax': 'parallax 20s linear infinite',
        'cosmic-glow': 'cosmicGlow 3s ease-in-out infinite',
        'sparkle': 'sparkle 20s linear infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        parallax: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-100px)' },
        },
        cosmicGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(237, 64, 1, 0.3)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(237, 64, 1, 0.6), 0 0 60px rgba(237, 64, 1, 0.3)',
          },
        },
        sparkle: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-100px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(237, 64, 1, 0.5)',
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(237, 64, 1, 0.8), 0 0 30px rgba(237, 64, 1, 0.6)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(237,64,1,0.3) 100%)',
        'cosmic-gradient': 'linear-gradient(135deg, #000000 0%, #0f0f23 50%, #1a0b2e 100%)',
        'star-field': 'radial-gradient(circle at 20% 80%, rgba(237, 64, 1, 0.1) 0%, transparent 50%)',
        'nebula': 'radial-gradient(circle at 80% 20%, rgba(15, 15, 35, 0.8) 0%, transparent 50%)',
        'galaxy': 'radial-gradient(circle at 40% 40%, rgba(26, 11, 46, 0.6) 0%, transparent 50%)',
      },
      boxShadow: {
        'cosmic': '0 0 20px rgba(237, 64, 1, 0.3)',
        'cosmic-lg': '0 0 40px rgba(237, 64, 1, 0.2), 0 0 60px rgba(237, 64, 1, 0.1)',
        'space': '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(237, 64, 1, 0.2)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
