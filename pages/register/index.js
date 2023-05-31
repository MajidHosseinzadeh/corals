import { devices } from '@/components/constants/devices'
import FormContainer from '@/components/uncommon/register_component/FormContainer'
import RightSide from '@/components/uncommon/register_component/RightSide'
import React from 'react'
import styled from 'styled-components'

const Register = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  @media ${devices.lg} {
  flex-direction: row;
  }
}
`


const index = () => {
  return (
    <Register>
      <RightSide />
      <FormContainer />
      
    </Register>
  )
}

export default index