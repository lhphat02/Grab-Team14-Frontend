import Divider from '../components/common/Divider';
import LandingSlide from '../components/templates/LandingSlide';
const LandingPage = () => {
  return (
    <div className="">
      <LandingSlide>
        <h1 className="text-4xl font-black text-center text-prim-1">emploi</h1>
        <Divider text="Choose your industry" />
      </LandingSlide>
      <LandingSlide>
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
