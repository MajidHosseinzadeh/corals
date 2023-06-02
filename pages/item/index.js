import { Typography } from '@/components/common/Typography'
import { Paragraph } from '@/components/rare/Dreadlocks'
import ProductNavbar from '@/components/rare/navbar/ProductNavbar'
import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CartContainer } from '@/components/uncommon/profile_components/Orders'
import Navbar from '@/components/rare/navbar/Navbar'

const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    margin-top: 12%;
`

const ItemImage = styled(Image)`
    width: 25vw;
    height: 25vw;
    margin: 5%;
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
const item = {
    id: 1,
    name: 'Rice Cream',
    detail: 'Simple Text. Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur id suscipit ex.Suspendisse rhoncus laoreet purus quis elementum.',
    price: '$19.99',
    image: '/footer.jpg',
    about: [
        {id: 1,Title: 'title', Lorem: 'Lorem'},
        {id: 2,Title: 'title', Lorem: 'Lorem'},
        {id: 3,Title: 'title', Lorem: 'Lorem'},
        {id: 4,Title: 'title', Lorem: 'Lorem'},
        {id: 5,Title: 'title', Lorem: 'Lorem'},
        {id: 6,Title: 'title', Lorem: 'Lorem'},
        {id: 7,Title: 'title', Lorem: 'Lorem'},
        {id: 8,Title: 'title', Lorem: 'Lorem'},
        {id: 9,Title: 'title', Lorem: 'Lorem'},
        {id: 10,Title: 'title', Lorem: 'Lorem'},
        {id: 11,Title: 'title', Lorem: 'Lorem'},
        {id: 12,Title: 'title', Lorem: 'Lorem'},
    ],
    comments: [
        {
            commentId: 1,
            rate: 3.5,
            text: 'Great',
            user: 'alireza',
            date: '',
        },
        {
            commentId: 2,
            rate: 3.5,
            text: 'Great',
            user: 'alireza',
            date: '',
        },
        {
            commentId: 3,
            rate: 3.5,
            text: 'Great',
            user: 'alireza',
            date: '',
        },
        {
            commentId: 4,
            rate: 3.5,
            text: 'Great',
            user: 'alireza',
            date: '',
        },
        {
            commentId: 5,
            rate: 3.5,
            text: 'Great',
            user: 'alireza',
            date: '',
        },
        {
            commentId: 6,
            rate: 3.5,
            text: 'Great',
            user: 'alireza',
            date: '',
        },

    ]
}


const index = () => {

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

    // item.forEach((item) => {
    //     item.comments.forEach((comment) => {

    //     });
    //   });
    return (
        <>
            <Navbar />
            <PageContainer>
                <ItemImage src={'/footer.jpg'} alt='aaa' width={100} height={100} />
                <PrimaryTextsContainer>
                    <Typography color='#E1BEA5' fontSize="50px" fontWeight="bold">
                        {item.name}
                    </Typography>

                    <Typography width="70%" color='white' fontSize="20px" margin="20px 0px 0px 0px">
                        {item.detail}
                    </Typography>
                    <CartAndPrice>
                        <Typography color='white' fontSize="26px" fontWeight="bold">
                            {item.price}
                        </Typography>
                        <CartImage onClick={handleIncrement} />
                    </CartAndPrice>
                    {showCounter && <CountContainer>
                        <DIButton onClick={handleDecrement}>-</DIButton>
                        <CountDisplay>{num}</CountDisplay>
                        <DIButton onClick={handleIncrement}>+</DIButton>
                    </CountContainer>}
                    <ProductNavbar comments={item.comments} about={item.about}/>

                </PrimaryTextsContainer>
            </PageContainer>
        </>
    )
}

export default index


