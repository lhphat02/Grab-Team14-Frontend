import { useState } from 'react';
import BaseSelect from '../components/common/BaseSelect';
import BaseButton from '../components/common/Button/BaseButton';
import SearchBar from '../components/common/SearchBar';
import JobListContainer from '../components/features/JobListPage/JobListContainer';
import JobPageLayout from '../components/layouts/JobPageLayout';
import {
  mockJobData,
  mockJobArrangementOptions,
  mockJobIndustryOptions,
  mockJobLevelOptions,
  mockJobTypeOptions,
} from '../constants/mockData';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid';
import BaseModal from '../components/common/BaseModel';

const JobListPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <JobPageLayout
      className={isModalOpen ? 'overflow-y-clip' : 'overflow-y-auto'}
    >
      <div className="flex flex-col justify-between w-full gap-8 lg:flex-row">
        <BaseButton onClick={handleOpenModal}>
          <AdjustmentsHorizontalIcon className="w-6 h-6" />
          <p className="font-semibold">Filters</p>
        </BaseButton>

        <div className="w-full lg:max-w-lg">
          <SearchBar placeholder="Search job" />
        </div>
      </div>

      <JobListContainer data={mockJobData} />

      <BaseModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="flex flex-col justify-between gap-4 p-8">
          <BaseSelect options={mockJobTypeOptions} label="Type" />
          <BaseSelect options={mockJobIndustryOptions} label="Industry" />
          <BaseSelect options={mockJobLevelOptions} label="Level" />
          <BaseSelect options={mockJobArrangementOptions} label="Arrangement" />
        </div>
      </BaseModal>
    </JobPageLayout>
  );
};

export default JobListPage;
