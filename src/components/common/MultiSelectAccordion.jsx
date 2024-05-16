import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

/**
 * MultiSelectAccordion component allows users to select multiple options from a list.
 * @param {Object[]} options - The list of options to display.
 * @param {function} onChange - Callback function to handle changes in the selected options.
 * @param {Object[]} defaultSelected - The list of default selections to be preselected.
 */
const MultiSelectAccordion = ({
  title,
  options,
  onChange,
  defaultSelected = [],
}) => {
  const [selectedOptions, setSelectedOptions] = useState(defaultSelected);
  const [isOpen, setIsOpen] = useState(false);

  // Handle option selection
  const handleOptionToggle = (option) => {
    let updatedSelectedOptions;
    if (selectedOptions.find((selected) => selected.value === option.value)) {
      updatedSelectedOptions = selectedOptions.filter(
        (selected) => selected.value !== option.value
      );
    } else {
      updatedSelectedOptions = [...selectedOptions, option];
    }
    setSelectedOptions(updatedSelectedOptions);
    onChange(updatedSelectedOptions);
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col w-full select-none">
      {/* Button to display selected options */}
      <div
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full p-4 text-left border border-gray-300 rounded-md cursor-pointer"
      >
        {/* Title and selected options */}
        <div className="flex items-center gap-2">
          <p className="text-base font-semibold text-prim-1">{title}:</p>

          <p className="text-base text-gray-500">
            {selectedOptions.length > 0
              ? selectedOptions.map((option) => option.label).join(', ')
              : null}
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
        <ul className="w-full mt-4 mb-8 bg-white">
          <div className="flex flex-wrap gap-4">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleOptionToggle(option)}
                className={`px-4 py-2 cursor-pointer border-prim-1 border rounded-lg ${
                  selectedOptions.find(
                    (selected) => selected.value === option.value
                  )
                    ? 'bg-prim-1 text-white'
                    : ''
                }`}
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

export default MultiSelectAccordion;
