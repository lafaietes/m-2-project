// CustomerDetails.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CustomerDetails({ customerId }) {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/users/${customerId}`)
      .then(res => setCustomer(res.data))
      .catch(err => console.log(err));
  }, [customerId]);

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h3>Customer Information</h3>
      <div className='mb-2'>
        <strong>Name:</strong> {customer.name}
      </div>

      <div className='mb-2'>
        <strong>NIF:</strong> {customer.nif}
      </div>

      <div className='mb-2'>
        <strong>Email:</strong> {customer.email}
      </div>

      <div className='mb-3'>
        <strong>Phone:</strong> {customer.phone}
      </div>

      <div className='mb-2'>
        <strong>Address:</strong> {customer.address.street}, {customer.address.number}, {customer.address.postal}, {customer.address.city}, {customer.address.country}
      </div>

      <Link to={`/update/${customerId}`} className='btn btn-success'>Edit</Link>
      <Link to="/customers" className='btn btn-primary ms-3'>Back</Link>
    </>
  );
}

export default CustomerDetails;
