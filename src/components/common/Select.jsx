const SelectOption = ({ options, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="px-4 py-2 text-xl bg-white border rounded-md shadow-md border-prim-1 focus:outline-none focus:ring-2 focus:ring-prim-2 focus:border-transparent text-prim-1 hover:shadow-lg"
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className="text-xl text-prim-1 hover:bg-prim-1 hover:text-white"
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectOption;
