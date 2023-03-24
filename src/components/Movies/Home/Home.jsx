import React, { Suspense, lazy } from 'react';

const MovieList = lazy(() => import('components/Movies/MovieList/MovieList'));

const Home = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <MovieList />
      </Suspense>
    </>
  );
};

export default Home;
