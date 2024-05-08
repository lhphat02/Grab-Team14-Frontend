import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Bars4Icon } from '@heroicons/react/24/solid';
import Brand from '../common/Brand';

const NavbarLayout = ({ desktopContent, mobileContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-sm bg-opacity-85 backdrop-blur-sm">
      <div className="flex items-center justify-between h-12 px-4 mx-auto md:h-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          <Brand />

          {desktopContent}

          {/* Mobile hamburger menu */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Bars4Icon className="w-6 h-6 text-prim-1" />
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
                  <XMarkIcon className="w-6 h-6 text-prim-1" />
                </button>

                {mobileContent}

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

export default NavbarLayout;
