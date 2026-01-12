/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          900: '#0c4a6e'
        },
        dark: {
          50: '#0f172a',
          100: '#1e293b',
          900: '#020617'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
      },
      boxShadow: {
        'glass': '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)',
        'glass-lg': '0 10px 15px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.1)'
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-soft': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    }
  },
  plugins: []
}