import { useEffect, useState } from 'react';

import FilterPageLayout from '../components/layouts/FiltetPageLayout';
import FilterConfigureSection from '../components/features/FilterConfigPage/FilterConfigureSection';
import FilterList from '../components/features/FilterConfigPage/FilterList';

import { mockFilters } from '../constants/mockData';

/**
 * Represents the page for configuring filters.
 * @component
 *
 * @returns {JSX.Element} The JSX element representing the filter configure page.
 */
const FilterConfigurePage = () => {
  const [filterData, setFilterData] = useState(null);
  const [isEditEnabled, setIsEditEnabled] = useState(false);

  const handleOptionChange = (optionValue) => {
    setFilterData(
      mockFilters.find((filter) => filter.value === optionValue) || null
    );
  };

  const handleEditToggle = () => {
    setIsEditEnabled((prev) => !prev);
  };

  useEffect(() => {
    const activeFilter =
      mockFilters.find((filter) => filter.active === true) || null;
    if (activeFilter) {
      setFilterData(activeFilter);
    }
  }, []);

  return (
    <FilterPageLayout>
      <FilterList data={mockFilters} handleOnChange={handleOptionChange} />

      <FilterConfigureSection
        filterData={filterData}
        isEditEnabled={isEditEnabled}
        onEditToggle={handleEditToggle}
      />
    </FilterPageLayout>
  );
};

export default FilterConfigurePage;
