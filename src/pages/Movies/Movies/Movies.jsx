import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieSearchInput from 'components/Movies/MovieSearchInput/MovieSearchInput';
import { getFilmName } from 'api/apiMovies'; 
import Notiflix from 'notiflix';
import { useLocation } from 'react-router-dom';

const MovieSearchList = lazy(() =>
  import('components/Movies/MovieSearchList/MovieSearchList')
);

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [noFindFilms, setnoFindFilms] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [movieName, setMovieName] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (!shouldLoad) return;

    if (!searchParams.get('search')) {
      setnoFindFilms(false);
      setMovieName('')
      Notiflix.Notify.info('Please enter the film name');
      return;
    } else {
      if (searchParams.get('search').length > 0) {
        getFilmName(searchParams.get('search')).then(films => {
          if (films.length === 0) {
            setnoFindFilms(true);
            setMovieName('')
          }

          if (films.length > 0) {
            setMovieName(films);
            setnoFindFilms(false);
          }
        });
      }
    }
  }, [searchParams, shouldLoad]);


  //Проверяем наличие введенного поиска на возврате по кнопке Back
  useEffect(() => {
    if (location.state === null) return;

    if (location.state != null) {
      getFilmName(location.state.slice(8)).then(films => {
        setMovieName(films);

        setnoFindFilms(false);
      });
    }
  }, [location.state]);

  return (
    <>
      <MovieSearchInput setInput={setSearchParams} setLoad={setShouldLoad} />
      <Suspense fallback={<div>Loading...</div>}>
        {movieName.length > 0 && (
          <MovieSearchList value={movieName} searchPath={location} />
        )}
        {noFindFilms && <h5>No Films found</h5>}
      </Suspense>
    </>
  );
};

export default Movies;
