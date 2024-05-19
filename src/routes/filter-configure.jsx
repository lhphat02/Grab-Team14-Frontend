import { useEffect, useState } from 'react';

import FilterPageLayout from '../components/layouts/FiltetPageLayout';
import FilterConfigureSection from '../components/features/filter/FilterConfigureSection';
import FilterList from '../components/features/filter/FilterList';
import MOCK from '../constants/mockData';
import useMediaQuery from '../hooks/useMediaQuery';

const FilterConfigurePage = () => {
  const [filterData, setFilterData] = useState(null);
  const [isEditEnabled, setIsEditEnabled] = useState(false);
  const [showConfigureSection, setShowConfigureSection] = useState(true);

  const isMobile = useMediaQuery(768);

  const handleOptionChange = (optionId) => {
    setFilterData(
      MOCK.FILTERS.find((filter) => filter.id === optionId) || null
    );
    if (isMobile) {
      setShowConfigureSection(true);
    }
  };

  const handleEditToggle = () => {
    setIsEditEnabled((prev) => !prev);
  };

  const handleSave = (updatedFilterData) => {
    setFilterData(updatedFilterData);
  };

  useEffect(() => {
    if (!isMobile) {
      const activeFilter =
        MOCK.FILTERS.find((filter) => filter.active === true) || null;
      if (activeFilter) {
        setFilterData(activeFilter);
      }
    }
  }, [isMobile]);

  return (
    <FilterPageLayout>
      {isMobile ? (
        <>
          {!showConfigureSection && (
            <FilterList
              data={MOCK.FILTERS}
              handleOnChange={handleOptionChange}
            />
          )}
          {showConfigureSection && (
            <FilterConfigureSection
              filterData={filterData}
              isEditEnabled={isEditEnabled}
              onEditToggle={handleEditToggle}
              options={MOCK.OPTIONS}
              onSave={handleSave}
              showSection={showConfigureSection}
              onCloseSection={() => setShowConfigureSection(false)}
            />
          )}
        </>
      ) : (
        <>
          <FilterList
            data={MOCK.FILTERS}
            handleOnChange={handleOptionChange}
            showSection={showConfigureSection}
          />
          <FilterConfigureSection
            filterData={filterData}
            isEditEnabled={isEditEnabled}
            onEditToggle={handleEditToggle}
            options={MOCK.OPTIONS}
            onSave={handleSave}
            showSection={true}
            onCloseSection={() => setShowConfigureSection(false)}
          />
        </>
      )}
    </FilterPageLayout>
  );
};

export default FilterConfigurePage;
