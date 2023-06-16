import React, { useState, useEffect, use } from 'react';
import styled from 'styled-components';
import { InputContainer, InputField } from '@/components/common/Input'
import { ProductPrice } from '@/components/uncommon/profile_components/Orders';
import { getLocalStorageItem, setLocalStorageItem } from '@/components/common/LocalStorage';
import Link from 'next/link';
import { devices } from '@/components/constants/devices';
import { Typography } from '@/components/common/Typography';

export const SButton = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@200&display=swap');
    
    display: flex;
    justify-content: center;
    width: 14rem;
    appearance: none;
    background-color: #E1BEA5;
    border: 2px solid #E1BEA5;
    border-radius: 6px;
    box-sizing: border-box;
    color: #070707;
    cursor: pointer;
    font-family: 'Urbanist', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    outline: none;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    touch-action: manipulation;
    will-change: transform;
  
  
  &:hover {
      color: #070707;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
      transform: translateY(-2px);
      border: 2px solid #070707;
  }
  
  &:active {
      box-shadow: none;
      transform: translateY(0);
  }
  
  &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
`

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 15%;
  @media ${devices.lg} {
    margin-top: 20%;
  }
  @media ${devices.md} {
    margin-top: 30%;
  }
  @media ${devices.sm} {
    margin-top: 40%;
  }
  @media ${devices.xs} {
    margin-top: 60%;
  }
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media ${devices.lg} {
    
  }

`;

const ProductImage = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  padding: 0px 30px;
`;
export const getStaticProps = async () => {
    try {
        const res = await fetch("http://localhost:8000/products/");
        const data = await res.json();
        const resp = await fetch('http://localhost:8000/products/');
        const dataa = await resp.json();
        return {
            props: {
                prods: dataa,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                prods: [],
            },
        };
    }


}

const SearchPage = ({ prods }) => {
    console.log(prods)
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [items, setItems] = useState([]);
    const [filtered, setFiltered] = useState();

    useEffect(() => {
        setItems(prods)
    }, []);


    const handleSearch = () => {
        const filtered = (prods.filter((item) => {
            item.title.includes(searchTerm)
        }))
        setFilteredItems(filtered);
    };

    return (
        <ContainerDiv>
            <InputContainer>
                <InputField
                    placeholder='Search'
                    id='search'
                    type='text'
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
                <SButton onClick={handleSearch}>Search</SButton>
            </InputContainer>
            <Container>
                {prods
                    .map((item) => (
                        <Link href={`/item/${item.title}`} key={item.url}>
                            <Item>
                                <ProductImage alt='alt' src={'/footer.jpg'} />
                                <ProductPrice>{item.title}</ProductPrice>
                                <ProductPrice>{"$"+item.price}</ProductPrice>
                            </Item>
                        </Link>
                    ))}
            </Container>
        </ContainerDiv>
    );
};

export default SearchPage;