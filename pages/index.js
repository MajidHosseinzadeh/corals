
import { Button } from '@/components/common/Button'
import App from '@/components/rare/3D'
import Cart from '@/components/rare/CardItems'
import Dreadlocks from '@/components/rare/Dreadlocks'
import AnimatedScroll from '@/components/rare/Scroll'
import Navbar from '@/components/rare/navbar/Navbar'
import { StrictMode } from 'react'

const Home = () => {
  return (
    <StrictMode>
      <Navbar />
      <Dreadlocks />
      <Cart/>
      <AnimatedScroll/>
      <App/>
    </StrictMode>
  )
}

export default Home
