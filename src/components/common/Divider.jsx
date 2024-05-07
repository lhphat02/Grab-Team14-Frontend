const Divider = ({ text }) => {
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
