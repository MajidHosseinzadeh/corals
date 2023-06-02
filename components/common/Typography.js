import styled from 'styled-components'

export const Typography = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@200&display=swap');

  color: ${({ color }) => color || 'white'};
  margin: ${({ margin }) => margin || '0px 0px 0px 0px'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  line-height: ${({ lineHeight }) => lineHeight || '1.5'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  font-family: 'Urbanist', sans-serif;
  width: ${({ width }) => width || '100%'};
`;