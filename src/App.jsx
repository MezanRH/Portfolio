import About from "./components/About"
import Contact from "./components/Contact"
import Container from "./components/Container"
import Project from "./components/Project"
import Skill from "./components/Skill"
import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"


function App() {

  return (
    <>
    <Container>
    <Navbar/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
    <Footer/>
    </Container>
    </>
  )
}

export default App
