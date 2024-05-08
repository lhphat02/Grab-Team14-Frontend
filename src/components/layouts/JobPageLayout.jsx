const JobPageLayout = ({ children }) => {
  return (
    <div className="flex flex-col w-full min-h-screen gap-8 pt-24 bg-gray-100 container-page">
      {children}
    </div>
  );
};

export default JobPageLayout;
