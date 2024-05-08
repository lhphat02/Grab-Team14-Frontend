import BaseSelect from '../components/common/BaseSelect';
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

const JobListPage = () => {
  return (
    <JobPageLayout>
      <div className="flex justify-between w-full">
        <div className="flex w-full gap-4">
          <BaseSelect options={mockJobTypeOptions} />
          <BaseSelect options={mockJobIndustryOptions} />
          <BaseSelect options={mockJobLevelOptions} />
          <BaseSelect options={mockJobArrangementOptions} />
        </div>

        <SearchBar placeholder="Search job" />
      </div>
      <JobListContainer data={mockJobData} />
    </JobPageLayout>
  );
};

export default JobListPage;
