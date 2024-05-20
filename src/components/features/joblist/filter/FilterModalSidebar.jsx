const FilterModalSidebar = ({ sections, currentSection, onSelectSection }) => {
  return (
    <div className="w-full p-2 bg-white border-b rounded-md md:h-full h-1/5 md:p-4 md:border-r md:w-1/3">
      {sections.map((section) => (
        <button
          key={section.id}
          className={`flex gap-2 items-center w-full text-left md:p-4 p-2 mb-2 rounded-lg text-prim-1 ${
            currentSection === section.id
              ? 'bg-gray-100 font-semibold'
              : 'hover:bg-gray-100'
          }`}
          onClick={() => onSelectSection(section.id)}
        >
          {section.icon}
          {section.label}
        </button>
      ))}
    </div>
  );
};

export default FilterModalSidebar;
