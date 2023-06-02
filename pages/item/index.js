import ProductNavbar from '@/components/rare/navbar/ProductNavbar'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

const ItemImage = styled(Image)`
    width: 100px;
    height: 100px;
`
const PrimaryTextsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`


const item = [
    {
        id: 1,
        name: 'Rice',
        price: '$19.99',
        image: '/footer.jpg',
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
]

const index = () => {
    // item.forEach((item) => {
    //     item.comments.forEach((comment) => {

    //     });
    //   });
    return (
        <ProductNavbar/>
    )
}

export default index


