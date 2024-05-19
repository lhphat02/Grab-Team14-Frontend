import { useEffect, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

/**
 * SingleSelectAccordion component allows users to select a single option from a list.
 * @param {Object} title - The title of the accordion.
 * @param {Object[]} options - The list of options to display.
 * @param {function} onChange - Callback function to handle changes in the selected option.
 * @param {Object} defaultSelected - The default selection to be preselected.
 * @param {boolean} disabled - Flag to disable the accordion.
 */
const SingleSelectAccordion = ({
  title,
  options,
  onChange,
  defaultSelected = null,
  disabled = false,
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultSelected);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSelectedOption(defaultSelected);
  }, [defaultSelected]);

  // Handle option selection
  const handleOptionSelect = (option) => {
    if (!disabled) {
      setSelectedOption(option);
      onChange(option);
    }
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col w-full bg-white select-none">
      {/* Button to display selected option */}
      <div
        onClick={toggleDropdown}
        className={`flex items-center justify-between w-full p-4 text-left border border-gray-300 rounded-md cursor-pointer ${
          disabled ? 'bg-gray-100' : ''
        }`}
      >
        {/* Title and selected option */}
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold md:text-base text-prim-1">
            {title}:
          </p>

          <p className="text-sm text-gray-500 md:text-base">
            {selectedOption ? selectedOption.label : 'Select an option'}
          </p>
        </div>

        {/* Dropdown icon */}
        {isOpen ? (
          <ChevronUpIcon className="w-6 h-6 text-gray-500" />
        ) : (
          <ChevronDownIcon className="w-6 h-6 text-gray-500" />
        )}
      </div>

      {/* List of options, collapsible */}
      {isOpen && (
        <ul className="w-full p-4 bg-white border rounded-b-md">
          <div className="flex flex-wrap gap-4">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleOptionSelect(option)}
                className={`px-4 py-2 cursor-pointer border-prim-1 border rounded-lg ${
                  selectedOption && selectedOption.value === option.value
                    ? 'bg-prim-1 text-white'
                    : ''
                } ${disabled ? 'cursor-not-allowed' : ''}`}
              >
                {option.label}
              </li>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};

export default SingleSelectAccordion;
