import lineClamp from "@tailwindcss/line-clamp"
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff6800',
      },
      lineHeight: {
        'extra-loose': '2.5',
      },
      truncate: {
        lines: {
          3: '3',
        },
      },
    },
  },
  plugins: [
    lineClamp
  ],
};
