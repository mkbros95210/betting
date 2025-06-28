/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#1B5E20', // green-800
        'primary-50': '#E8F5E8', // green-50
        'primary-100': '#C8E6C9', // green-100
        'primary-200': '#A5D6A7', // green-200
        'primary-300': '#81C784', // green-300
        'primary-400': '#66BB6A', // green-400
        'primary-500': '#4CAF50', // green-500
        'primary-600': '#43A047', // green-600
        'primary-700': '#388E3C', // green-700
        'primary-800': '#2E7D32', // green-800
        'primary-900': '#1B5E20', // green-900
        'primary-foreground': '#FFFFFF', // white

        // Secondary Colors
        'secondary': '#1565C0', // blue-700
        'secondary-50': '#E3F2FD', // blue-50
        'secondary-100': '#BBDEFB', // blue-100
        'secondary-200': '#90CAF9', // blue-200
        'secondary-300': '#64B5F6', // blue-300
        'secondary-400': '#42A5F5', // blue-400
        'secondary-500': '#2196F3', // blue-500
        'secondary-600': '#1E88E5', // blue-600
        'secondary-700': '#1976D2', // blue-700
        'secondary-800': '#1565C0', // blue-800
        'secondary-900': '#0D47A1', // blue-900
        'secondary-foreground': '#FFFFFF', // white

        // Accent Colors
        'accent': '#FF6F00', // orange-700
        'accent-50': '#FFF3E0', // orange-50
        'accent-100': '#FFE0B2', // orange-100
        'accent-200': '#FFCC80', // orange-200
        'accent-300': '#FFB74D', // orange-300
        'accent-400': '#FFA726', // orange-400
        'accent-500': '#FF9800', // orange-500
        'accent-600': '#FB8C00', // orange-600
        'accent-700': '#F57C00', // orange-700
        'accent-800': '#EF6C00', // orange-800
        'accent-900': '#E65100', // orange-900
        'accent-foreground': '#FFFFFF', // white

        // Background Colors
        'background': '#FAFAFA', // gray-50
        'background-secondary': '#F5F5F5', // gray-100
        'background-tertiary': '#EEEEEE', // gray-200

        // Surface Colors
        'surface': '#FFFFFF', // white
        'surface-secondary': '#F9F9F9', // gray-50
        'surface-tertiary': '#F5F5F5', // gray-100

        // Text Colors
        'text-primary': '#212121', // gray-800
        'text-secondary': '#757575', // gray-600
        'text-tertiary': '#9E9E9E', // gray-500
        'text-disabled': '#BDBDBD', // gray-400
        'text-inverse': '#FFFFFF', // white

        // Status Colors
        'success': '#2E7D32', // green-800
        'success-50': '#E8F5E8', // green-50
        'success-100': '#C8E6C9', // green-100
        'success-500': '#4CAF50', // green-500
        'success-foreground': '#FFFFFF', // white

        'warning': '#F57C00', // orange-700
        'warning-50': '#FFF8E1', // amber-50
        'warning-100': '#FFECB3', // amber-100
        'warning-500': '#FFC107', // amber-500
        'warning-foreground': '#212121', // gray-800

        'error': '#C62828', // red-800
        'error-50': '#FFEBEE', // red-50
        'error-100': '#FFCDD2', // red-100
        'error-500': '#F44336', // red-500
        'error-foreground': '#FFFFFF', // white

        // Border Colors
        'border': '#E0E0E0', // gray-300
        'border-secondary': '#EEEEEE', // gray-200
        'border-tertiary': '#F5F5F5', // gray-100
      },
      fontFamily: {
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'caption': ['Inter', 'system-ui', 'sans-serif'],
        'data': ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'lg': '0 8px 24px rgba(0, 0, 0, 0.15)',
        'xl': '0 16px 32px rgba(0, 0, 0, 0.2)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
      },
      animation: {
        'betting-pulse': 'betting-pulse 1.5s ease-in-out infinite',
        'micro-bounce': 'micro-bounce 200ms cubic-bezier(0.34, 1.56, 0.64, 1)',
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'slide-down': 'slideDown 300ms ease-out',
      },
      keyframes: {
        'betting-pulse': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1.0' },
        },
        'micro-bounce': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.98)' },
          '100%': { transform: 'scale(1)' },
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slideUp': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slideDown': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        '200': '200ms',
        '250': '250ms',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        '1000': '1000',
        '1100': '1100',
        '1200': '1200',
        '1300': '1300',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}