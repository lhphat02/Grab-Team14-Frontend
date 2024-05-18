import { XMarkIcon } from '@heroicons/react/24/solid';
import BaseButton from '../../../../common/BaseButton';
import { BookmarkIcon } from '@heroicons/react/24/solid';
import Divider from '../../../../common/Divider';
import assets from '../../../../../assets';

const JobDetailModalHeader = ({
  logo,
  title,
  onClose,
  companyName,
  companyLink,
  applyLink,
}) => {
  const handleBookmark = () => {
    // Future: Implement API call to bookmark job
  };

  return (
    <div className="flex flex-col items-center justify-between w-full gap-4 p-4 border-b md:flex-row">
      <div className="flex items-center h-full gap-4">
        <img
          src={logo || assets.logo_svg}
          alt="company logo"
          className="w-12 h-12 rounded-md cursor-pointer hover:opacity-80"
          onClick={() => window.open(companyLink, '_blank')}
        />
        <Divider vertical={true} />
        <div className="flex flex-col">
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-light text-gray-500 cursor-pointer hover:underline"
          >
            {companyName}
          </a>
          <p className="text-xl font-semibold text-prim-1">{title}</p>
        </div>
      </div>

      <div className="flex items-center justify-between w-full gap-2 md:w-auto">
        <a href={applyLink} target="_blank" rel="noopener noreferrer">
          <BaseButton className="text-sm md:text-base">Apply</BaseButton>
        </a>

        <BaseButton onClick={handleBookmark}>
          <BookmarkIcon className="w-4 h-4 md:w-6 md:h-6" />
          <p className="text-sm md:text-base">Save</p>
        </BaseButton>

        <XMarkIcon
          onClick={onClose}
          className="w-8 h-8 p-1 rounded-full cursor-pointer text-prim-1 hover:bg-gray-100"
        />
      </div>
    </div>
  );
};

export default JobDetailModalHeader;
