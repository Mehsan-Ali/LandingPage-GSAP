import { ScrollTrigger, ScrollSmoother, SplitText } from 'gsap/all'
import { gsap } from 'gsap'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import SVGAnimation from './components/SVGAnimation'
import TexStagger from './components/TexStagger'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText) // Register GSAP plugins globally
const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <SVGAnimation />
      <About />
      <TexStagger />
      <About />
    </>
  )
}

export default App