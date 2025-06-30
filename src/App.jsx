import './App.css'
import BackToTopBtn from './components/BackToTopBtn'
import Contact from './components/Contact'
import DarkModeBtn from './components/DarkmodeBtn'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

import 'aos/dist/aos.css';

function App() {

  return (
    <>
      
      <Navbar />
      {/* <DarkModeBtn /> */}
      {/* <BackToTopBtn/> */}
      <Header/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
