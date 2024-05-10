const FilterPageLayout = ({ children }) => {
  return (
    <div className="flex flex-row justify-between h-screen gap-8 pt-24 pb-8 bg-slate-100 container-page">
      {children}
    </div>
  );
};

export default FilterPageLayout;
