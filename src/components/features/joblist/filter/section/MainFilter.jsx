import MOCK from '../../../../../constants/mockData';
import MultiSelectAccordion from '../../../../common/MultiSelectAccordion';
import SingleSelectAccordion from '../../../../common/SingleSelectAccordion';

const filterAccordions = [
  {
    title: 'Work Type',
    options: MOCK.OPTIONS.TYPE,
    defaultSelected: MOCK.OPTIONS.TYPE[4],
  },
  {
    title: 'Experience Level',
    options: MOCK.OPTIONS.EXP_LEVEL,
    defaultSelected: MOCK.OPTIONS.EXP_LEVEL[0],
  },
  {
    title: 'Work Arrangement',
    options: MOCK.OPTIONS.WORKING_MODE,
    defaultSelected: MOCK.OPTIONS.WORKING_MODE[1],
  },
  {
    title: 'Time',
    options: MOCK.OPTIONS.TIME,
    defaultSelected: MOCK.OPTIONS.TIME[1],
  },
];

const MainFilter = () => {
  return (
    <div className="flex flex-col w-full h-full gap-2 md:gap-4 ">
      {filterAccordions.map((accordion, index) => (
        <SingleSelectAccordion
          key={index}
          title={accordion.title}
          options={accordion.options}
          defaultSelected={accordion.defaultSelected}
        />
      ))}
      <MultiSelectAccordion
        title="Industry(s)"
        options={MOCK.OPTIONS.INDUSTRY}
        defaultSelected={[MOCK.OPTIONS.INDUSTRY[0], MOCK.OPTIONS.INDUSTRY[1]]}
      />
    </div>
  );
};

export default MainFilter;
