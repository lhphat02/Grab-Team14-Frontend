import { useState } from 'react';

const Accordion = ({ title, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`w-full select-none border border-gray-300 bg-white rounded-md ${className}`}
    >
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        {title}
        <svg
          className={`w-6 h-6 text-prim-1 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-8 p-4 border-t border-gray-300 ">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
