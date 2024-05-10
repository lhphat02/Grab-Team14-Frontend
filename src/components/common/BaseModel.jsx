const BaseModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div
          className="fixed inset-0 transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-md p-6 mx-auto bg-white rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BaseModal;
