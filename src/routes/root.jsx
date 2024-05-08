import MainNavBar from '../components/MainNavBar';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <MainNavBar />
      <Outlet />
    </>
  );
};

export default Root;
