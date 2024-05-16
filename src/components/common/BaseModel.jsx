const BaseModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 w-full overflow-y-auto">
      <div className="flex items-center justify-center w-full h-full min-h-screen px-4 py-12">
        <div
          className="fixed inset-0 transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-prim-4 opacity-60"></div>
        </div>

        <div className="relative flex w-full h-full max-w-4xl bg-white rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BaseModal;
