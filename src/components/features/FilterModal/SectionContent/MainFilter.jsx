import MOCK from '../../../../constants/mockData';
import MultiSelectAccordion from '../../../common/MultiSelectAccordion';

const filterAccordions = [
  {
    title: 'Work Type',
    options: MOCK.OPTIONS.TYPE,
    defaultSelected: [
      MOCK.OPTIONS.TYPE[0],
      MOCK.OPTIONS.TYPE[1],
      MOCK.OPTIONS.TYPE[4],
    ],
  },
  {
    title: 'Industry',
    options: MOCK.OPTIONS.INDUSTRY,
    defaultSelected: [MOCK.OPTIONS.INDUSTRY[0]],
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
      MOCK.OPTIONS.TYPE[0],
      MOCK.OPTIONS.TYPE[1],
      MOCK.OPTIONS.TYPE[2],
    ],
  },
  {
    title: 'Time',
    options: MOCK.OPTIONS.TIME,
    defaultSelected: [MOCK.OPTIONS.TIME[0], MOCK.OPTIONS.TIME[1]],
  },
];

const MainFilter = () => {
  return (
    <div className="flex flex-col w-full gap-4 ">
      {filterAccordions.map((accordion, index) => (
        <MultiSelectAccordion
          key={index}
          title={accordion.title}
          options={accordion.options}
          defaultSelected={accordion.defaultSelected}
        />
      ))}
    </div>
  );
};

export default MainFilter;
