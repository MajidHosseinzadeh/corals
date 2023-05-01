import styled, { keyframes } from 'styled-components';

export const floatingLabelAnimation = keyframes`
  from {
    transform: translateY(0);
    color: black;
  }
  to {
    transform: translate(-5px, -25px);
    font-size: 12px;
    color: red;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  margin: 20px 0;
`;

export const InputField = styled.input`
  font-size: 18px;
  padding: 10px;
  width: 18rem;
  border: none;
  border-bottom: 2px solid #070707;
  background-color: transparent;
  & + label {

  }
  &:focus {
    border-bottom: 2px solid #E1BEA5;
    outline: none;
    & + label {
      animation: ${floatingLabelAnimation} 0.3s forwards;
    }
  }
  &.input-error {
    color: #fc8181;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  pointer-events: none;
  top: 10px;
  left: 10px;
  font-size: ${({ isVisible }) => (isVisible ? '0px' : '16px')};
  transition: 0.3s;
  color: ${({ isVisible }) => (isVisible ? '#999' : '#000')};
`;

