import React, { useState } from 'react';
import { Button } from '../../common/Button';
import styled from 'styled-components';
import Link from 'next/link';
import { SLink } from '@/components/common/Link';
import { devices } from '@/components/constants/devices';
import SearchInput from '@/components/common/SearchInput';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  min-width: 100%;
  max-width: 100%;
  height: 200px;
  z-index: 999;
  background-color: #f5f5dc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


const InsideNav = styled.div`
  width: ${({ width }) => width || "100%"};;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 100px;
`

const Ul = styled.ul`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  @media (${devices.lg}) {
    display: none;
  }
`;

const Ull = styled.ul`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;
const UlMenu = styled.ul`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;
`;

const Li = styled.li`
  margin: 2vw;
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  @media (${devices.lg}) {
    display: block;
    margin-right: 20px;
  }
`;

const SideMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background-color: #f5f5dc;
  overflow-x: hidden;
  transition: 0.3s;
  z-index: 998;
`;

const SideMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 2rem;
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  cursor: pointer;
`;

const Navbar = () => {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <Nav>
      <InsideNav width='90%'>
        <SearchInput/>
        <Ull>
          <Li>
            <SLink href="/login">
              <Button
                name="Login"
                font="14px"
                size="6.5rem"
                background="#E1BEA5"
                color="#070707"
                border="#f5f5dc"
                hoverb="white"
                hoverc="#070707"
                hoverborder="#070707"
              />
            </SLink>
          </Li>
          <Li>
            <SLink href="/register" hcolor="black">
              Signup
            </SLink>
          </Li>
        </Ull>
      </InsideNav>
      <InsideNav width='90%'>
      <Link href="#link">
        <div>Logo</div>
      </Link>
      
      <Ul>
        <Li>
          <Button
            font="12px"
            size="6rem"
            id="child"
            name="Home"
            color="white"
            border="#f5f5dc"
            background="black"
            hoverc="black"
            hoverb="white"
            hoverborder="black"
          />
        </Li>
        <Li>
          <Button
            font="12px"
            size="6rem"
            id="child"
            name="About"
            color="white"
            border="#f5f5dc"
            background="black"
            hoverc="black"
            hoverb="white"
            hoverborder="black"
          />
        </Li>
        <Li>
          <Button
            font="12px"
            size="6rem"
            id="child"
            name="Contact"
            color="white"
            border="#f5f5dc"
            background="black"
            hoverc="black"
            hoverb="white"
            hoverborder="black"
          />
        </Li>
        <Li>
          <Button
            font="12px"
            size="6rem"
            id="child"
            name="Cosmetic"
            color="white"
            border="#f5f5dc"
            background="black"
            hoverc="black"
            hoverb="white"
            hoverborder="black"
          />
        </Li>
      </Ul>
      
      <MenuIcon onClick={toggleSideMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="#070707"
            d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"
          />
        </svg>
      </MenuIcon>
      <SideMenu style={{ width: isSideMenuOpen ? '100%' : '0' }}>
        <CloseIcon onClick={toggleSideMenu}>&times;</CloseIcon>
        <SideMenuContent>
          <Link href="#link">
            <div>Logo</div>
          </Link>
          <UlMenu>
          <Li>
            <Button
              font="12px"
              size="6rem"
              id="child"
              name="Home"
              color="white"
              border="#f5f5dc"
              background="black"
              hoverc="black"
              hoverb="white"
              hoverborder="black"
            />
          </Li>
          <Li>
            <Button
              font="12px"
              size="6rem"
              id="child"
              name="About"
              color="white"
              border="#f5f5dc"
              background="black"
              hoverc="black"
              hoverb="white"
              hoverborder="black"
            />
          </Li>
          <Li>
            <Button
              font="12px"
              size="6rem"
              id="child"
              name="Contact"
              color="white"
              border="#f5f5dc"
              background="black"
              hoverc="black"
              hoverb="white"
              hoverborder="black"
            />
          </Li>
          <Li>
            <Button
              font="12px"
              size="6rem"
              id="child"
              name="Cosmetic"
              color="white"
              border="#f5f5dc"
              background="black"
              hoverc="black"
              hoverb="white"
              hoverborder="black"
            />
          </Li>
          </UlMenu>
          
        </SideMenuContent>
      </SideMenu>
      </InsideNav>
    </Nav>
  );
};

export default Navbar;
