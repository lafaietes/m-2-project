// ReadPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import CustomerDetails from '../components/CustomerDetails';

function ReadPage() {
  const { id } = useParams();

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <CustomerDetails customerId={id} />
      </div>
    </div>
  );
}

export default ReadPage;
