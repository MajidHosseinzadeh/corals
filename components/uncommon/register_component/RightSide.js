import { Button } from '@/components/common/Button'
import { MLink, SLink } from '@/components/common/Link'
import { Typography } from '@/components/common/Typography'
import { devices } from '@/components/constants/devices'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'



const RegSection = styled.div`
  width: 600px;
  height: 45rem;
  & .img{
    width: 600px;
    height: 45rem;
    opacity: 0.5;
  }
  @media ${devices.lg} {
    position: absolute;
    z-index: 0;
    & .img{
      opacity: 0.4;
    }
  }
`

const LoginContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  & Button{
    margin: 5px 20px;
  }
  @media ${devices.lg} {
    justify-content: center;
  }
`


const RightSide = () => {
  return (
    <RegSection>
      <LoginContainer>
        <label htmlFor='login'><Typography>already have an account ?</Typography></label>
        <SLink href='/login' >
          <Button name="Login" id="login" size='6rem' font="12px" background="#4091d7" color="#070707" border="#4091d7" hoverb="white" hoverc="#070707" hoverborder="#070707" />
        </SLink>
      </LoginContainer>
      <Image src='/regimg.jpg' width={1000} height={1500} className='img' alt='section' />
    </RegSection>
  )
}

export default RightSide