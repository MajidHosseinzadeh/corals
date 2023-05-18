import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { InputContainer, InputField } from '@/components/common/Input'
import {ProductPrice } from '@/components/uncommon/profile_components/Orders';

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
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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


const SearchPage = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);


  useEffect(() => {
    const fetchedItems = [
      { id: 1, searchTitle: 'item 1 mohammad', price: '10$' },
      { id: 2, searchTitle: 'item 2', price: '10$' },
      { id: 3, searchTitle: 'item 3', price: '10$' },
      { id: 4, searchTitle: 'item 1', price: '10$' },
      { id: 5, searchTitle: 'item 2', price: '10$' },
      { id: 6, searchTitle: 'item 3', price: '10$' },
      { id: 7, searchTitle: 'item 1', price: '10$' },
      { id: 8, searchTitle: 'item 2', price: '10$' },
      { id: 9, searchTitle: 'item 3', price: '10$' },
      { id: 10, searchTitle: 'item 1', price: '10$' },
      { id: 11, searchTitle: 'item 2', price: '10$' },
      { id: 12, searchTitle: 'item 3', price: '10$' },
      { id: 13, searchTitle: 'item 1', price: '10$' },
      { id: 14, searchTitle: 'item 2', price: '10$' },
      { id: 15, searchTitle: 'item 3', price: '10$' },
      { id: 16, searchTitle: 'item 1', price: '10$' },
      { id: 17, searchTitle: 'item 2', price: '10$' },
      { id: 18, searchTitle: 'item 3', price: '10$' },
      { id: 19, searchTitle: 'item 1', price: '10$' },
      { id: 20, searchTitle: 'item 2', price: '10$' },
      { id: 21, searchTitle: 'item 3', price: '10$' },
      { id: 22, searchTitle: 'item 1', price: '10$' },
      { id: 23, searchTitle: 'item 2', price: '10$' },
      { id: 24, searchTitle: 'item 3', price: '10$' },
    ];
    setItems(fetchedItems);
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    setPage(1);
    setHasMore(true);
    const filtered = items.filter((item) =>
      item.searchTitle.includes(term)
    );
    setFilteredItems(filtered);
  };

  const loadMoreItems = () => {
    setEndIndex((prevEndIndex) => prevEndIndex + 10);
    setFilteredItems(items.slice(startIndex, endIndex));
  };

  return (
    <ContainerDiv>
      <InputContainer>
        <InputField
          placeholder='Search'
          id="search"
          type="text"
          value={searchTerm}
          onChange={handleSearch}
        />
      </InputContainer>
      <Container>
      {(searchTerm ? filteredItems : 
      items.slice(startIndex, endIndex)).map((item) => (
            <Item key={item.id}>
              <ProductImage alt="alt" src={'/footer.jpg'}/>
              <ProductPrice>{item.price}</ProductPrice>
            </Item>
          ))}
          
        </Container>
        {endIndex < items.length && (
        <SButton onClick={loadMoreItems}>Load More</SButton>
      )}
    </ContainerDiv>
  );
};

export default SearchPage;
