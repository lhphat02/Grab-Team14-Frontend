import { useState } from 'react';
import BaseButton from '../../common/BaseButton';
import BaseInput from '../../common/BaseInput';
import LandingArrangementList from './LandingArrangementList';
import LandingCarousel from './LandingCarousel';
import LandingIndustryList from './LandingIndustryList';
import LandingWorkTypeList from './LandingWorkTypeList';
import { useNavigate } from 'react-router-dom';

const properties = ['industryName', 'workTypeName', 'arrangementName'];

const HeroSlide = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState({
    keyword: '',
    industry: '',
    workType: '',
    arrangement: '',
  });

  const handleSearchbarChange = (e) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      keyword: e.target.value,
    }));
  };

  const updateQueryAndNextSlide = (field, data, nextSlide) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      [field]: data.value,
      [`${field}Name`]: data.name,
    }));
    nextSlide();
  };

  const carouselItems = [
    <LandingIndustryList
      key="landing-industry-list-1"
      updateQuery={updateQueryAndNextSlide}
    />,
    <LandingWorkTypeList
      key="landing-work-type-list-1"
      updateQuery={updateQueryAndNextSlide}
    />,
    <LandingArrangementList
      key="landing-arrangement-list-1"
      updateQuery={updateQueryAndNextSlide}
    />,
  ];

  const handleOnSearch = () => {
    const { keyword, industry, workType, arrangement } = query;

    const searchParams = new URLSearchParams({
      keyword,
      industry,
      workType,
      arrangement,
      searchExisting: true,
    }).toString();

    navigate(`/job-list?${searchParams}`);
  };

  return (
    <div className="flex flex-col w-full h-full gap-12 md:gap-24">
      <div className="relative">
        <div className="relative flex items-center justify-center w-full bg-red-200 h-60 md:h-96">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="career"
            className="absolute inset-0 object-cover w-full h-full"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-prim-1 opacity-80"></div>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full md:space-y-4">
            <h1 className="relative z-10 text-3xl font-black text-center text-white md:text-7xl">
              emploi
            </h1>
            <h2 className="relative z-10 text-xl font-semibold text-center text-white md:text-3xl">
              Simplicity for your career
            </h2>
            <h2 className="text-xs font-medium text-center text-white md:text-xl">
              Stop Searching, Start Thriving. Find Your Ideal Job Here.
            </h2>
          </div>

          <div className="absolute left-0 right-0 flex flex-col items-center justify-center w-full -bottom-10">
            <div className="z-20 flex flex-col items-center justify-center gap-2 px-8 py-2 text-sm text-center bg-white md:py-4 md:text-xl rounded-t-3xl text-prim-1">
              <div className="flex">
                <BaseInput
                  placeholder="Job title, keywords..."
                  className="w-full"
                  icon="search"
                  value={query.keyword}
                  onChange={handleSearchbarChange}
                />
                <BaseButton className="ml-4" onClick={handleOnSearch}>
                  Search
                </BaseButton>
              </div>
              <div className="flex gap-2">
                {properties.map(
                  (property) =>
                    query[property] && (
                      <p
                        key={`query-${property}`}
                        className="p-1 text-xs font-semibold border rounded-lg md:text-sm bg-slate-50"
                      >
                        {query[property]}
                      </p>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4">
        <LandingCarousel items={carouselItems} />
      </div>
    </div>
  );
};

export default HeroSlide;
