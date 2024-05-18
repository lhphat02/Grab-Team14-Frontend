const HistoryPageLayout = ({ children, className }) => {
  return (
    <div
      className={`flex flex-col w-full min-h-screen items-center gap-8 pt-24 bg-gray-100 container-page ${className}`}
    >
      {children}
    </div>
  );
};

export default HistoryPageLayout;
