import { useState, useEffect } from 'react';
import { getFilmDetails } from 'api/apiMovies';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import css from './MovieID.module.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const MovieID = () => {
  const [filmDetails, setFilmDetails] = useState({});
  const { title, image, score, overview, genres } = filmDetails;
  const { movieId } = useParams();
  const [path, setPath] = useState('');
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getFilmDetails(movieId);
      setFilmDetails(result);
      setIsLoading(false);
    };
    fetchData();
  }, [movieId]);

  useEffect(() => {
    if (location.state) {
      setPath(location.state.searchPath.pathname);
      setSearch(location.state.searchPath.search);
    }
  }, [location.state]);

  return (
    <>
      <Link to={`${path}${search}` || '/'} state={search}>
        <button className={css.back_button}>Back</button>
      </Link>

      <div className={css.hero_box}>
        {isLoading ? (
          <Skeleton
            className={css.skeleton_img}
            count={1}
            baseColor={'#e5e5e5'}
            width={190}
            height={280}
          />
        ) : (
          <img src={image} alt={title} className={css.image} height={'300px'} />
        )}

        {isLoading ? (
          <div className={css.hero_info}>
            <Skeleton
              className={css.skeleton_title}
              count={1}
              baseColor={'#eeaeae'}
              width={250}
              height={40}
            />
            <Skeleton
              className={css.skeleton_score}
              count={1}
              baseColor={'#eeaeae'}
              width={50}
              height={20}
            />
            <Skeleton
              className={css.skeleton_overview}
              count={1}
              baseColor={'#eeaeae'}
              width={600}
              height={80}
            />
            <Skeleton
              className={css.skeleton_genres}
              count={1}
              baseColor={'#eeaeae'}
              width={50}
              height={20}
            />
          </div>
        ) : (
          <div className={css.hero_info}>
            <h3 className={css.title}> {title}</h3>

            <p className={css.score}>User Score: {score}</p>

            <p className={css.overview}>Overview</p>
            <p className={css.overview_text}>{overview}</p>

            <p className={css.genres_title}>Genres</p>
            <p>{genres}</p>
          </div>
        )}
      </div>
      <div className={css.line}></div>
      <div className={css.additional_box}>
        <p className={css.additional_title}>Additional information</p>
        <div className={css.additional_list}>
          <Link to={'cast'} className={css.additional_item}>
            Cast
          </Link>
          <Link to={'review'} className={css.additional_item}>
            Reviews
          </Link>
        </div>
      </div>
      <div className={css.line}></div>

      <Outlet />
    </>
  );
};

export default MovieID;
