import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import './App.css';
import SharedLayout from './components/SharedLayout/SharedLayout';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

/* Routes */
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const AuthorizationPage = lazy(() =>
  import('./pages/AuthorizationPage/AuthorizationPage')
);
const TransactionPage = lazy(() =>
  import('./pages/TransactionPage/TransactionPage')
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="sign-up" element={<AuthorizationPage />} />
        <Route path="sign-in" element={<TransactionPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
