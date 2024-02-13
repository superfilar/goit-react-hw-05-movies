import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  padding: 8px;
  color: black;

  &:hover {
    color: red;
  }
`;
export const MovieList = styled.ul`
  list-style: none;
  padding-left: none;
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: flex-start;
`;

export const Title = styled.h2`
  width: 100%;
  text-align: center;
`;
