const AuthFormLayout = ({
  showLogo = true,
  title,
  onFormSubmit,
  formDetails,
  footer,
}) => {
  return (
    <div className="flex flex-col w-full max-w-md px-6 py-4 space-y-6 bg-white shadow-md md:px-12 md:py-8 md:space-y-8 rounded-xl">
      <div className="md:space-y-2">
        {showLogo && (
          <h1 className="font-black text-center text-prim-1">emploi</h1>
        )}
        <h5 className="font-semibold text-center text-prim-1">{title}</h5>
      </div>

      <form className="flex flex-col space-y-6" onSubmit={onFormSubmit}>
        {formDetails}
      </form>

      <div className="flex flex-col items-center justify-center w-full space-x-2 md:flex-row">
        {footer}
      </div>
    </div>
  );
};

export default AuthFormLayout;
