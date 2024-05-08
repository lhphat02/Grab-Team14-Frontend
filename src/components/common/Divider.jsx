const Divider = ({ text, vertical }) => {
  if (vertical) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="h-full border-r border-prim-1"></div>
        {text ? (
          <p className="mt-2 text-lg font-medium text-prim-1 text-nowrap ">
            {text}
          </p>
        ) : null}
        <div className="h-full border-r border-prim-1"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full border-t border-prim-1"></div>
      {text ? (
        <p className="mx-2 text-lg font-medium text-prim-1 text-nowrap ">
          {text}
        </p>
      ) : null}
      <div className="w-full border-t border-prim-1"></div>
    </div>
  );
};

export default Divider;
