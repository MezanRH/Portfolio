import About from "./components/About"
import Container from "./components/Container"
import Project from "./components/Project"
import Skill from "./components/Skill"
import Navbar from "./components/layout/Navbar"


function App() {

  return (
    <>
    <Container>
    <Navbar/>
    <About/>
    <Skill/>
    <Project/>
    </Container>
    </>
  )
}

export default App
