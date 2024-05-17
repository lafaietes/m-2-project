import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-light vh-100 background-image"> {/* Adicione a classe background-image aqui */}
      <div className="text-center">
        <h1>Welcome to <strong>Quase Morto</strong> Pharmacy</h1>
        <h2>Customer Data System</h2>
        <div className="d-flex justify-content-center align-items-center">
          <div className="w-75 rounded bg-white border shadow p-4">
            <p>Simplify customer management and elevate your productivity!</p>
            <Link to="/customers" className="btn btn-success">Start Now</Link> 
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-center align-items-center">
          <div className="w-75 rounded bg-white border shadow p-4">
            <p>This is a C.R.U.D. App</p>
            <Link to="/about" className="btn border btn-light">Learn more</Link> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
