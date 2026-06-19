/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7C3AED',
          dark: '#5B21B6',
        },
        secondary: '#06B6D4',
        accent: '#10B981',
        neutral: {
          light: '#F3F4F6',
          medium: '#E5E7EB',
        },
      },
      spacing: {
        'px-16': '16px',
        'px-8': '8px',
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['28px', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
};
