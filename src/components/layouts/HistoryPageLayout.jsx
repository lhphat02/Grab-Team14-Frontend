const HistoryPageLayout = ({ children, className }) => {
  return (
    <div
      className={`items-center justify-center gap-4 md:gap-8 pt-16 md:pt-24 bg-gray-100 h-screen p-4 flex flex-col ${className}`}
    >
      {children}
    </div>
  );
};

export default HistoryPageLayout;
