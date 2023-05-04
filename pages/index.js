
import { Button } from '@/components/common/Button'
import Cart from '@/components/rare/CardItems'
import Dreadlocks from '@/components/rare/Dreadlocks'
import Navbar from '@/components/rare/navbar/Navbar'


// const items = [
//   { id: 1, src: '/footer.jpg', price: 10, width: 1618, height: 1080, },
//   { id: 2, src: '/footer.jpg', price: 20, width: 1618, height: 1080, },
//   { id: 4, src: '/footer.jpg', price: 30, width: 1618, height: 1080, },
//   { id: 5, src: '/footer.jpg', price: 30, width: 1618, height: 1080, },
//   { id: 6, src: '/footer.jpg', price: 30, width: 1618, height: 1080, },
//   { id: 7, src: '/footer.jpg', price: 30, width: 1618, height: 1080, },
//   { id: 8, src: '/footer.jpg', price: 30, width: 1618, height: 1080, },
// ];
// {items.map((item, index) => (
//   <CartItem key={item.id} style={{ marginLeft: index === cartPosition ? 0 : '16px' }}>
//     <CartItemName>{item.name}</CartItemName>
//     <CartItemPrice>{item.price}</CartItemPrice>
//   </CartItem>
// ))}
{/* <ProductCard>
  <ProductImage src="/footer.jpg" width={1618} height={1080} />
  <ProductPrice>$10</ProductPrice>
</ProductCard> */}

const Home = () => {
  return (
    <div>
      <Navbar />
      <Dreadlocks />
      <Cart />
    </div>
  )
}

export default Home
