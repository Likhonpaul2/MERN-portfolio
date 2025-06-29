import './App.css'
import BackToTopBtn from './components/BackToTopBtn'
import DarkModeBtn from './components/DarkmodeBtn'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <DarkModeBtn/>
      {/* <BackToTopBtn/> */}
      <Header/>
    </>
  )
}

export default App
