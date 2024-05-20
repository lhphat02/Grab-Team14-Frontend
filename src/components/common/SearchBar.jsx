const SearchBar = ({ placeholder, onChange, onSearch }) => {
  return (
    <div className="flex items-center w-full border border-gray-300 rounded-md ">
      <input
        type="text"
        placeholder={placeholder}
        className="flex-grow w-full p-2 rounded-l-md focus:outline-none "
        onChange={onChange}
      />
      <button
        className="px-4 py-2 text-white bg-prim-1 hover:bg-prim-2 rounded-r-md"
        onClick={onSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
