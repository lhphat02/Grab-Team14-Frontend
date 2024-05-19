import { useState } from 'react';
import { formatDate } from '../../../utils/formatter';
import HistoryJobDetailModal from './HistoryJobDetailModal';
import MOCK from '../../../constants/mockData';
import Loading from '../../common/Loading';

const HistoryJobCard = ({ jobData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const jobStatus = MOCK.OPTIONS.JOB_STATUS.find(
    (status) => status.value === jobData?.status
  )?.label;

  return (
    <>
      <div
        className="flex flex-row items-center w-full gap-4 p-4 bg-white border shadow-sm cursor-pointer"
        onClick={handleOpenModal}
      >
        <img
          src={jobData?.companyImageUrl}
          alt="job"
          className="w-12 h-12 rounded-md"
        />
        <div className="flex flex-col justify-between w-full h-full">
          <p className="text-xs font-semibold text-gray-500 md:text-sm">
            [{jobStatus}]
          </p>
          <p className="text-base font-semibold md:text-xl text-prim-1">
            {jobData?.title}
          </p>
          {jobData?.savedDate && (
            <p className="text-xs font-light text-gray-500 md:text-sm">
              Saved on {formatDate(jobData?.savedDate)}
            </p>
          )}
        </div>
      </div>

      <HistoryJobDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        jobData={jobData}
      />
    </>
  );
};

export default HistoryJobCard;
