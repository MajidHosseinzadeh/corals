import React from 'react'
import { Button } from '../../common/Button'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: white;
  max-width: 100%;
`
const Ul = styled.ul`
  width: 70vw;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
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
          <Button font="12px" size='6rem' id='child' name="Home" color="white" border='white' background='black' hoverc='black' hoverb='white' hoverborder='black'/>
        </Li>
        <Li>
          <Button font="12px" size='6rem' id='child' name="About" color="white" border='white' background='black' hoverc='black' hoverb='white' hoverborder='black'/>
        </Li>
        <Li>
          <Button font="12px" size='6rem' id='child' name="Contact" color="white" border='white' background='black' hoverc='black' hoverb='white' hoverborder='black'/>
        </Li>
        <Li>
          <Button font="12px" size='6rem' id='child' name="Cosmetic" color="white" border='white' background='black' hoverc='black' hoverb='white' hoverborder='black'/>
        </Li>
      </Ul>
      {/* <Ul>
      <Li><Button name='Search'/></Li>
      <Li><Button name='Login'/></Li>
      </Ul> */}
    </Nav>
  )
}

export default Navbar