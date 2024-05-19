const FilterPageLayout = ({ children }) => {
  return (
    <div className="pt-16 pb-8 bg-white container-page md:pt-24 md:flex-row md:bg-slate-100 md:h-screen md:justify-center md:gap-8">
      {children}
    </div>
  );
};

export default FilterPageLayout;
