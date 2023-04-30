import styled, { keyframes } from 'styled-components';

const floatingLabelAnimation = keyframes`
  from {
    transform: translateY(0);
    color: black;
  }
  to {
    transform: translateY(-20px);
    color: red;
  }
`;

const InputContainer = styled.div`
  position: relative;
  margin: 50px;
`;

const InputField = styled.input`
  font-size: 18px;
  padding: 10px;
  width: 200px;
  border: none;
  border-bottom: 2px solid gray;
  background-color: transparent;
  &:focus {
    border-bottom: 2px solid blue;
    outline: none;
    & + label {
      animation: ${floatingLabelAnimation} 0.3s forwards;
    }
  }
`;

const InputLabel = styled.label`
  position: absolute;
  pointer-events: none;
  top: 10px;
  left: 10px;
  font-size: 16px;
  transition: 0.3s;
`;

const Input = () => {
  return (
    <InputContainer>
      <InputField type="text" id="my-input" />
      <InputLabel htmlFor="my-input">My Label</InputLabel>
    </InputContainer>
  );
};

export default Input