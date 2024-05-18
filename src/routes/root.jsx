import { Outlet } from 'react-router-dom';
import MainNavBar from '../components/features/navigate/MainNavBar';

const Root = () => {
  return (
    <>
      <MainNavBar />
      <Outlet />
    </>
  );
};

export default Root;
