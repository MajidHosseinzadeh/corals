import styled, { keyframes } from 'styled-components';

export const floatingLabelAnimation = keyframes`
  from {
    transform: translateY(0);
    color: white;
  }
  to {
    transform: translate(-5px, -25px);
    font-size: 12px;
    color: grey;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  margin: 10px 0px;
`;

export const InputField = styled.input`
  font-size: 14px;
  padding: 10px;
  width: 14rem;
  border: none;
  border-bottom: 2px solid white;
  background-color: transparent;
  color: #2d884d;
  & + label {

  }
  &:focus {
    border-bottom: 2px solid white;
    outline: none;
    & + label {
      animation: ${floatingLabelAnimation} 0.3s forwards;
    }
  }
  &.input-error {
    color: #fecf6d;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  pointer-events: none;
  top: 10px;
  left: 10px;
  font-size: ${({ isVisible }) => (isVisible ? '0px' : '14px')};
  transition: 0.3s;
  color: grey;
`;

