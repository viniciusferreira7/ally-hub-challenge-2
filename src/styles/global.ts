import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 1px ${(props) => props.theme.white};
}

::-webkit-scrollbar{
  width: 10px;
}

::-webkit-scrollbar-thumb{
  background-color: ${(props) => props.theme['blue-500']};
  border-radius: 5px;

}

::-webkit-scrollbar-track{
  background-color: ${(props) => props.theme.white};
  border-radius: 5px;

}

body, input, button {
  font:400 1rem 'Open Sans', sans-serif;
}

body {
  background: ${(props) => props.theme.white};
}
`
