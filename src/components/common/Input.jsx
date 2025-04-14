const Input = ({ 
    label, 
    name, 
    type = 'text', 
    placeholder = '', 
    value, 
    onChange,
    error = null,
    required = false,
    disabled = false
  }) => {
    return (
      <div className="form-group">
        {label && (
          <label htmlFor={name} className="form-label">
            {label} {required && <span className="required">*</span>}
          </label>
        )}
        <input
          id={name}
          name={name}
          type={type}
          className={`form-input ${error ? 'error' : ''}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
        />
        {error && <div className="form-error">{error}</div>}
      </div>
    );
  };
  
  export default Input;