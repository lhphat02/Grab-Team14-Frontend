import { cloneElement, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const LandingCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center flex-shrink-0 w-full h-full"
          >
            {cloneElement(item, { nextSlide: handleNextClick })}
          </div>
        ))}
      </div>
      {/* <button
        onClick={handlePrevClick}
        className="absolute left-0 p-2 transform -translate-y-1/2 bg-white rounded-full shadow-md top-5 hover:bg-gray-100"
      >
        <ChevronLeftIcon className="w-6 h-6 text-prim-1" />
      </button>
      <button
        onClick={handleNextClick}
        className="absolute right-0 p-2 transform -translate-y-1/2 bg-white rounded-full shadow-md top-5 hover:bg-gray-100"
      >
        <ChevronRightIcon className="w-6 h-6 text-prim-1" />
      </button> */}
    </div>
  );
};

export default LandingCarousel;
