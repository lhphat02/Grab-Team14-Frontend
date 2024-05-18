import BaseInput from '../../../../common/BaseInput';
import MOCK from '../../../../../constants/mockData';

const advancedFilters = [
  {
    label: 'Exclude titles',
    placeholder: 'Keywords',
    value: MOCK.FILTERS[1].excludeTitles || '',
  },
  {
    label: 'Exclude companies',
    placeholder: 'Keywords',
    value: MOCK.FILTERS[1].excludeCompanies || '',
  },
  {
    label: 'Include description',
    placeholder: 'Keywords',
    value: MOCK.FILTERS[1].includeDescription || '',
  },
  {
    label: 'Exclude description',
    placeholder: 'Keywords',
    value: MOCK.FILTERS[1].excludeDescription || '',
  },
];

const AdvancedFilter = () => {
  return (
    <div className="flex flex-col w-full gap-8">
      {advancedFilters.map((filter, index) => (
        <div key={index} className="flex flex-col w-full gap-2">
          <p className="font-semibold text-prim-1">{filter.label}:</p>
          <BaseInput placeholder={filter.placeholder} value={filter.value} />
        </div>
      ))}
    </div>
  );
};

export default AdvancedFilter;
