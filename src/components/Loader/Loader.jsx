import { FallingLines } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => (
  <LoaderContainer>
    <FallingLines
  color="red"
  width="100"
  visible={true}
  ariaLabel="falling-circles-loading"
  />
  </LoaderContainer>
);