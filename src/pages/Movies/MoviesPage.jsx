import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Home from '../../components/Movies/Home/Home';
import Layout from '../../components/Movies/Layout/Layout';
import Movies from 'components/Movies/Movies/Movies';
import NoFound from 'components/Movies/NoFound/NoFound';
import MovieID from 'components/Movies/MovieID/MovieID';

const Cast = lazy(() => import('../../components/Movies/Cast/Cast.jsx'));
const Review = lazy(() => import('../../components/Movies/Reviews/Review'));

export const MoviesPage = () => {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieID />}>
          <Route
            path="cast"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                {' '}
                <Cast />{' '}
              </Suspense>
            }
          />

          <Route
            path="review"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                {' '}
                <Review />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<NoFound />} />
      </Route>
    </Routes>
  );
};

export default MoviesPage;