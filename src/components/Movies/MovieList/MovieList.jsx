import React from 'react';
import { useState, useEffect } from 'react';
import { getTrendFilms } from 'api/apiMovies';
import { Link } from 'react-router-dom';
import css from './MovieList.module.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const MovieList = () => {
  const [movieDailyTrends, setMovieDailyTrends] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTrendFilms().then(films => {
      if (films.length > 0) {
        setMovieDailyTrends(films);
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <div className={css.box}>
      {/* <h2 className={css.title}>Trending today</h2> */}
      
      {isLoading ? (
        <Skeleton className={css.skeleton} count={20} baseColor={'#e5e5e5'} width={220} height={20} />
      ) : (
        <ul className={css.list}>
          {movieDailyTrends.map(({ title, id }) => (
            <li className={css.item} key={id}>
              <Link className={css.link} to={`/movies/movies/${id}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;
