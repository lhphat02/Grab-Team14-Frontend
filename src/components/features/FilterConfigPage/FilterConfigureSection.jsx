import {
  BookmarkSquareIcon,
  PencilSquareIcon,
  FunnelIcon,
} from '@heroicons/react/24/solid';

import BaseButton from '../../common/Button/BaseButton';
import BaseSelect from '../../common/BaseSelect';
import BaseInput from '../../common/BaseInput';
import Accordion from '../../common/Accordion';
import MOCK from '../../../constants/mockData';
import MultiSelectAccordion from '../../common/MultiSelectAccordion';
import { useEffect, useState } from 'react';

const filterAccordions = [
  {
    title: 'Work Type',
    options: MOCK.OPTIONS.TYPE,
    defaultSelected: [MOCK.OPTIONS.TYPE[0], MOCK.OPTIONS.TYPE[1]],
  },
  {
    title: 'Industry',
    options: MOCK.OPTIONS.INDUSTRY,
    defaultSelected: [MOCK.OPTIONS.INDUSTRY[0], MOCK.OPTIONS.INDUSTRY[1]],
  },
  {
    title: 'Experience Level',
    options: MOCK.OPTIONS.EXP_LEVEL,
    defaultSelected: [MOCK.OPTIONS.EXP_LEVEL[0], MOCK.OPTIONS.EXP_LEVEL[1]],
  },
  {
    title: 'Work Arrangement',
    options: MOCK.OPTIONS.WORKING_MODE,
    defaultSelected: [
      MOCK.OPTIONS.WORKING_MODE[0],
      MOCK.OPTIONS.WORKING_MODE[1],
    ],
  },
  {
    title: 'Time',
    options: MOCK.OPTIONS.TIME,
    defaultSelected: [MOCK.OPTIONS.TIME[0], MOCK.OPTIONS.TIME[1]],
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

/**
 * Renders the filter configuration section.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.filterData - The filter data.
 * @param {boolean} props.isEditEnabled - Indicates whether the edit mode is enabled.
 * @param {Function} props.onEditToggle - The function to toggle the edit mode.
 * @returns {JSX.Element} The JSX element representing the filter configuration section.
 */
const FilterConfigureSection = ({
  filterData,
  isEditEnabled,
  onEditToggle,
}) => {
  const [inputValues, setInputValues] = useState({});

  useEffect(() => {
    setInputValues(filterData);
  }, [filterData]);

  const handleInputChange = (key, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  return (
    <section className="flex flex-col items-start justify-start w-full h-full gap-8 p-8 overflow-y-auto bg-white rounded-lg shadow-md">
      {/* Headbar */}
      <div className="flex items-center justify-between w-full">
        <h4 className="text-2xl text-prim-1">{filterData?.name}</h4>

        <div className="flex gap-2">
          {filterData?.active ? (
            <BaseButton outline disabled>
              <p>Active</p>
            </BaseButton>
          ) : (
            <BaseButton>
              <p>Activate</p>
            </BaseButton>
          )}

          {isEditEnabled ? (
            <BaseButton onClick={onEditToggle}>
              <p>Save</p>
              <BookmarkSquareIcon className="w-6 h-6 " />
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
            value={filterData?.keyword || ''}
          />
        </div>
        {/* Location filter */}
        <div className="flex flex-col w-full gap-4">
          <p className="font-semibold text-prim-1">Location:</p>
          <BaseInput
            placeholder="Location"
            disabled={!isEditEnabled}
            value={filterData?.location || ''}
          />
        </div>
      </div>

      {/* Basic filters */}
      <div className="flex flex-col justify-between w-full gap-4">
        {filterAccordions.map((accordion, index) => (
          <MultiSelectAccordion
            key={index}
            title={accordion.title}
            options={accordion.options}
            defaultSelected={accordion.defaultSelected}
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
