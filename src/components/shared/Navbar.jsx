import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Brand from '../common/Brand';
import BaseButton from '../common/Button/BaseButton';
import CONSTANTS from '../../constants/constant';

const navLinks = [
  { name: 'Jobs', path: CONSTANTS.ROUTES.JOB_LIST },
  { name: 'Filter', path: CONSTANTS.ROUTES.FILTER_CONFIG },
  { name: 'Profile', path: CONSTANTS.ROUTES.PROFILE },
];

const authenticated = false;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-sm bg-opacity-85 backdrop-blur-sm">
      <div className="flex items-center justify-between h-12 px-4 mx-auto md:h-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          <Brand />

          {/* Desktop menu */}
          {authenticated ? (
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
          )}

          {/* Mobile hamburger menu */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <HamburgerMenuIcon />
            </button>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div
              className="fixed top-0 right-0 w-full h-screen bg-black bg-opacity-50 md:hidden backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            >
              <div
                className="fixed top-0 right-0 flex flex-col items-end w-2/3 h-screen p-4 bg-white shadow-lg md:hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  type="button"
                  className="p-2 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  <CloseMenuIcon />
                </button>

                {/* Links */}
                {authenticated ? (
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
                )}

                <div className="flex items-center justify-center w-full mt-4">
                  <p className="text-xs text-gray-500">
                    @ 2024 Grab, Inc. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

// Hamburger menu icon
const HamburgerMenuIcon = () => {
  return (
    <>
      <span className="sr-only">Open main menu</span>
      <svg
        className="block w-6 h-6 "
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="text-prim-1"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </>
  );
};

// Close menu icon
const CloseMenuIcon = () => {
  return (
    <>
      <span className="sr-only">Close main menu</span>
      <svg
        className="block w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="text-prim-1"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </>
  );
};

// Helper function to generate nav links
const getNavLinkItems = (path) =>
  navLinks.map((link) => (
    <Link
      key={link.name}
      to={link.path}
      className={`font-semibold hover:text-prim-1 ${
        path === link.path ? 'text-prim-1' : 'text-gray-300'
      }`}
    >
      {link.name}
    </Link>
  ));

export default Navbar;
