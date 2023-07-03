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
      }
    },
    screens: {
      'xs': '512',
      'sm': '640px',
      'md': '768px',
      'xm': '986px',
      'lg': '1080px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
