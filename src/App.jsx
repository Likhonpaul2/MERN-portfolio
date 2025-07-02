import AnimatedCursor from 'react-animated-cursor'
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
import ScrollProgressBar from './components/ScrollProgressBar '

function App() {

  return (
    <>
    <ScrollProgressBar/>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0.2}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "black"
        }}
        outerStyle={{
          border: '1px solid black'
        }}
        style={{
          zIndex: 999, // Increase z-index to make cursor on top
          position: 'fixed',
        }}
        
      />
      
      <Navbar />
      <DarkModeBtn />
      {/* <BackToTopBtn/> */}
      <Header />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
