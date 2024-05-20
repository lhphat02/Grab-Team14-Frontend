import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import SearchBar from '../components/common/SearchBar';
import FilterModalToggle from '../components/features/joblist/filter/FilterModalToggle';
import JobListContainer from '../components/features/joblist/JobListContainer';
import JobPageLayout from '../components/layouts/JobPageLayout';

import MOCK from '../constants/mockData';
import { isEmptyObject } from '../utils/checker';

const JobListPage = () => {
  const location = useLocation();
  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [queryData, setQueryData] = useState({});

  useEffect(() => {
    // Set default search query parameters when the url is empty
    if (isEmptyObject(searchParams)) {
      // Add here: Get the filter data from API

      // Set default search query parameters
      const defaultSearchParams = {
        keyword: 'mock',
        industry: '',
        workType: '',
        arrangement: '',
      };

      const searchQuery = new URLSearchParams(defaultSearchParams).toString();

      // Update the URL with default search query parameters
      window.history.pushState({}, '', `?${searchQuery}`);
    }
  }, [queryData, searchParams]);

  useEffect(() => {
    // Extract search query parameters from the URL
    const searchQuery = {
      keyword: searchParams.get('keyword'),
      industry: searchParams.get('industry'),
      workType: searchParams.get('workType'),
      arrangement: searchParams.get('arrangement'),
      searchExisting: searchParams.get('searchExisting'),
    };

    setQueryData(searchQuery);
  }, [location.search, searchParams]);

  const handleSearchBarChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search query of search bar
  const handleOnSearch = () => {
    setQueryData((prevQueryData) => ({
      ...prevQueryData,
      keyword: searchQuery,
    }));
  };

  // Handle main filter change
  const handleMainFilterChange = (key, selectedOption) => {
    setQueryData((prevQueryData) => ({
      ...prevQueryData,
      [key]: selectedOption.value,
    }));
  };

  // Handle advance filter change
  const handleAdvanceFilterChange = (advanceFilterData) => {
    setQueryData((prevQueryData) => ({
      ...prevQueryData,
      ...advanceFilterData,
    }));
  };

  return (
    <JobPageLayout>
      {/* Filter section */}
      <div className="flex flex-col justify-between w-full gap-4 md:gap-8 lg:flex-row">
        <FilterModalToggle
          queryData={queryData}
          onMainFilterChange={handleMainFilterChange}
          onAdvanceFilterChange={handleAdvanceFilterChange}
        />

        {/* Search bar */}
        <div className="w-full lg:max-w-md">
          <SearchBar
            placeholder="Search job"
            onChange={handleSearchBarChange}
            onSearch={handleOnSearch}
          />
        </div>
      </div>

      {/* Job list */}
      <JobListContainer data={MOCK.JOBS} queryData={queryData} />
    </JobPageLayout>
  );
};

export default JobListPage;
