import MOCK from '../../../../../constants/mockData';
import { getOptionByKey } from '../../../../../utils/helper';
import SingleSelectAccordion from '../../../../common/SingleSelectAccordion';

const filterAccordions = [
  {
    title: 'Work Type',
    options: MOCK.OPTIONS.TYPE,
    key: 'workType',
  },
  {
    title: 'Experience Level',
    options: MOCK.OPTIONS.EXP_LEVEL,
    key: 'experienceLevel',
  },
  {
    title: 'Work Arrangement',
    options: MOCK.OPTIONS.WORKING_MODE,
    key: 'arrangement',
  },
  {
    title: 'Time',
    options: MOCK.OPTIONS.TIME,
    key: 'time',
  },
  {
    title: 'Industry(s)',
    options: MOCK.OPTIONS.INDUSTRY,
    key: 'industry',
  },
];

const MainFilter = ({ mainFilterData, onMainFilterChange }) => {
  const handleFilterChange = (key, selectedValue) => {
    const selectedOption = getOptionByKey(
      filterAccordions.find((acc) => acc.key === key).options,
      selectedValue
    );
    onMainFilterChange(key, selectedOption);
  };

  return (
    <div className="flex flex-col w-full h-full gap-2 md:gap-4 ">
      {filterAccordions.map((accordion, index) => (
        <SingleSelectAccordion
          key={index}
          title={accordion.title}
          options={accordion.options}
          defaultSelected={getOptionByKey(
            accordion.options,
            mainFilterData[accordion.key]
          )}
          onChange={(option) => handleFilterChange(accordion.key, option.value)}
        />
      ))}
    </div>
  );
};

export default MainFilter;
