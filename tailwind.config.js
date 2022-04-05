module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              wordBreak: 'break-all'
            },
            p: {
              wordBreak: 'break-all'
            },
            li: {
              wordBreak: 'break-all'
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
