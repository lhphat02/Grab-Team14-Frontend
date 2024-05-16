import SearchBar from '../components/common/SearchBar';
import JobListContainer from '../components/features/JobListPage/JobListContainer';
import JobPageLayout from '../components/layouts/JobPageLayout';
import MOCK from '../constants/mockData';
import FilterModalToggle from '../components/features/FilterModal/FilterModalToggle';

const JobListPage = () => {
  return (
    <JobPageLayout>
      <div className="flex flex-col justify-between w-full gap-8 lg:flex-row">
        <FilterModalToggle />

        <div className="w-full lg:max-w-lg">
          <SearchBar placeholder="Search job" />
        </div>
      </div>

      <JobListContainer data={MOCK.JOBS} />
    </JobPageLayout>
  );
};

export default JobListPage;
