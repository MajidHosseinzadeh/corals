import React from 'react'
import styled from 'styled-components'
import { BaseInfoFlex } from './Profile'
import { Typography } from '@/components/common/Typography'

const MyOrders = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-srart;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
`

const CartContainer = styled.div`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  align-items: center;
  justify-content: center;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
  padding: 0px 30px;

`;

const ProductImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
`;

const ProductPrice = styled.span`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
`;


const items = [
  [
  { id: 1, src: "/footer.jpg", price: "8$", },
  { id: 2, src: "/footer.jpg", price: "8$", },
  { id: 3, src: "/footer.jpg", price: "8$", },
  { id: 4, src: "/footer.jpg", price: "8$", },
  { id: 5, src: "/footer.jpg", price: "8$", },
  { id: 6, src: "/footer.jpg", price: "8$", },
  { id: 7, src: "/footer.jpg", price: "8$", },
  { id: 8, src: "/footer.jpg", price: "8$", },
  { id: 9, src: "/footer.jpg", price: "8$", },
  { id: 10, src: "/footer.jpg", price: "8$", },
  { id: 11, src: "/footer.jpg", price: "8$", },
  { id: 12, src: "/footer.jpg", price: "8$", },
  ],
  [
    { id: 1, src: "/footer.jpg", price: '9$', },
    { id: 2, src: "/footer.jpg", price: '9$', },
    { id: 3, src: "/footer.jpg", price: '9$', },
    { id: 4, src: "/footer.jpg", price: '9$', },
    { id: 5, src: "/footer.jpg", price: '9$', },
    { id: 6, src: "/footer.jpg", price: '9$', },
    { id: 7, src: "/footer.jpg", price: '9$', },
    { id: 8, src: "/footer.jpg", price: '9$', },
    { id: 9, src: "/footer.jpg", price: '9$', },
    { id: 10, src: "/footer.jpg", price: '9$', },
    { id: 11, src: "/footer.jpg", price: '9$', },
    { id: 12, src: "/footer.jpg", price: '9$', },
  ]

];


const Orders = () => {
  return (
    <BaseInfoFlex border='3px white solid' width='70%'>
      <Typography margin='20px 0'>Orders</Typography>
      <MyOrders>
        <CartContainer>
        {items[0].map((item) => (
            <ProductCard key={item.id}>
              <ProductImage alt="alt" src={item.src}/>
              <ProductPrice>{item.price}</ProductPrice>
            </ProductCard>
          ))}
          
        </CartContainer>
        <CartContainer>
        {items[1].map((item) => (
            <ProductCard key={item.id}>
              <ProductImage alt="alt" src={item.src}/>
              <ProductPrice>{item.price}</ProductPrice>
            </ProductCard>
          ))}
          
        </CartContainer>
        <CartContainer>
        {items[1].map((item) => (
            <ProductCard key={item.id}>
              <ProductImage alt="alt" src={item.src}/>
              <ProductPrice>{item.price}</ProductPrice>
            </ProductCard>
          ))}
          
        </CartContainer>
      </MyOrders>
    </BaseInfoFlex>
  )
}

export default Orders