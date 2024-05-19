import assets from '../../../assets';
import BaseButton from '../../common/BaseButton';

const workTypes = [
  { name: 'Full-time', icon: 'full_time', value: 'FULL_TIME' },
  { name: 'Part-time', icon: 'part_time', value: 'PART_TIME' },
  { name: 'Contract', icon: 'contract', value: 'CONTRACT' },
  { name: 'Internship', icon: 'intern', value: 'INTERNSHIP' },
  { name: 'Volunteer', icon: 'volunteer', value: 'VOLUNTEER' },
  { name: 'Any types', icon: 'dots', value: '' },
];

const LandingWorkTypeList = ({ updateQuery, nextSlide }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 md:gap-8">
      {/* <h1 className="text-base font-semibold md:text-2xl text-prim-2">
        Job Type
      </h1> */}
      <div className="flex flex-wrap justify-center gap-4">
        {workTypes.map((workType) => (
          <BaseButton
            key={workType.name}
            className="rounded-md md:py-4 hover:shadow-lg"
            onClick={() => {
              updateQuery(
                'workType',
                { name: workType.name, value: workType.value },
                nextSlide
              );
            }}
          >
            <img
              src={assets[workType.icon]}
              alt="logo"
              className="w-4 h-4 md:w-6 md:h-6"
            />
            <p className="text-xs md:text-base">{workType.name}</p>
          </BaseButton>
        ))}
      </div>
    </div>
  );
};

export default LandingWorkTypeList;
