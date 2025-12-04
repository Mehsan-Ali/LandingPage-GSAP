import { ScrollTrigger, ScrollSmoother, SplitText } from 'gsap/all'
import { gsap } from 'gsap'
import NavBar from './components/NavBar'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText) // Register GSAP plugins globally
const App = () => {
  return (
    <main>
      <NavBar />
    </main>
  )
}

export default App
