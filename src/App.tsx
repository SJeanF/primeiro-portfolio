import EstiloGlobal, { Container } from "./styles"
import SideBar from "./containers/SideBar"
import AboutMe from "./containers/AboutMe/index"
import Projects from "./containers/Projects"

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <SideBar />
        <main>
          <AboutMe />
          <Projects />
        </main>
      </Container>
    </>
  )
}

export default App
