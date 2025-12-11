import { ScrollTrigger, ScrollSmoother, SplitText } from 'gsap/all'
import { gsap } from 'gsap'
import Hero from './components/Hero'
import About from './components/About'
import SVGAnimation from './components/SVGAnimation'
import TexStagger from './components/TexStagger'
import TextAnimationTwo from './components/TextAnimationTwo'
import HeroMain from './components/HeroMain'
import NavBar from './components/NavBar'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText) // Register GSAP plugins globally
const App = () => {
  return (
    <>
      <NavBar />
      <HeroMain />
      <Hero />
      <SVGAnimation />
      <About />
      <TexStagger />
      <TextAnimationTwo />
    </>
  )
}

export default App