import React from 'react'
import { Button } from '../../common/Button'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import { SLink } from '@/components/common/Link'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #f5f5dc;
  min-width: 100%;
  max-width: 100%;
  height: 10%;
`
const Ul = styled.ul`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`
const Li = styled.li`
  margin: 2vw;
  & {
  }
`


const Navbar = () => {
  return (
    <Nav>
      <Link href='#link'>
          <div>Logo</div>
      </Link>
      <Ul>
        <Li>
          <Button font="12px" size='6rem' id='child' name="Home" color="white" border='#f5f5dc' background='black' hoverc='black' hoverb='white' hoverborder='black'/>
        </Li>
        <Li>
          <Button font="12px" size='6rem' id='child' name="About" color="white" border='#f5f5dc' background='black' hoverc='black' hoverb='white' hoverborder='black'/>
        </Li>
        <Li>
          <Button font="12px" size='6rem' id='child' name="Contact" color="white" border='#f5f5dc' background='black' hoverc='black' hoverb='white' hoverborder='black'/>
        </Li>
        <Li>
          <Button font="12px" size='6rem' id='child' name="Cosmetic" color="white" border='#f5f5dc' background='black' hoverc='black' hoverb='white' hoverborder='black'/>
        </Li>
      </Ul>
      <Ul>
        <Li>
          <SLink href='/login'>
      <Button name='Login' font="14px" size="6.5rem" background="#E1BEA5" color="#070707" border="#f5f5dc" hoverb="white" hoverc="#070707" hoverborder="#070707">
        Login
      </Button>
      </SLink>
      </Li>
      <Li>
      <SLink href='/register' hcolor='black'>
        Signup
      </SLink>
      </Li>
      </Ul>
    </Nav>
  )
}

export default Navbar