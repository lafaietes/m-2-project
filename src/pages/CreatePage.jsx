import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import FormInput from '../components/FormInput';
import AddressInput from '../components/AddressInput';
import FormSubmitButton from '../components/FormSubmitButton';

function CreatePage() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    nif: '',
    address: {
      street: '',
      number: '',
      postal: '',
      city: '',
      country: ''
    }
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    for (const field of Object.values(values)) {
      if (typeof field === 'object') {
        for (const subField of Object.values(field)) {
          if (!subField) {
            alert('Please fill out all fields!');
            return;
          }
        }
      } else {
        if (!field) {
          alert('Please fill out all fields!');
          return;
        }
      }
    }
    axios.post('http://localhost:3001/users', values)
      .then(res => {
        console.log(res);
        navigate('/customers');
      })
      .catch(err => console.log(err));
  };

  const handleInputChange = (field, value) => {
    setValues({ ...values, [field]: value });
  };

  const handleAddressChange = (field, value) => {
    setValues({
      ...values,
      address: {
        ...values.address,
        [field]: value
      }
    });
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Customer Registration</h1>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Name"
            type="text"
            name="name"
            placeholder="Enter name"
            value={values.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
          <FormInput
            label="NIF"
            type="number"
            name="nif"
            placeholder="Enter NIF"
            value={values.nif}
            onChange={(e) => handleInputChange('nif', e.target.value)}
          />
          <FormInput
            label="E-mail"
            type="email"
            name="email"
            placeholder="Enter e-mail"
            value={values.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
          <FormInput
            label="Phone"
            type="number"
            name="phone"
            placeholder="Enter phone"
            value={values.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
          />
          <AddressInput
            address={values.address}
            onAddressChange={handleAddressChange}
          />
          <FormSubmitButton onSubmit={handleSubmit} />
          <Link to='/customers' className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>
  );
}

export default CreatePage;
