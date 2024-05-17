import React from 'react';

function FormInput({ label, type, name, placeholder, value, onChange }) {
  return (
    <div className="mb-2">
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        name={name}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default FormInput;
