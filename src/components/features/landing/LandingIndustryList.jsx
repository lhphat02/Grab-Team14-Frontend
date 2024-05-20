import assets from '../../../assets';
import BaseButton from '../../common/BaseButton';

const industries = [
  {
    name: 'IT & Media',
    icon: 'computer',
    value: 'TECHNOLOGY_INFORMATION_AND_MEDIA',
  },
  {
    name: 'Administration',
    icon: 'administration',
    value: 'ADMINISTRATIVE_AND_SUPPOR_SERVICES',
  },
  { name: 'Agriculture', icon: 'tree', value: 'FARMING_RANCHING_FORESTRY' },
  { name: 'Financial', icon: 'money', value: 'FINANCIAL_SERVICES' },
  { name: 'Construction', icon: 'construction', value: 'CONSTRUCTION' },
  {
    name: 'Accommodation',
    icon: 'accommodation',
    value: 'ACCOMMODATION_SERVICES',
  },
  {
    name: 'Entertainment',
    icon: 'entertainment',
    value: 'ENTERTAINMENT_PROVIDERS',
  },
  { name: 'Manufacturing', icon: 'manufactoring', value: 'MANUFACTURING' },
  {
    name: 'Healthcare',
    icon: 'healthcare',
    value: 'HOSPITALS_AND_HEALTH_CARE',
  },
  { name: 'Education', icon: 'education', value: 'EDUCATION' },
  { name: 'Any industries', icon: 'dots', value: '' },
];

const LandingIndustryList = ({ updateQuery, nextSlide }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 md:gap-8">
      {/* <h1 className="text-base font-semibold md:text-2xl text-prim-2">
        Industry
      </h1> */}
      <div className="flex flex-wrap justify-center gap-4">
        {industries.map((industry) => (
          <BaseButton
            key={industry.name}
            className="rounded-md md:py-4 hover:shadow-lg"
            onClick={() => {
              updateQuery(
                'industry',
                { name: industry.name, value: industry.value },
                nextSlide
              );
            }}
          >
            <img
              src={assets[industry.icon]}
              alt="logo"
              className="w-4 h-4 md:w-6 md:h-6"
            />
            <p className="text-xs md:text-base">{industry.name}</p>
          </BaseButton>
        ))}
      </div>
    </div>
  );
};

export default LandingIndustryList;
