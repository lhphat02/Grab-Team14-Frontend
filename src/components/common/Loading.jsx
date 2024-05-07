const Loading = ({ statusMessage = 'Loading', fullScreen = false }) => {
  return (
    <div
      className={`${
        fullScreen ? 'h-screen' : ''
      } flex flex-col items-center justify-center w-full p-2 space-y-5`}
    >
      <div className="loader"></div>
      <p className="text-xl font-medium text-center text-prim-2">
        {statusMessage}
      </p>
    </div>
  );
};

export default Loading;
