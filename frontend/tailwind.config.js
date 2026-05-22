/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#080E1D',
        secondary: '#0D1526',
        card: '#121C30',
        accent: '#6366F1',
        'accent-hover': '#4F46E5',
        'accent-light': '#A5B4FC',
        border: 'rgba(255,255,255,0.06)',
        'text-primary': '#F1F5F9',
        'text-muted': '#94A3B8',
        'text-subtle': '#64748B',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['DM Serif Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '2xs': '0.7rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'blink': 'blink 1s step-end infinite',
        'float': 'float-gentle 4s ease-in-out infinite',
        'shimmer': 'shimmer-slide 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'shimmer-slide': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #6366F1, #A78BFA)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(167,139,250,0.05))',
        'gradient-card': 'linear-gradient(145deg, #121C30, #0D1526)',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 12px 48px rgba(0,0,0,0.5)',
        'accent': '0 6px 24px rgba(99,102,241,0.35)',
        'glow': '0 0 40px rgba(99,102,241,0.2)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      letterSpacing: {
        'tightest': '-0.03em',
      },
    },
  },
  plugins: [],
}
