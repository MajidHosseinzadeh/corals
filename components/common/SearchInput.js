import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { FaSearch } from 'react-icons/fa'
import { SLink } from './Link';
import { setLocalStorageItem } from './LocalStorage';

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 8px;
  position: relative;
  background-color: black;

`;

const InputField = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 5px;
  font-size: 15px;
  color: white;
  background-color: black;
`;

const SearchIcon = styled(FaSearch)`
  width: 3rem;
  heigth: 3rem; 
  margin-left: 8px;
  color: white;
  cursor: pointer;
`;

const SearchInput = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearch = () => {
        setLocalStorageItem('fromLocal', true);
        setLocalStorageItem('myData', searchValue);
    };

    return (
        <InputContainer>
            <SLink href='/search'><SearchIcon onClick={handleSearch}/></SLink>
            <InputField
                type="text"
                placeholder="Search"
                value={searchValue}
                onChange={handleInputChange}
            />
        </InputContainer>
    );
};

export default SearchInput;
