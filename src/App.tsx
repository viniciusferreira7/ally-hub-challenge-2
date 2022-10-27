import { ThemeProvider } from 'styled-components'
import { Form } from './pages/Form'
import { GlobalStyles } from './styles/global'
import { DefaultTheme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Form />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
