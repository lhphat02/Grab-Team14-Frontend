import { XMarkIcon } from '@heroicons/react/24/solid';
import assets from '../../../assets';
import Divider from '../../common/Divider';
import BaseButton from '../../common/BaseButton';
import BaseSelect from '../../common/BaseSelect';
import MOCK from '../../../constants/mockData';
import Loading from '../../common/Loading';

const HistoryJobDetailModalHeader = ({ jobData, onClose }) => {
  const handleChangeStatus = () => {
    // Future: Implement API call to update job status
  };

  console.log(jobData);

  if (!jobData) {
    return <Loading statusMessage="Loading job details..." />;
  }

  return (
    <div className="flex flex-col items-center justify-between w-full gap-4 p-4 border-b md:flex-row">
      <div className="flex items-center h-full gap-4">
        <img
          src={jobData?.companyImageUrl || assets.logo_svg}
          alt="company logo"
          className="w-12 h-12 rounded-md cursor-pointer hover:opacity-80"
          onClick={() => window.open(jobData?.companyLink, '_blank')}
        />
        <Divider vertical={true} />
        <div className="flex flex-col">
          <a
            href={jobData?.companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-light text-gray-500 cursor-pointer hover:underline"
          >
            {jobData?.companyName}
          </a>
          <p className="text-xl font-semibold text-prim-1">{jobData?.title}</p>
        </div>
      </div>

      <div className="flex items-center justify-between w-full gap-2 md:w-auto">
        <a href={jobData?.applyLink} target="_blank" rel="noopener noreferrer">
          <BaseButton className="text-xs md:text-sm">Apply</BaseButton>
        </a>

        <BaseSelect
          showLabel={false}
          options={MOCK.OPTIONS.JOB_STATUS}
          value={jobData?.status}
          onChange={handleChangeStatus}
        />

        <XMarkIcon
          onClick={onClose}
          className="w-8 h-8 p-1 rounded-full cursor-pointer text-prim-1 hover:bg-gray-100"
        />
      </div>
    </div>
  );
};

export default HistoryJobDetailModalHeader;
