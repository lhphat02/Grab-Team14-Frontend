import assets from '../assets';
import BaseButton from '../components/common/Button/BaseButton';
import Divider from '../components/common/Divider';
import LandingSlide from '../components/layouts/LandingSlide';

const industries = [
  { name: 'IT & Media', icon: 'computer' },
  { name: 'Farming & Agriculture', icon: 'tree' },
  { name: 'Healthcare', icon: 'healthcare' },
  { name: 'Accommodation', icon: 'accommodation' },
  { name: 'Entertainment', icon: 'entertainment' },
  { name: 'Education', icon: 'education' },
  { name: 'Construction', icon: 'construction' },
  { name: 'Manufactoring', icon: 'manufactoring' },
  { name: 'Administration', icon: 'administration' },
  { name: 'Finance & Business', icon: 'money' },
  { name: 'Others', icon: 'dots' },
];

const LandingPage = () => {
  return (
    <div className="">
      <LandingSlide className={''}>
        <h1 className="text-4xl font-black text-center text-prim-1">emploi</h1>

        <div className="flex flex-col w-full space-y-4">
          <Divider text="Choose your industry" />

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <BaseButton
                key={industry.name}
                className="py-4 rounded-md hover:shadow-lg"
              >
                <img
                  src={assets[industry.icon]}
                  alt="logo"
                  className="w-6 h-6"
                />
                <p>{industry.name}</p>
              </BaseButton>
            ))}
          </div>
        </div>
      </LandingSlide>

      <LandingSlide className={'gap-8'}>
        <div className="items-center justify-center space-y-4 contain-page">
          <h1 className="text-4xl font-black text-center text-prim-1">
            emploi
          </h1>
          <h2 className="text-2xl font-semibold text-center text-prim-1">
            Simplicity for your career
          </h2>
          <h2 className="text-lg font-semibold text-center">
            Stop Searching, Start Thriving. Find Your Ideal Job Here.
          </h2>
        </div>
      </LandingSlide>
      <LandingSlide>LandingSlide 3 content</LandingSlide>
    </div>
  );
};

export default LandingPage;
