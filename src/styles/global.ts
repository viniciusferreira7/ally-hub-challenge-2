import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme['blue-500']};
}

body, input, button {
  font:400 1rem 'Open Sans', sans-serif;
}
`
