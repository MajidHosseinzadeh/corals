import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const SlideContent = styled.div`

`

const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(100% + 10px));
  }
`;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px;
  width: 40%;
`;

const NavButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  margin: 0 5px;
  color: ${(props) => (props.isActive ? '#ffffff' : '#000000')};
  background-color: ${(props) => (props.isActive ? '#007bff' : 'transparent')};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #007bff;
    transform: translateX(-100%);
    z-index: -1;
    transition: transform 0.3s ease;
    border-radius: 20px;
  }

  &:hover:before {
    transform: translateX(0);
  }

  &:not(:last-child) {
    margin-right: 0;
  }

  &.slide-in:before {
    animation: ${slideAnimation} 0.3s forwards;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center:
  align-items: center;
`

const ProductNavbar = () => {

    


    const slides = [
        {
            content: (
                <div>about</div>
            ),
            slideName: 'About'
        },
        {
            content: (
                <div>comment</div>
            ),
            slideName: 'Comments'
        },
        {

            content: (
                <div>noth</div>
            ),
            slideName: 'Noth'

        }
    ];


    const [activeButton, setActiveButton] = useState('About');
    const [slideInClass, setSlideInClass] = useState('');


    const handleButtonClick = (buttonName) => {
        if (activeButton !== buttonName) {
            setActiveButton(buttonName);
            setSlideInClass('slide-in');

            setTimeout(() => {
                setSlideInClass('');
            }, 300);
        }
    };
    const setSlide = () => {
        slides.forEach((slide) => {
            if (slide.slideName === activeButton) {
                console.log(activeButton)
                return slide.content
            }
        })
    }

    return (
        <>
            <NavbarContainer>
                <NavButton
                    isActive={activeButton === 'About'}
                    onClick={() => handleButtonClick('About')}
                    className={slideInClass}
                >
                    About
                </NavButton>
                <NavButton
                    isActive={activeButton === 'Comments'}
                    onClick={() => handleButtonClick('Comments')}
                    className={slideInClass}
                >
                    Comments
                </NavButton>
                <NavButton
                    isActive={activeButton === 'Noth'}
                    onClick={() => handleButtonClick('Noth')}
                    className={slideInClass}
                >
                    Noth
                </NavButton>
            </NavbarContainer>
            <div>
                <SlideContent>
                    {setSlide()}
                </SlideContent>
            </div>
        </>
    );
};

export default ProductNavbar;