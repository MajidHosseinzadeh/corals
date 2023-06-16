// import { Typography } from "@/components/common/Typography";
// import Navbar from "@/components/rare/navbar/Navbar";
// import ProductNavbar from "@/components/rare/navbar/ProductNavbar";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import React, { useState } from "react";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import styled from 'styled-components'



// const PageContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: flex-start;
//     flex-direction: row;
//     margin-top: 12%;
// `

// const ItemImage = styled(Image)`
//     width: 25vw;
//     height: 25vw;
//     margin: 5%;
// `
// const PrimaryTextsContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: flex-start;
//     flex-direction: column;
// `

// const CartAndPrice = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-top: 20px;
// `
// const InformationsContainer = styled.div`

// `

// const CartImage = styled(AiOutlineShoppingCart)`
//     color: white;
//     width: 50px;
//     height: 50px;
//     cursor: pointer;
// `

// const CountContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-top: 20px;
// `
// const DIButton = styled.button`
//     @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@200&display=swap');
//     width: 50px;
//     heigth: 50px;
//     color: white;
//     border: 2px solid white;
//     background-color: black;
//     border-radius: 0px;
//     margin: 0px;
//     cursor: pointer;
//     text-align: center;
//     padding: 10px;
//     font-size: 20px;
// `
// const CountDisplay = styled.div`
//     @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@200&display=swap');
//     width: 100px;
//     heigth: 50px;
//     color: black;
//     background-color: white;
//     border: 2px solid white;
//     border-radius: 0px;
//     margin: 0px;
//     text-align: center;
//     padding: 10px;
//     font-size: 20px;
// `
// export const getStaticProps = async () => {
//     try {
//         const res = await fetch("http://localhost:8000/products/lipstick-boobi/comments");
//         const data = await res.json();
//         console.log(data)
//         return {
//             props: {
//                 comments: data,
//             },
//         };
//     } catch (error) {
//         console.error(error);
//         return {
//             props: {
//                 comments: [],
//             },
//         };
//     }
// }

// const ProductPage = () => {
//     const [num, setNum] = useState(0);
//     const [showCounter, setShowCounter] = useState(false);

//     const handleDecrement = () => {
//         if (num > 0) {
//             setNum(num - 1);
//         }

//     }
//     const handleIncrement = () => {
//         if (!showCounter) {
//             setShowCounter(true);
//         }
//         setNum(num + 1);
//     }
//     return (
//         <>
//             <Navbar />
//             <PageContainer>
//                 <ItemImage src={'/footer.jpg'} alt='aaa' width={100} height={100} />
//                 <PrimaryTextsContainer>
//                     <Typography color='#E1BEA5' fontSize="50px" fontWeight="bold">
//                         {id}
//                     </Typography>

//                     <Typography width="70%" color='white' fontSize="20px" margin="20px 0px 0px 0px">
//                         {id}
//                     </Typography>
//                     <CartAndPrice>
//                         <Typography color='white' fontSize="26px" fontWeight="bold">
//                             {id}
//                         </Typography>
//                         <CartImage onClick={handleIncrement} />
//                     </CartAndPrice>
//                     {showCounter && <CountContainer>
//                         <DIButton onClick={handleDecrement}>-</DIButton>
//                         <CountDisplay>{num}</CountDisplay>
//                         <DIButton onClick={handleIncrement}>+</DIButton>
//                     </CountContainer>}
//                     <ProductNavbar comments={comments} />

//                 </PrimaryTextsContainer>
//             </PageContainer>
//         </>
//     )
// }

// export default ProductPage

export const getStaticPaths = async () => {
    // try {
        //         const res = await fetch("http://localhost:8000/products/lipstick-boobi/comments");
        //         const data = await res.json();
        //         console.log(data)
        //         return {
        //             props: {
        //                 comments: data,
        //             },
        //         };
        //     } catch (error) {
        //         console.error(error);
        //         return {
        //             props: {
        //                 comments: [],
        //             },
        //         };
        //     }
    const res = await fetch('http://localhost:8000/products/');
    const data = await res.json();
    const paths = data.map(products => {
      return {
        params: { url: products.url }
      }
    })
    return {
      paths,
      fallback: false,
    }
  }
  
  export const getStaticProps = async (context) => {
    const url = context.params.url;
    const res = await fetch("http://localhost:8000/products/product/majid");
    const data = await res.json();
    return {
      props: { url: data }
    }
  }
  
  const Details = ({ url }) => {
    console.log(url)
    console.log("first")
    return (
      <div>
       {url}
      </div>
    );
  }
  
  export default Details;