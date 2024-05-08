const SearchBar = ({ placeholder, onChange }) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-md">
      <input
        type="text"
        placeholder={placeholder}
        className="flex-grow px-4 py-2 rounded-l-md focus:outline-none "
        onChange={onChange}
      />
      <button className="px-4 py-2 text-white bg-prim-1 hover:bg-prim-2 rounded-r-md">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
