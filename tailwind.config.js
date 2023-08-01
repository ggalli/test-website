/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    fontSize: {
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '3rem',
      '5xl': '4.5rem',
    },
    extend: {
      colors: {
        primary: {
          700: '#004851',
          500: '#007681',
        },
        secondary: {
          200: '#00DCC0',
          400: '#01CAB0',
        },
        success: '#4BAE4F',
        error: '#CB464A',
        black: '#000000',
        white: '#FFFFFF',
        gray: {
          100: '#F2F2F2',
          200: '#D9D9D9',
        },
        blue: {
          100: '#F2FDFF',
          200: '#D1EBF0',
        },
      },
      backgroundImage: {
        'contabilidade-hero-mobile': "url('/assets/images/contabilidade/hero.png')",
        'contabilidade-hero-desktop': "url('/assets/images/contabilidade/hero-desktop.png')",
        vida: "url('/assets/images/contabilidade/vida.png')",
        'home-financiamento': "url('/assets/images/credito/financiamento-e-emprestimo.jpg')",
        'home-contabilidade': "url('/assets/images/contabilidade/contabilidade-para-medicos.jpg')",
      },
    },
  },
  important: true,
  plugins: [],
};
