import assets from '../../../assets';
import BaseButton from '../../common/BaseButton';

const arrangements = [
  { name: 'On-site', icon: 'on_site', value: 'ON_SITE' },
  { name: 'Remote', icon: 'remote', value: 'REMOTE' },
  { name: 'Hybrid', icon: 'hybrid', value: 'HYBRID' },
  { name: 'Any arrangements', icon: 'dots', value: '' },
];

const LandingArrangementList = ({ updateQuery, nextSlide }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 md:gap-8">
      {/* <h1 className="text-base font-semibold md:text-2xl text-prim-2">
        Work Arrangement
      </h1> */}
      <div className="flex flex-wrap justify-center gap-4">
        {arrangements.map((arrangement) => (
          <BaseButton
            key={arrangement.name}
            className="rounded-md md:py-4 hover:shadow-lg"
            onClick={() => {
              updateQuery(
                'arrangement',
                { name: arrangement.name, value: arrangement.value },
                nextSlide
              );
            }}
          >
            <img
              src={assets[arrangement.icon]}
              alt="logo"
              className="w-4 h-4 md:w-6 md:h-6"
            />
            <p className="text-xs md:text-base">{arrangement.name}</p>
          </BaseButton>
        ))}
      </div>
    </div>
  );
};

export default LandingArrangementList;
