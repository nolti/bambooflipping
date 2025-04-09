/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Updated Primary Color
        primary: '#bd93f9', // New primary color #6750A4 #9877ba
        secondary: '#f8f8f2', // Foreground
        secondarypurple: '#4B4358',
        dark: '#282a36', // Background
        draculacurrent: '#44475a', // Current Line
        draculaselect: '#44475a', // Selection
        draculacomment: '#6272a4', // Comment
        draculacian: '#8be9fd',
        draculacianlight: '#a2c8ee',
        draculacianlightgrey: '#96ACB1',
        draculagreen: '#50fa7b', // Green
        draculaorange: '#ffb86c', // Orange
        draculapink: '#ff79c6', // Pink
        draculapurple: '#bd93f9', // Purple
        draculared: '#ff5555', // Red
        draculayellow: '#f1fa8c', // Yellow
        mdprimary: '#D3BCFD',
        mdonprimary: '#38265C',
        mdsecondary: '#CDC2DB',
        surface: '#DED8E0',
        surfacelight: '#e5e5e5',
        onsurface: '#36343A',
        onprimary: '#38265C',
        primarycontainer: '#EBDDFF',
        onsecondary: '#342D40',
        whatsapp: '#00A884',
        outline: '#7A757F',
        online: '#635B70',
        primaryfixed: '#D3BCFD',
        greyline: '#CBC4CF',
        graycian: '#3f4e65',
        graycianhover: '#4e617c',
        airbnb: '#E04A50',
        greybox: '#49454E',
        greyboxstrong: '#36343A',
        textboxdark: '#3A3A3A',
        graylight: '#E4E4E4',

        /* 
        Background: #2C2C2C (slate gray)
        Primary Text: #E4E4E4 ()
        Accent 1: #A8DADC (light cian)
        Accent 2: #FFC1CC (soft pink)
        Button/CTA: #B39CD0 (lavender)
        */
      },
      fontFamily: {
        sans: ['Ubuntu', 'sans'],
      },
      fontWeight: {
        normal: '100',
        bold: '700',
      },
      boxShadow: {
        custom: '-2px 8px 0 0', // Definición de sombra
      },
    },
  },
  plugins: [],
};
