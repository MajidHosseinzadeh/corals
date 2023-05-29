import Image from 'next/image';
import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import styled from 'styled-components';

const CartContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  padding: 16px;
  align-items: center;
  justify-content: flex-start;
`;

const Wrapper = styled.div`
  position: relative;
  
`;

const ArrowLeft = styled(AiOutlineArrowLeft)`
    background-color: white;
    color: black;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: absolute;
    z-index: 99;
    top: 100px;
    left: 10px;
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
    bottom: 100px;
    right: 10px;
    cursor: pointer;
    right: 0;
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
const items = [
  { id: 1, src: "/footer.jpg", width: 200, height: 200, price: 2, },
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
  { id: 12, src: "/footer.jpg", width: 200, height: 200, price: 1, },


];
const Cart = () => {
  const scrollRight = () => {
    const container = document.getElementById('cart-container');
    container.scrollBy({
      left: 256,
      behavior: 'smooth',
    });
  };

  const scrollLeft = () => {
    const container = document.getElementById('cart-container');
    container.scrollBy({
      left: -256,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <Wrapper>
        <ArrowLeft onClick={scrollLeft}></ArrowLeft>
      </Wrapper>
      <CartContainer id="cart-container">
        {items.map((item) => (
          <ProductCard key={item.id}>
            <ProductImage alt="alt" src={item.src} width={item.width} height={item.height} />
            <ProductPrice>{item.price}</ProductPrice>
          </ProductCard>
        ))}
      </CartContainer>
      <Wrapper>
        <ArrowRight onClick={scrollRight}></ArrowRight>
      </Wrapper>
    </div>
  );
};

export default Cart;
