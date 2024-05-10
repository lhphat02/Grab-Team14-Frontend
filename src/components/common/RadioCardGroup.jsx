import { useEffect, useState } from 'react';

const RadioCardGroup = ({ options, onChange, className }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const activeOption = options.find((option) => option.active === true);
    if (activeOption) {
      setSelectedOption(activeOption.value);
    }
  }, [options]);

  const handleOptionChange = (optionValue) => {
    setSelectedOption(optionValue);
    onChange(optionValue);
  };

  return (
    <div className={`flex flex-wrap justify-center w-full gap-2  ${className}`}>
      {options.map((option, index) => (
        <label
          key={index}
          className={`border w-full hover:bg-gray-100 rounded-md p-4 cursor-pointer ${
            selectedOption === option.value
              ? 'bg-gray-100  border-prim-1'
              : 'border-gray-300 bg-white '
          }`}
        >
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={() => handleOptionChange(option.value)}
            className="hidden"
          />
          <div className="text-lg font-semibold">{option.label}</div>
          <div className="">
            {option.active ? (
              <p className="text-sm text-prim-1">Active</p>
            ) : (
              <p className="text-sm text-gray-500">Inactive</p>
            )}
          </div>
        </label>
      ))}
    </div>
  );
};

export default RadioCardGroup;
