const BaseSelect = ({
  options,
  value,
  onChange,
  defaultValue,
  disable,
  label,
}) => {
  return (
    <div className="flex flex-col w-full">
      <p className="mb-1 font-semibold text-prim-1">{label}:</p>
      <select
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disable}
        className={[
          'w-full px-4 py-2 text-xl border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-prim-2 focus:border-transparent hover:cursor-pointer',
          disable ? 'bg-gray-100' : 'bg-white',
        ].join(' ')}
      >
        <option value="">Any</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BaseSelect;
