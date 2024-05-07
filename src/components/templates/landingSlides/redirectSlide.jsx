import BaseButton from '../../common/Button/BaseButton';

const RedirectSlide = () => {
  return (
    <div className="items-center justify-center space-y-4 bg-gray-100 container-stack">
      <h1 className="text-4xl font-black text-center text-prim-1">emploi</h1>
      <h2 className="text-2xl font-semibold text-center text-prim-1">
        Simplicity for your career
      </h2>
      <h2 className="text-lg font-semibold text-center">
        Stop Searching, Start Thriving. Find Your Ideal Job Here.
      </h2>

      <BaseButton className="mt-4 rounded-full w-60 hover:space-x-4 hover:shadow-lg">
        <p className="font-bold">Get Started</p>
        <div className="w-8 h-8">
          <svg
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </div>
      </BaseButton>
    </div>
  );
};

export default RedirectSlide;
