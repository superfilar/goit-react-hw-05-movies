import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  margin: 0;
`;
export const MovieBox = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: solid 1px grey;
`;
export const MovieInfo = styled.div`
  padding: 20px 40px;
`;
export const GenresList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  gap: 16px;
`;
export const Button = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  margin-bottom: 10px;
  font-weight: 500;
  &:hover {
    background-color: grey;
  }
`;

export const LinkBack = styled(Link)`
  display: block;
  font-size: 14px;
  align-items: center;
  color: black;
  backgroung-color: none;
  text-decoration: none;
`;
export const InfoBox = styled.div`
  padding: 20px;
  border-bottom: solid 1px grey;
  > ul {
    list-style: none;
  }
`;
