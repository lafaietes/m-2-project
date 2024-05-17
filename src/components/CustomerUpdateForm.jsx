// CustomerUpdateForm.jsx

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CustomerUpdateForm({ customerId }) {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    address: {
      street: '',
      number: '',
      postal: '',
      city: '',
      country: ''
    },
    nif: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/users/${customerId}`)
      .then(res => {
        setValues(res.data);
      })
      .catch(err => console.log(err));
  }, [customerId]);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3001/users/${customerId}`, values)
      .then(res => {
        console.log(res);
        navigate('/customers');
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <h1>Edit Customer Information</h1>
      <form onSubmit={handleUpdate}>
        <div className='mb-3'>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' className='form-control' placeholder='Name'
            value={values.name} onChange={e => setValues({ ...values, name: e.target.value })} />
        </div>
        <div className='mb-3'>
          <label htmlFor='nif'>NIF:</label>
          <input type='number' name='nif' className='form-control' placeholder='NIF'
            value={values.nif} onChange={e => setValues({ ...values, nif: e.target.value })} />
        </div>
        <div className='mb-3'>
          <label htmlFor='email'>Email:</label>
          <input type='email' name='email' className='form-control' placeholder='Email'
            value={values.email} onChange={e => setValues({ ...values, email: e.target.value })} />
        </div>
        <div className='mb-3'>
          <label htmlFor='phone'>Phone:</label>
          <input type='text' name='phone' className='form-control' placeholder='Phone'
            value={values.phone} onChange={e => setValues({ ...values, phone: e.target.value })} />
        </div>
        <div className='mb-3'>
          <h6>Address:</h6>
          <input type='text' name='street' className='form-control mb-2' placeholder='Street'
            value={values.address.street} onChange={e => setValues({ ...values, address: { ...values.address, street: e.target.value } })} />
          <input type='text' name='number' className='form-control mb-2' placeholder='Number'
            value={values.address.number} onChange={e => setValues({ ...values, address: { ...values.address, number: e.target.value } })} />
          <input type='text' name='postal' className='form-control mb-2' placeholder='Postal Code'
            value={values.address.postal} onChange={e => setValues({ ...values, address: { ...values.address, postal: e.target.value } })} />
          <input type='text' name='city' className='form-control mb-2' placeholder='City'
            value={values.address.city} onChange={e => setValues({ ...values, address: { ...values.address, city: e.target.value } })} />
          <input type='text' name='country' className='form-control mb-3' placeholder='Country'
            value={values.address.country} onChange={e => setValues({ ...values, address: { ...values.address, country: e.target.value } })} />
        </div>
        <button className='btn btn-success'>Update</button>
        <Link to='/customers' className='btn btn-primary ms-3'>Back</Link>
      </form>
    </>
  );
}

export default CustomerUpdateForm;
