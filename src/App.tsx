import { ScrollTrigger, ScrollSmoother, SplitText } from 'gsap/all'
import { gsap } from 'gsap'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText) // Register GSAP plugins globally
const App = () => {
  return (
    <>
      <div className='flex-center min-h-screen'>
        <h3 className='text-3xl text-indigo-300'>
          Landing Page GSAP
        </h3>
      </div>
    </>
  )
}

export default App
