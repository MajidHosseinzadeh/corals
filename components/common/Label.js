import styled from "styled-components";

export const SelectFileLabel = styled.label`
    @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@200&display=swap');

    background-color: #E1BEA5;
    border: 2px solid #E1BEA5;
    border-radius: 6px;
    box-sizing: border-box;
    color: #070707;
    cursor: pointer;
    font-family: 'Urbanist', sans-serif;
    font-size: 14px;
    font-weight: 600;
    padding: 8px 16px;
    text-align: center;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
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
`