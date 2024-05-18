import { useEffect, useState } from 'react';

import FilterPageLayout from '../components/layouts/FiltetPageLayout';
import FilterConfigureSection from '../components/features/filter/FilterConfigureSection';
import FilterList from '../components/features/filter/FilterList';
import MOCK from '../constants/mockData';

/**
 * Represents the page for configuring filters.
 * @component
 *
 * @returns {JSX.Element} The JSX element representing the filter configure page.
 */
const FilterConfigurePage = () => {
  const [filterData, setFilterData] = useState(null);
  const [isEditEnabled, setIsEditEnabled] = useState(false);

  const handleOptionChange = (optionId) => {
    setFilterData(
      MOCK.FILTERS.find((filter) => filter.id === optionId) || null
    );
  };

  const handleEditToggle = () => {
    setIsEditEnabled((prev) => !prev);
  };

  const handleSave = (updatedFilterData) => {
    setFilterData(updatedFilterData);
    // Future: Implement API call to save the updated filter data
  };

  useEffect(() => {
    const activeFilter =
      MOCK.FILTERS.find((filter) => filter.active === true) || null;
    if (activeFilter) {
      setFilterData(activeFilter);
    }
  }, []);

  return (
    <FilterPageLayout>
      <FilterList data={MOCK.FILTERS} handleOnChange={handleOptionChange} />
      <FilterConfigureSection
        filterData={filterData}
        isEditEnabled={isEditEnabled}
        onEditToggle={handleEditToggle}
        options={MOCK.OPTIONS}
        onSave={handleSave}
      />
    </FilterPageLayout>
  );
};

export default FilterConfigurePage;
