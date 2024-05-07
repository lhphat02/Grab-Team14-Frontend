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
  return (
    <div className="w-full">
      <label
        className="block mb-2 text-sm font-bold text-prim-1"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded focus:outline-none focus:outline-prim-1"
        required={required}
        disabled={disabled}
        id={label}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  );
};

export default BaseInput;
