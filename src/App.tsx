import { ThemeProvider } from 'styled-components'

import Header from './components/Header'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './global.css'
import GlobalStyle, { Container } from './styles'
import themaColors from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={themaColors}>
      <GlobalStyle />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
