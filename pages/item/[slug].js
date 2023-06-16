import { Typography } from "@/components/common/Typography";
import Navbar from "@/components/rare/navbar/Navbar";
import ProductNavbar from "@/components/rare/navbar/ProductNavbar";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styled from 'styled-components'



const PageContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: row;
    width: 100%;
    height: 100%;
    margin-top: 12%;
`

const ItemImage = styled(Image)`
    width: 400px;
    height: 400px;
`
const PrimaryTextsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`

const CartAndPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const InformationsContainer = styled.div`

`

const CartImage = styled(AiOutlineShoppingCart)`
    color: white;
    width: 50px;
    height: 50px;
    cursor: pointer;
`

const CountContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`
const DIButton = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@200&display=swap');
    width: 50px;
    heigth: 50px;
    color: white;
    border: 2px solid white;
    background-color: black;
    border-radius: 0px;
    margin: 0px;
    cursor: pointer;
    text-align: center;
    padding: 10px;
    font-size: 20px;
`
const CountDisplay = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@200&display=swap');
    width: 100px;
    heigth: 50px;
    color: black;
    background-color: white;
    border: 2px solid white;
    border-radius: 0px;
    margin: 0px;
    text-align: center;
    padding: 10px;
    font-size: 20px;
`

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:8000/products/');
  const data = await res.json();
  const paths = data.map(products => {
    return {
      params: { slug: products.title }
    }
  })
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const res = await fetch(`http://localhost:8000/products/product/${slug}`);
  const resp = await fetch(`http://localhost:8000/products/${slug}/comments`);
  const data = await res.json();
  const comments = await resp.json();
  return {
    props: {
      product: data,
      comments: comments,
    }
  }
}

const ProductPage = ({ product, comments }) => {
  const [num, setNum] = useState(0);
  const [showCounter, setShowCounter] = useState(false);

  const handleDecrement = () => {
    if (num > 0) {
      setNum(num - 1);
    }

  }
  const handleIncrement = () => {
    if (!showCounter) {
      setShowCounter(true);
    }
    setNum(num + 1);
  }
  return (
    <>
      <PageContainer>
        <ItemImage src={'/footer.jpg'} alt='aaa' width={100} height={100} />
        <PrimaryTextsContainer>
          <Typography color='#E1BEA5' fontSize="50px" fontWeight="bold">
            {product.title}
          </Typography>

          <Typography width="70%" color='white' fontSize="20px" margin="20px 0px 0px 0px">
            {product.description}
          </Typography>
          <CartAndPrice>
            <Typography color='white' fontSize="26px" fontWeight="bold">
              {product.price}
            </Typography>
            <CartImage onClick={handleIncrement} />
          </CartAndPrice>
          {showCounter && <CountContainer>
            <DIButton onClick={handleDecrement}>-</DIButton>
            <CountDisplay>{num}</CountDisplay>
            <DIButton onClick={handleIncrement}>+</DIButton>
          </CountContainer>}
          <ProductNavbar comments={comments} />

        </PrimaryTextsContainer>
      </PageContainer>
    </>
  )

}

export default ProductPage;