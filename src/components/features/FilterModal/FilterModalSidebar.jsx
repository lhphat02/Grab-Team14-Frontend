const FilterModalSidebar = ({ sections, currentSection, onSelectSection }) => {
  return (
    <div className="w-1/3 p-4 border-r">
      {sections.map((section) => (
        <button
          key={section.id}
          className={`flex gap-2 items-center w-full text-left py-4 px-4 mb-2 rounded-lg text-prim-1 ${
            currentSection === section.id
              ? 'bg-gray-100 font-semibold'
              : 'hover:bg-gray-100 '
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
