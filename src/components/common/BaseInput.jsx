import { useState } from 'react';

const BaseInput = ({
  label,
  name,
  placeholder,
  onChange,
  type,
  required,
  disabled,
  value,
  defaultValue,
}) => {
  const [inputFilled, setInputFilled] = useState(false);

  const handleInputChange = (event) => {
    if (!inputFilled && event.target.value) {
      setInputFilled(true);
    } else if (inputFilled && !event.target.value) {
      setInputFilled(false);
    }
    onChange(event);
  };

  return (
    <div className="input-base">
      {inputFilled && (
        <label
          className="block mb-1 text-sm font-semibold text-prim-1"
          htmlFor={label}
        >
          {label}
        </label>
      )}
      <input
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded focus:outline-none focus:outline-prim-1"
        required={required}
        disabled={disabled}
        id={label}
        type={type}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default BaseInput;
