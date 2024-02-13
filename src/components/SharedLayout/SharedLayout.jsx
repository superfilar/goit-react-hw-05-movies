import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Navigation } from './SheredLayout.styled';
export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <Link to="/" end>
            <p>Home</p>
          </Link>
          <Link to="/movies"><p>Movies</p></Link>
        </Navigation>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
