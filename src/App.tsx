import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { GlobalStyles } from './styles/global'
import { DefaultTheme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
