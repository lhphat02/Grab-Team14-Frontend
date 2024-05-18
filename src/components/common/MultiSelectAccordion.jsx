import { useEffect, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

/**
 * Component for displaying a multi-select accordion.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the accordion.
 * @param {Object[]} props.options - The list of options.
 * @param {Function} props.onChange - The function to handle option change.
 * @param {Object[]} [props.defaultSelected] - The default selected options.
 * @returns {JSX.Element} The MultiSelectAccordion component.
 */
const MultiSelectAccordion = ({
  title,
  options,
  onChange,
  defaultSelected = [],
}) => {
  const [selectedOptions, setSelectedOptions] = useState(defaultSelected);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSelectedOptions(defaultSelected);
  }, [defaultSelected]);

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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col w-full select-none">
      <div
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full p-4 text-left border border-gray-300 rounded-md cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <p className="text-base font-semibold text-prim-1">{title}:</p>
          <p className="text-base text-gray-500">
            {selectedOptions.length > 0
              ? selectedOptions.map((option) => option.label).join(', ')
              : 'Select options'}
          </p>
        </div>
        {isOpen ? (
          <ChevronUpIcon className="w-6 h-6 text-gray-500" />
        ) : (
          <ChevronDownIcon className="w-6 h-6 text-gray-500" />
        )}
      </div>

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
