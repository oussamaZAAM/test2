/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "ac-gray": "#FAFAFA",
        "ac-gray2": "#DDDDDD",
        "ac-violet": "#644E9B",
        "ac-bleu": "#166BB3",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        'formation-unhover': '-4px -4px 6px 0px rgba(0, 0, 0, 0.25)',
        'formation-hover': '4px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'formation-card': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      }
    },
    screens: {
      'fold': '360px',
      'xs': '512px',
      'sm': '640px',
      'md': '768px',
      'xm': '890px',
      'lg': '1080px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
