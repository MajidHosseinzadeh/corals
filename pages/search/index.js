import React, { useState, useEffect, use } from 'react';
import styled from 'styled-components';
import { InputContainer, InputField } from '@/components/common/Input'
import { ProductPrice } from '@/components/uncommon/profile_components/Orders';
import { getLocalStorageItem, setLocalStorageItem } from '@/components/common/LocalStorage';

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
  const savedData = getLocalStorageItem('myData');
  const fromLocal = getLocalStorageItem('fromLocal');
  const [filtered, setFiltered] = useState([])
  useEffect(() => {
    fetchItems();
  }, []);

  
  const itemms = [
    {id: 1, searchTitle: 'item' }
  ]

  const fetchItems = async () => {
    try {
      const response = await fetch('/api/items');
      if (response.ok) {
        const data = await response.json();
        setItems(data);
      } else {
        console.error('Failed to fetch items:', response.statusText);
      }
    } catch (error) {
      console.error('Failed to fetch items:', error);
    }
  };

  const handleSearch = () => {
    setHasMore(true);
    if (fromLocal) {
      setFiltered(itemms.filter((item) =>
        item.searchTitle.includes(savedData)
      ))
      setLocalStorageItem('fromLocal', false)
    } else if (!fromLocal) {
      setFiltered(items.filter((item) =>
        item.searchTitle.includes(searchTerm)
      ))
    }

    setFilteredItems(filtered.slice(0, endIndex));
    setHasMore(filtered.length > endIndex);
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
          id='search'
          type='text'
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <SButton onClick={handleSearch}>Search</SButton>
      </InputContainer>
      <Container>
        {filteredItems.map((item) => (
          <Item key={item.id}>
            <ProductImage alt='alt' src={'/footer.jpg'} />
            <ProductPrice>{item.price}</ProductPrice>
          </Item>
        ))}
      </Container>
      {hasMore && <SButton onClick={loadMoreItems}>Load More</SButton>}
    </ContainerDiv>
  );
};

export default SearchPage;