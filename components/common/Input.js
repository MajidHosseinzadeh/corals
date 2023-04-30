import React from 'react'
import styled from 'styled-components'

const SInput = styled.input`
    border: none;
    border-bottom: 2px solid red;
    &:focus{
        outline: none;
    }
`


const Input = () => {
  return (
    <SInput type='text' placeholder='input'/>
  )
}

export default Input