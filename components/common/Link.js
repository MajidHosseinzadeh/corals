import Link from 'next/link';
import styled from 'styled-components';

export const SLink = styled(Link)`
  margin: ${({ margin }) => margin || "0px 0px 0px 0px"};
  color: #4091d7;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;
