import styled from 'styled-components'

export const Typography = styled.p`

  color: ${({ color }) => color || 'white'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  line-height: ${({ lineHeight }) => lineHeight || '1.5'};
  text-align: ${({ textAlign }) => textAlign || 'left'};

`;