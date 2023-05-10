import styled from 'styled-components'


export const Button = (props) => {
    const SButton = styled.button`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@200&display=swap');

        display: flex;
        justify-content: center;
        width: ${props.size};
        appearance: none;
        background-color: ${props.background};
        border: 2px solid ${props.border};
        border-radius: 6px;
        box-sizing: border-box;
        color: ${props.color};
        cursor: pointer;
        font-family: 'Urbanist', sans-serif;
        font-size: ${props.font};
        font-weight: 600;
        line-height: normal;
        margin: 0;
        outline: none;
        padding: 8px 16px;
        text-align: center;
        text-decoration: none;
        transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
        touch-action: manipulation;
        will-change: transform;
    }
    
    &:hover {
        color: ${props.hoverc};
        background-color: ${props.hoverb};
        box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
        transform: translateY(-2px);
        border: 2px solid ${props.hoverborder};

    }
    
    &:active {
        box-shadow: none;
        transform: translateY(0);
    }
    
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

    `
    return (
        <SButton>{props.name}</SButton>
    )
}
