const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  fullWidth = false,
  disabled = false,
  type = 'button',
  icon = null
}) => {
  return (
    <button 
      className={`btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full-width' : ''}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      <span className="btn-text">{children}</span>
    </button>
  );
};

export default Button;