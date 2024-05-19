import { useState, useEffect } from 'react';
import BaseInput from '../../../../common/BaseInput';

const advancedFilters = [
  {
    label: 'Exclude titles',
    placeholder: 'Keywords',
    key: 'excludeTitles',
  },
  {
    label: 'Exclude companies',
    placeholder: 'Keywords',
    key: 'excludeCompanies',
  },
  {
    label: 'Include description',
    placeholder: 'Keywords',
    key: 'includeDescription',
  },
  {
    label: 'Exclude description',
    placeholder: 'Keywords',
    key: 'excludeDescription',
  },
];

const AdvancedFilter = ({ advanceFilterData, onAdvancedFilterChange }) => {
  const [filters, setFilters] = useState({});

  useEffect(() => {
    setFilters(advanceFilterData);
  }, [advanceFilterData]);

  const handleInputChange = (key, value) => {
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters);
    onAdvancedFilterChange(updatedFilters);
  };

  return (
    <div className="flex flex-col w-full gap-8 overflow-y-auto">
      {advancedFilters.map((filter, index) => (
        <div key={index} className="flex flex-col w-full gap-2 md:p-2">
          <p className="font-semibold text-prim-1">{filter.label}:</p>
          <BaseInput
            placeholder={filter.placeholder}
            value={filters[filter.key] || ''}
            onChange={(e) => handleInputChange(filter.key, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default AdvancedFilter;
