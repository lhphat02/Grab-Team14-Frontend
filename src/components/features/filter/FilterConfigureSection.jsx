import { CheckCircleIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

import Accordion from '../../common/Accordion';
import BaseButton from '../../common/BaseButton';
import BaseInput from '../../common/BaseInput';
import Loading from '../../common/Loading';
import SingleSelectAccordion from '../../common/SingleSelectAccordion';

/**
 * Component for configuring and managing filters.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.filterData - The filter data.
 * @param {boolean} props.isEditEnabled - Flag indicating if edit mode is enabled.
 * @param {Function} props.onEditToggle - Function to toggle edit mode.
 * @param {Object} props.options - The available options for the filters.
 * @param {Function} props.onSave - Function to save the filter configuration.
 * @returns {JSX.Element} The FilterConfigureSection component.
 */
const FilterConfigureSection = ({
  filterData,
  isEditEnabled,
  onEditToggle,
  options,
  onSave,
}) => {
  const [inputValues, setInputValues] = useState({});
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    setInputValues(filterData);
    setFilterName(filterData?.name || '');
  }, [filterData]);

  const handleInputChange = (key, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const handleSave = () => {
    onSave({ ...inputValues, name: filterName });
    onEditToggle();
  };

  const handleFilterActivate = () => {
    // Future: Implement API call to activate the filter
  };

  const filterAccordions = [
    {
      title: 'Work Type',
      options: options.TYPE,
      defaultSelected: options.TYPE.find(
        (opt) => opt.value === filterData?.type
      ),
      onChange: (selected) => handleInputChange('type', selected.value),
    },
    {
      title: 'Experience Level',
      options: options.EXP_LEVEL,
      defaultSelected: options.EXP_LEVEL.find(
        (opt) => opt.value === filterData?.experience_level
      ),
      onChange: (selected) =>
        handleInputChange('experience_level', selected.value),
    },
    {
      title: 'Work Arrangement',
      options: options.WORKING_MODE,
      defaultSelected: options.WORKING_MODE.find(
        (opt) => opt.value === filterData?.working_mode
      ),
      onChange: (selected) => handleInputChange('working_mode', selected.value),
    },
    {
      title: 'By time',
      options: options.TIME,
      defaultSelected: options.TIME.find(
        (opt) => opt.value === filterData?.time
      ),
      onChange: (selected) => handleInputChange('time', selected.value),
    },
    {
      title: 'Industry',
      options: options.INDUSTRY,
      defaultSelected: options.INDUSTRY.find(
        (opt) => opt.value === filterData?.industry
      ),
      onChange: (selected) => handleInputChange('industry', selected.value),
    },
  ];

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

  if (!filterData) {
    return <Loading />;
  }

  return (
    <section className="flex flex-col items-start justify-start w-full h-full gap-8 p-8 overflow-y-auto bg-white rounded-lg shadow-md">
      {/* Headbar */}
      <div className="flex items-center justify-between w-full">
        {isEditEnabled ? (
          <BaseInput
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
            placeholder="Filter Name"
          />
        ) : (
          <h4 className="text-2xl text-prim-1">{filterData?.name}</h4>
        )}

        <div className="flex gap-2">
          {filterData?.active ? (
            <BaseButton outline disabled>
              <p>Active</p>
            </BaseButton>
          ) : (
            <BaseButton onClick={handleFilterActivate}>
              <p>Activate</p>
            </BaseButton>
          )}

          {isEditEnabled ? (
            <BaseButton onClick={handleSave}>
              <p>Save</p>
              <CheckCircleIcon className="w-6 h-6 " />
            </BaseButton>
          ) : (
            <BaseButton onClick={onEditToggle} className="px-7">
              <p>Edit</p>
              <PencilSquareIcon className="w-6 h-6 " />
            </BaseButton>
          )}
        </div>
      </div>

      {/* Keywords and location filters */}
      <div className="flex w-full gap-4">
        {/* Keywords filter */}
        <div className="flex flex-col w-full gap-4">
          <p className="font-semibold text-prim-1">Keywords:</p>
          <BaseInput
            placeholder="Keywords"
            disabled={!isEditEnabled}
            value={inputValues?.keyword || ''}
            onChange={(e) => handleInputChange('keyword', e.target.value)}
          />
        </div>

        {/* Location filter */}
        <div className="flex flex-col w-full gap-4">
          <p className="font-semibold text-prim-1">Location:</p>
          <BaseInput
            placeholder="Location"
            disabled={!isEditEnabled}
            value={inputValues?.location || ''}
            onChange={(e) => handleInputChange('location', e.target.value)}
          />
        </div>
      </div>

      {/* Basic filters */}
      <div className="flex flex-col justify-between w-full gap-4">
        {filterAccordions.map((accordion, index) => (
          <SingleSelectAccordion
            key={index}
            title={accordion.title}
            options={accordion.options}
            defaultSelected={accordion.defaultSelected}
            onChange={accordion.onChange}
            disabled={!isEditEnabled}
          />
        ))}
      </div>

      {/* Advanced filters */}
      <Accordion
        title={<p className="text-lg font-semibold text-prim-1">Advanced</p>}
      >
        {advancedFilters.map((filter, index) => (
          <div key={index} className="flex flex-col w-full gap-2">
            <p className="font-semibold text-prim-1">{filter.label}:</p>
            <BaseInput
              placeholder={filter.placeholder}
              value={inputValues?.[filter.key] || ''}
              onChange={(e) => handleInputChange(filter.key, e.target.value)}
              disabled={!isEditEnabled}
            />
          </div>
        ))}
      </Accordion>
    </section>
  );
};

export default FilterConfigureSection;
