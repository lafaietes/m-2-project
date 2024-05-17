// src/components/CustomerList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function CustomerList({ data, searchResults, handleDetails, handleDelete }) {
  return (
    <div className="w-75 rounded bg-white border shadow p-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {(searchResults.length > 0 ? searchResults : data).map((d) => (
            <tr key={d.id}>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.phone}</td>
              <td>
                <button
                  onClick={() => handleDetails(d.id)}
                  className="btn btn-sm btn-secondary me-2"
                >
                  Details
                </button>
                <Link to={`/update/${d.id}`} className="btn btn-sm btn-primary me-2">
                  Edit
                </Link>
                <button onClick={() => handleDelete(d.id)} className="btn btn-sm btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;
