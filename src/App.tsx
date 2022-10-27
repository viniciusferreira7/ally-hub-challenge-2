import { ThemeProvider } from 'styled-components'
import { Form } from './pages/Form'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/theme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Form />
      <GlobalStyles />
    </ThemeProvider>
  )
}
