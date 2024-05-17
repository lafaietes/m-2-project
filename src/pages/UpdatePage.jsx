// UpdatePage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import CustomerUpdateForm from '../components/CustomerUpdateForm';

function UpdatePage() {
  const { id } = useParams();

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <CustomerUpdateForm customerId={id} />
      </div>
    </div>
  );
}

export default UpdatePage;
