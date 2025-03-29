import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
// import Main from '../Main/Main';
import Loader from '../Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        {/* <Main /> */}
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
