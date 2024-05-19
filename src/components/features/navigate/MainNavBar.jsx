import { Link, useLocation, useNavigate } from 'react-router-dom';
import CONSTANTS from '../../../constants/constant';
import NavbarLayout from '../../layouts/NavbarLayout';
import BaseButton from '../../common/BaseButton';

const navLinks = [
  { name: 'Jobs', path: CONSTANTS.ROUTES.JOB_LIST },
  { name: 'Filter', path: CONSTANTS.ROUTES.FILTER_CONFIG },
  { name: 'History', path: CONSTANTS.ROUTES.HISTORY },
  { name: 'Profile', path: CONSTANTS.ROUTES.PROFILE },
];

const authenticated = true;

const MainNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  return (
    <NavbarLayout
      desktopContent={
        authenticated ? (
          <div className="items-center hidden space-x-6 md:flex">
            {getNavLinkItems(path)}
          </div>
        ) : (
          <div className="items-center hidden space-x-6 md:flex">
            <BaseButton
              className="rounded-full"
              outline
              onClick={() => navigate(CONSTANTS.ROUTES.SIGN_IN)}
            >
              <p className="text-md">Sign In</p>
            </BaseButton>
            <BaseButton
              className="rounded-full"
              onClick={() => navigate(CONSTANTS.ROUTES.SIGN_UP)}
            >
              <p className="text-md">Sign Up</p>
            </BaseButton>
          </div>
        )
      }
      mobileContent={
        authenticated ? (
          <div className="flex flex-col justify-center w-full h-full px-2 pt-2 pb-3 space-y-6 sm:px-3">
            {getNavLinkItems(path)}
          </div>
        ) : (
          <div className="flex flex-col justify-end w-full h-full px-2 pt-2 pb-3 space-y-6 sm:px-3">
            <BaseButton
              className="rounded-full"
              outline
              onClick={() => navigate(CONSTANTS.ROUTES.SIGN_IN)}
            >
              <p className="text-md">Sign In</p>
            </BaseButton>
            <BaseButton
              className="rounded-full"
              onClick={() => navigate(CONSTANTS.ROUTES.SIGN_UP)}
            >
              <p className="text-md">Sign Up</p>
            </BaseButton>
          </div>
        )
      }
    />
  );
};

// Helper function to generate nav links
const getNavLinkItems = (path) =>
  navLinks.map((link) => (
    <Link
      key={link.name}
      to={link.path}
      className={`font-semibold hover:text-prim-1 ${
        path === link.path ? 'text-prim-1' : 'text-gray-400'
      }`}
    >
      {link.name}
    </Link>
  ));

export default MainNavBar;
