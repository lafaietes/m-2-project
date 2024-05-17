import React from 'react';

function FormSubmitButton({ onSubmit }) {
  return (
    <button className="btn btn-success" onClick={onSubmit}>
      Submit
    </button>
  );
}

export default FormSubmitButton;
