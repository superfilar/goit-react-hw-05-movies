import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MainContainer, MovieLink, MovieList, Title } from './Home.styled';
import { getTrending } from '../../API/apiService';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrending().then(data => {
      setTrendMovies(data.results);
      setIsLoading(false);
    });
  }, []);

  return (
    <MainContainer>
      <Title>Top Movies for today</Title>
      <MovieList>
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title || movie.name}
            </MovieLink>
          </li>
        ))}
        {isLoading && <Loader />}
      </MovieList>
    </MainContainer>
  );
};
export default Home;
