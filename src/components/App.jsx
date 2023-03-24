import { useEffect, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  PrivateRoute,
  PublicRoute,
} from 'components/PrivatPublicRoutes/PrivatPublicRoutes';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { useMedia } from 'react-use';
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { DashboardPage } from 'pages/DashboardPage/DashboardPage';
import ToDoPage from 'pages/ToDoPage/ToDoPage';
import Phonebook from 'pages/PhonebookPage/PhonebookPage';
import PhotoSearch from 'pages/PhotoSearch/PhotoSearch';
import MoviesPage from 'pages/Movies/MoviesPage';
import Layout from './Movies/Layout/Layout';
import Home from 'components/Movies/Home/Home';
import Movies from 'components/Movies/Movies/Movies';
import MovieID from 'components/Movies/MovieID/MovieID';
import { Suspense } from 'react';
import NoFound from 'components/Movies/NoFound/NoFound';
import CalculatorPage from 'pages/CalculatorPage/CalculatorPage';
import WeatherWidget from 'pages/Weather/Weather';
import Calendar from 'pages/CalendarPage/CalendarePage';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const SummaryPage = lazy(() => import('pages/SummaryPage/SummaryPage'));
const Currency = lazy(() => import('components/Currency/Currency'));

const Cast = lazy(() => import('components/Movies/Cast/Cast.jsx'));
const Review = lazy(() => import('components/Movies/Reviews/Review'));

const App = () => {
  const isTablet = useMedia('(min-width: 768px)');
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Loading...</div>
  ) : (
    <Routes>
      <Route
        path="/login"
        element={<PublicRoute component={<LoginPage />} />}
      />
      <Route
        path="/register"
        element={<PublicRoute component={<RegistrationPage />} />}
      />
      <Route path="/" element={<PrivateRoute component={<DashboardPage />} />}>
        <Route index element={<HomePage />} />
        <Route path="diagram" element={<SummaryPage />} />
        <Route path="todo" element={<ToDoPage />} />
        <Route path="contacts" element={<Phonebook />} />
        <Route path="movies" element={<Layout />}>
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
          <Route path="photo-search" element={<PhotoSearch />} />
          <Route path="calculator" element={<CalculatorPage />} />
          <Route path="weather" element={<WeatherWidget />} />
            <Route path="calendar" element={<Calendar />} />
          {!isTablet && <Route path="currency" element={<Currency />} />}
      </Route>
      {/* <Route
        path="*"
        element={isLoggedIn ? <Navigate to="/" /> : <Navigate to="/login" />}
      /> */}
    </Routes>
  );
};

export { App };
