const Card = ({ 
  children, 
  title = null, 
  className = '', 
  footer = null, 
  noPadding = false 
}) => {
  return (
    <div className={`card ${className} ${noPadding ? 'no-padding' : ''}`}>
      {title && <div className="card-header">{title}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;