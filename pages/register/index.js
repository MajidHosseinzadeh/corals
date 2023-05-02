import FormContainer from '@/components/uncommon/register_component/FormContainer'
import RightSide from '@/components/uncommon/register_component/RightSide'
import React from 'react'
import styled from 'styled-components'

const Register = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-directions: row;
`


const index = () => {
  return (
    <Register>
        <FormContainer/>
        <RightSide/>
    </Register>
  )
}

export default index