import { useState, useRef } from 'react';
import BaseButton from '../common/Button/BaseButton';

const LandingSlide = ({ children, onNext, onPrevious, className }) => {
  const [isCurrent, setIsCurrent] = useState(true);
  const slideRef = useRef(null);

  const handleNext = () => {
    if (onNext) {
      onNext();
    } else {
      const nextSlide = slideRef?.current?.nextElementSibling;
      console.log(nextSlide);
      if (nextSlide) {
        nextSlide.scrollIntoView({ behavior: 'smooth' });
        setIsCurrent(false);
      }
    }
  };

  const handleBack = () => {
    if (onPrevious) {
      onPrevious();
    } else {
      const prevSlide = slideRef.current.previousElementSibling;
      console.log(prevSlide);
      if (prevSlide) {
        prevSlide.scrollIntoView({ behavior: 'smooth' });
        setIsCurrent(false);
      }
    }
  };

  return (
    <div
      ref={slideRef}
      className={[
        'items-center justify-center space-y-4 container-slide',
        className,
        isCurrent ? 'active-slide' : '',
      ].join(' ')}
    >
      {children}
      <div className="flex flex-row mt-20 space-x-4">
        <BaseButton
          onClick={handleBack}
          className="rounded-full hover:space-x-4 hover:shadow-lg"
          outline={true}
        >
          Back
        </BaseButton>
        <BaseButton
          onClick={handleNext}
          className="rounded-full hover:space-x-4 hover:shadow-lg"
        >
          Next
        </BaseButton>
      </div>
    </div>
  );
};

export default LandingSlide;
