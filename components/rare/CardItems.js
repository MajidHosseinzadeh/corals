import Image from 'next/image';
import { useRef, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import styled from 'styled-components';
import { Typography } from '../common/Typography';



const CartContainer = styled.div`
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  margin-top: 10px;
  margin-left: 25px;
  margin-right: 25px;
  width: max-content;
  transform: translateX(0px);
  transition: all 1s ease;
`

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 3rem;
`;

const ProductImage = styled(Image)`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  transition: all .8s ease;
  &:hover{
    transform: scale(1.2, 1.2);
    opacity: 0.8;
  }
`;

const ProductPrice = styled.span`
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
`;

const ArrowLeft = styled(AiOutlineArrowLeft)`
    background-color: white;
    color: black;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: absolute;
    z-index: 99;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    left: 0;
`
const ArrowRight = styled(AiOutlineArrowRight)`
    background-color: white;
    color: black;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: absolute;
    z-index: 99;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    right: 0;
`

const items = [
  { id: 1, src: "/footer.jpg", width: 200, height: 200, price: 1000, },
  { id: 2, src: "/footer.jpg", width: 200, height: 200, price: 1000, },
  { id: 3, src: "/footer.jpg", width: 200, height: 200, price: 1000, },
  { id: 4, src: "/footer.jpg", width: 200, height: 200, price: 1000, },
  { id: 5, src: "/footer.jpg", width: 200, height: 200, price: 1000, },
  { id: 6, src: "/footer.jpg", width: 200, height: 200, price: 1000, },
  { id: 7, src: "/footer.jpg", width: 200, height: 200, price: 1000, },
  { id: 8, src: "/footer.jpg", width: 200, height: 200, price: 1000, },
  { id: 9, src: "/footer.jpg", width: 200, height: 200, price: 1000, },
  { id: 10, src: "/footer.jpg", width: 200, height: 200, price: 1000, },
  { id: 11, src: "/footer.jpg", width: 200, height: 200, price: 1000, },
  { id: 12, src: "/footer.jpg", width: 200, height: 200, price: 1000, },


];

const Cart = () => {
  const [isMoving, setIsMoving] = useState(false);
  const [slideNumber, setSlideNumber] = useState(-1);

  const listRef = useRef();

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > -1 && !isMoving) {
      setIsMoving(true);
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${256 + distance}px)`;
      setTimeout(set, 1000);
    }
    if (direction === "right" && slideNumber < 5 && !isMoving) {
      setIsMoving(true);
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-256 + distance}px)`;
      setTimeout(set, 1000);
    }
  };

  function set() {
    setIsMoving(false);
  }

  return (
    <CartContainer>
      <Typography color='white' fontSize='40px'>Most</Typography>
      <Wrapper >
        <ArrowLeft onClick={() => handleClick("left")} />
        <Container ref={listRef}>
          {items.map((item) => (
            <ProductCard key={item.id}>
              <ProductImage alt="alt" src={item.src} width={item.width} height={item.height} />
              <ProductPrice>{item.price}</ProductPrice>
            </ProductCard>
          ))}
        </Container>
        <ArrowRight onClick={() => handleClick("right")} />
      </Wrapper>
    </CartContainer>
  );
};

export default Cart;

