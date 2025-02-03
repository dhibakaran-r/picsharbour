/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        prim: '#FE5657',
        sec: '#0B97B2',
        subsec: '#FE914D',
        primgray: '#737373',
        bgwhite: '#ffffff',
        secbg: '#BAD8E0',
        lggray: '#A6A6A6',
        hyellow: '#D6ED17FF',
        white: '#fff',
        wlg: '#E6E6FA',
        secdg: '#0a325e',
        crimson: '#dc143c',
        gray: '#808080',
        pbg: '#ffffff00',
        borderc: '#ffffff82',
        borderlg: '#BAB2B5',
        successlg: '#14A76C',
        danger: '#FF652F',
        wc: '#8a6350'
      },
    },
  },
  plugins: [],
}