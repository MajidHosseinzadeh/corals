import { Typography } from '@/components/common/Typography';
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const SlideContent = styled.div`
    height: auto;
    width: 100%;
    background-color: #f5f5f5;
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
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px;
  width: 100%;
`;

const NavButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  margin: 0 60px;
  color: ${(props) => (props.isActive ? '#ffffff' : '#000000')};
  background-color: ${(props) => (props.isActive ? '#4091d7' : 'transparent')};
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

const ProductNavbar = ({ comments}) => {



    const slides = [
        {
            content: (
                <>
                    {/* {about.map((about) => (
                        <ul key={about.id}>
                            <li>
                                <Typography color="black">{about.body} : {about.body}</Typography>
                            </li>
                        </ul>
                    ))} */}
                </>
            ),
            slideName: 'About'
        },
        {
            content: (
                <>
                    {comments.map((comment) => (
                        <ul key={comment.id}>
                            <li>
                                {/* <Typography color="black">from: {comment.user}</Typography> */}
                                <Typography color="black">{comment.body}</Typography>
                                {/* <Typography color="black">at: {comment.created_at}</Typography> */}
                                {/* <Typography color="black">rate: {comment.rate}</Typography> */}
                            </li>
                        </ul>
                    ))}
                </>
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
        const slide = slides.find((slide) => slide.slideName === activeButton);
        return slide ? slide.content : null;
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
            <>
                <SlideContent>
                    {setSlide()}
                </SlideContent>
            </>
        </>
    );
};

export default ProductNavbar;