/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B1120',
        secondary: '#111827',
        card: '#1A2235',
        accent: '#6366F1',
        'accent-hover': '#4F46E5',
        'accent-light': '#818CF8',
        border: 'rgba(255,255,255,0.06)',
        'text-primary': '#F9FAFB',
        'text-muted': '#9CA3AF',
        'text-subtle': '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.7rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #6366F1, #818CF8)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(129,140,248,0.05))',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.3)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.4)',
        'accent': '0 4px 20px rgba(99,102,241,0.25)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
