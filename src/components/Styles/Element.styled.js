import styled from 'styled-components';

export const SearchBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  max-width: 300px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin-top: 8px;
`;

export const Input = styled.input`
  display: inline-block;
  width: 70%;
  height: 20px;
  font: inherit;
  font-size: 16px;

  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;

export const ButtonIcon = styled.button`
  display: inline-block;
  align-items: center;
  background-color: light-grey;
  color: black;
  width: 70px;
  height: 20px;
  border: 1px dotted black;
  margin-right: 4px;
  margin-left: 4px;
  transition: all 250ms cubic-bezier(0.5, 0, 0.2, 0.5);
  cursor: pointer;
  &:hover {
    background-color: grey;
    color: white;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  margin-top: ${p => p.theme.space[4]}px;
  border: none;
  border-radius: 15px;
  background-color: #3f51b5;
  color: white;
  text-decoration: none;
  font-family: inherit;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.5, 0, 0.2, 0.5);
  &:hover {
    color: grey;
  }
`;

export const Gallery = styled.ul`
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  gap: 20px;
  list-style: none;
`;

export const GalleryItem = styled.li`
  display: block;
  flex-basis: calc((100% - 60px) / 4);
  height: auto;
  overflow: hidden;
  border-radius: 2px;
`;
