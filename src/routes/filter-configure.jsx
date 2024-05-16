import { useEffect, useState } from 'react';

import FilterPageLayout from '../components/layouts/FiltetPageLayout';
import FilterConfigureSection from '../components/features/FilterConfigPage/FilterConfigureSection';
import FilterList from '../components/features/FilterConfigPage/FilterList';

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

  // Handles the change of the selected filter option.
  const handleOptionChange = (optionId) => {
    setFilterData(
      MOCK.FILTERS.find((filter) => filter.id === optionId) || null
    );
  };

  // Toggles the edit mode.
  const handleEditToggle = () => {
    setIsEditEnabled((prev) => !prev);
  };

  // Sets the active filter data on initial render.
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
      />
    </FilterPageLayout>
  );
};

export default FilterConfigurePage;
