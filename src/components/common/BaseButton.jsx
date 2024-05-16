const BaseButton = ({ children, onClick, className, outline, disabled }) => {
  return (
    <button
      className={[className, outline ? 'btn-outline' : 'btn'].join(' ')}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default BaseButton;
