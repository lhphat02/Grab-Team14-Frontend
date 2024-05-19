import { useLocation } from 'react-router-dom';
import SearchBar from '../components/common/SearchBar';
import FilterModalToggle from '../components/features/joblist/filter/FilterModalToggle';
import JobListContainer from '../components/features/joblist/JobListContainer';
import JobPageLayout from '../components/layouts/JobPageLayout';
import MOCK from '../constants/mockData';

const JobListPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const searchQuery = {
    keyword: searchParams.get('keyword'),
    industry: searchParams.get('industry'),
    workType: searchParams.get('workType'),
    arrangement: searchParams.get('arrangement'),
    searchExisting: searchParams.get('searchExisting'),
  };

  console.log(searchQuery);

  return (
    <JobPageLayout>
      <div className="flex flex-col justify-between w-full gap-4 md:gap-8 lg:flex-row">
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
