import { Link } from 'react-router-dom';

import CONSTANTS from '../../constants/constant';
import assets from '../../assets';

const Brand = () => {
  return (
    <Link to="/">
      <div className="flex items-center space-x-2">
        <img
          src={assets.logo_svg}
          alt="logo"
          className="w-6 h-6 md:w-8 md:h-8"
        />
        <p className="text-lg font-bold md:text-xl text-prim-1">
          {CONSTANTS.APP.APP_NAME}
        </p>
      </div>
    </Link>
  );
};

export default Brand;
