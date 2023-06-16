
import AnimatedImage from '@/components/rare/Animated'
import Cart from '@/components/rare/CardItems'
import Dreadlocks from '@/components/rare/Dreadlocks'
import AnimaedScroll from '@/components/rare/Scroll'
import Navbar from '@/components/rare/navbar/Navbar'
import { StrictMode } from 'react'

const Home = () => {
  return (
    <StrictMode>
      <Dreadlocks />
      <Cart/>
      <AnimaedScroll/>
      {/* <App/> */}
    </StrictMode>
  )
}

export default Home
