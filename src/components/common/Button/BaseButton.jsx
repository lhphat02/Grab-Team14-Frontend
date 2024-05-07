const BaseButton = ({ children, onClick, className, outline }) => {
  return (
    <button
      className={[className, outline ? 'btn-outline' : 'btn'].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BaseButton;
