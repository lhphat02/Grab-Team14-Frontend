import {
  BookmarkSquareIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid';

import BaseButton from '../../common/Button/BaseButton';
import BaseSelect from '../../common/BaseSelect';
import BaseInput from '../../common/BaseInput';

import {
  mockJobArrangementOptions,
  mockJobIndustryOptions,
  mockJobLevelOptions,
  mockJobTypeOptions,
} from '../../../constants/mockData';
import Accordion from '../../common/Accordion';
import { FunnelIcon } from '@heroicons/react/24/solid';

const materialFilters = [
  {
    label: 'Type',
    filterOption: mockJobTypeOptions,
    key: 'type',
  },
  {
    label: 'Industry',
    filterOption: mockJobIndustryOptions,
    key: 'industry',
  },
  {
    label: 'Level',
    filterOption: mockJobLevelOptions,
    key: 'level',
  },
  {
    label: 'Arrangement',
    filterOption: mockJobArrangementOptions,
    key: 'arrangement',
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
}) => (
  <section className="flex flex-col items-start justify-start w-full h-full gap-8 p-8 overflow-y-auto bg-white rounded-lg shadow-md">
    {/* Headbar */}
    <div className="flex items-center justify-between w-full">
      <h4 className="text-2xl text-prim-1">{filterData?.label}</h4>
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

    {/* Basic filters */}
    <div className="flex justify-between w-full gap-4">
      {materialFilters.map((filter, index) => (
        <BaseSelect
          key={index}
          options={filter.filterOption}
          value={filterData?.data?.[filter.key] || ''}
          label={filter.label}
          disable={!isEditEnabled}
        />
      ))}
    </div>

    <div className="flex w-full gap-2">
      {/* Keywords filter */}
      <div className="flex flex-col w-full gap-4">
        <div className="flex items-center gap-2">
          <p className="font-semibold text-prim-1">Keywords:</p>
          <p className="text-sm text-gray-500"> (semicolon separated)</p>
        </div>
        <BaseInput
          placeholder="Keywords"
          disabled={!isEditEnabled}
          value={filterData?.data?.keyword || ''}
        />
      </div>
      {/* Location filter */}
      <div className="flex flex-col w-full gap-4">
        <p className="font-semibold text-prim-1">Location:</p>
        <BaseInput
          placeholder="Keywords"
          disabled={!isEditEnabled}
          value={filterData?.data?.location || ''}
        />
      </div>
    </div>

    {/* Advanced filters */}
    <Accordion
      title={
        <div className="flex items-center gap-2">
          <FunnelIcon className="w-6 h-6 text-prim-1" />
          <p className="font-semibold text-prim-1">Advanced filters</p>
        </div>
      }
    >
      {/* Exclude keyword filter */}
      <div className="flex flex-col w-full gap-4">
        <div className="flex items-center gap-2">
          <p className="font-semibold text-prim-1">Exclude keywords:</p>
          <p className="text-sm text-gray-500"> (semicolon separated)</p>
        </div>
        <BaseInput
          placeholder="Keywords"
          disabled={!isEditEnabled}
          value={filterData?.data?.excludeKeyword || ''}
        />
      </div>

      {/* Exclude company filter */}
      <div className="flex flex-col w-full gap-4">
        <div className="flex items-center gap-2">
          <p className="font-semibold text-prim-1">Exclude companies:</p>
          <p className="text-sm text-gray-500"> (semicolon separated)</p>
        </div>
        <BaseInput
          placeholder="Keywords"
          disabled={!isEditEnabled}
          value={filterData?.data?.excludeCompany || ''}
        />
      </div>
    </Accordion>
  </section>
);

export default FilterConfigureSection;
