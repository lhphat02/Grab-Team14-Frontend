const JobPageLayout = ({ children, className }) => {
  return (
    <div
      className={`lex flex-col w-full min-h-screen gap-8 pt-24 bg-gray-100 container-page ${className}`}
    >
      {children}
    </div>
  );
};

export default JobPageLayout;
