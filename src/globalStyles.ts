import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
      margin:0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
  }

  :root {
  --color-bg: #242424;
  --color-white: rgb(255, 255, 255);
  --color-light: rgba(255, 255, 255, 0.6);
  --color-disabled: rgba(255, 255, 255, 0.4);
  --color-disabled-text: rgba(255, 255, 255, 0.2);

  --font-size-sm: 0.9rem;
  --font-size-md: 1.2rem;
  --font-size-lg: 1.4rem;
  --font-size-xl: 1.6rem;
  --font-size-xxl: 1.8rem;
  --font-size-xxxl: 2.4rem;

  --container-width-lg: 75%;
  --container-width-md: 86%;
  --container-width-sm: 90%;

  --transition: all 400ms ease;

  background-color: var(--color-bg);
  font-family: 'Inter', sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

html {
  scroll-behavior: smooth;
  overflow: auto;
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
}

::-webkit-scrollbar {
  display: none;
}

body {
  line-height: 1.7;
}
`

export interface Theme {
  colors: {
    primary: string
    secondary: string
    bg: string
    bgVar: string
    btnPrimary: string
    btnSecondary: string
    interactive: string
    inlineError: string
  }
  fonts: {
    primary: string
  }
}
