import lightTheme from "./themes/light"
import { ThemeProvider } from "styled-components"
import EstiloGlobal, { Container } from "./styles"
import SideBar from "./containers/SideBar"
import AboutMe from "./containers/AboutMe/index"
import Projects from "./containers/Projects"
import darkTheme from "./themes/dark"
import { useState } from "react"

function App() {
  const [darkThemeUsed, setDarkThemeUsed] = useState(false)

  const trocaTema = () => {
    setDarkThemeUsed(!darkThemeUsed)
  }

  return (
    <ThemeProvider theme={darkThemeUsed ? darkTheme : lightTheme}>
      <EstiloGlobal />
      <Container>
        <SideBar trocaTema={trocaTema} />
        <main>
          <AboutMe />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
