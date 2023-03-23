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
import Phonebook from 'pages/Phonebook/Phonebook';
import PhotoSearch from 'pages/PhotoSearch/PhotoSearch';
import MoviesPage from 'pages/Movies/MoviesPage';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const SummaryPage = lazy(() => import('pages/SummaryPage/SummaryPage'));
const Currency = lazy(() => import('components/Currency/Currency'));

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
          <Route path="movies" element={<MoviesPage />} />
          <Route path="photo-search" element={<PhotoSearch />} />
        {!isTablet && <Route path="currency" element={<Currency />} />}
      </Route>
      <Route
        path="*"
        element={isLoggedIn ? <Navigate to="/" /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export { App };
