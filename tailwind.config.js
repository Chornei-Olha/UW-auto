/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1442px',
        },
      },
      colors: {
        primary: {
          light: '#4da6ff',
          DEFAULT: '#0078ff',
          dark: '#0057b8',
        },
        secondary: {
          light: '#f8f9fa',
          DEFAULT: '#e9ecef',
          dark: '#dee2e6',
        },
        reinex: {
          blue: '#4d8fa7',
          'blue-light': '#508fa8',
          navy: '#13263e',
          'blue-alpha': '#4d8fa756',
          'blue-bg': '#4d8fa789',
          'blue-light-bg': '#4d8fa76d',
        },
        faq: {
          background: '#ffffff',
          text: '#000000',
          border: '#e5e7eb',
        },
        about: {
          'text-overlay': '#4d8fa770',
          'service-bg': '#4d8fa784',
          'content-bg': '#f7fbfc',
          'gradient-start': '#0e2e03',
          'gradient-mid': '#0e2e037f',
          'gradient-end': '#0e2e0300',
        },
        window: {
          'form-bg': 'rgba(255, 255, 255, 0.1)',
          'overlay-dark': 'rgba(0, 0, 0, 0.3)',
          'feature-bg': '#4d8fa756',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        360: '360px',
        250: '250px',
      },
      lineHeight: {
        439: '439px',
        305: '305px',
      },
      backgroundImage: {
        'gradient-reinex-blue': 'linear-gradient(135deg, #4d8fa7 0%, #ffffff 100%)',
        'gradient-reinex-service': 'linear-gradient(180deg, #508fa899 0%, #4d8fa799 100%)',
        'gradient-reinex-primary': 'linear-gradient(135deg, #508fa8 0%, #4d8fa7 100%)',
        'gradient-window-form':
          'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
