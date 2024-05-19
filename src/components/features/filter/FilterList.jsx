import { PlusIcon } from '@heroicons/react/24/solid';
import BaseButton from '../../common/BaseButton';
import RadioCardGroup from '../../common/RadioCardGroup';

/**
 * Component for displaying a list of filters.
 *
 * @param {Object} props - The component props.
 * @param {Object[]} props.data - The list of filter data.
 * @param {Function} props.handleOnChange - The function to handle filter change.
 * @param {boolean} props.showSection - Flag indicating if the section should be shown.
 * @returns {JSX.Element} The FilterList component.
 */
const FilterList = ({ data, handleOnChange, showSection }) => {
  const handleCreateFilter = () => {
    // Future: Implement create filter functionality
  };

  return (
    <section
      className={`flex flex-col items-center justify-between h-full gap-4 p-4 rounded-lg w-full md:w-1/3 md:bg-white md:shadow-md ${
        !showSection ? '' : 'hidden md:flex'
      }`}
    >
      <h4 className="text-prim-1">Filters</h4>
      <div className="w-full h-full pr-2 overflow-y-auto scroll-p-16">
        <RadioCardGroup options={data} onChange={handleOnChange} />
      </div>
      <BaseButton className="w-full" onClick={handleCreateFilter}>
        <p>Create new filter</p>
        <PlusIcon className="w-6 h-6 " />
      </BaseButton>
    </section>
  );
};

export default FilterList;
