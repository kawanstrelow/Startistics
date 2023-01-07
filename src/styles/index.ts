import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
    theme: {
      colors: {
        white: '#fff',
  
        gray900: '#121214',
        gray800: '#202024',
        gray700: '#333333',
        gray500: '#525252',
        gray300: '#c4c4cc',
        gray100: '#e1e1e6',
  
        red500: '#fe0000',
        red200: '#f74f4f',
      },
  
      fontSizes: {
        md: '1.125rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
    },
  })