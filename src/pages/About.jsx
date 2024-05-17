import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="d-flex center flex-column justify-content-center align-items-center bg-light vh-100">
      <h2>It seems like you want to know a little more about:</h2>
      <br /> <br />
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-6">
            <div className="w-100 rounded bg-white border shadow p-4 mb-3">
              <h4 className="text-center">Customer Data System App</h4>
              <p className="text-justify">
                This application is a CRUD (Create, Read, Update, Delete) app with a simulated database, enabling users to manipulate data within a virtual database environment. It was constructed using React hooks, DOM routes, and Bootstrap for styling.<br />The primary objective is to enhance the management of customer data for pharmacies or other businesses, should you choose to utilize the code.
              </p>
              <div className="d-flex justify-content-center">
                <Link to="https://www.github.com/lafaietes" className="btn btn-dark me-2">GitHub Repo</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="w-100 rounded bg-white border shadow p-4 mb-3">
              <h4 className="text-center">The creator</h4>
              <p className="text-justify">
                Lafaiete Santos is a student at Lisbon's Ironhack Web Development full-time bootcamp started on April 2024. As part of the course's second module, which focuses on React, APIs and mock database manipulation, he developed this app as his final project.<br />Feel free to contact him anytime to provide suggestions, discuss code, or related topics.
              </p>
              <div className="d-flex justify-content-center">
              <Link to="https://www.linkedin.com/in/lafaiete-santos-3885b7242/" target="_blank" className="btn btn-primary border-primary me-2">LinkedIn</Link>
  <Link to="https://buymeacoffee.com/lafaiete" target="_blank" className="btn btn-light border">Offer a coffee</Link>
</div>

              
            </div>
          </div>
        </div>
      </div>
      <br /> <br />
      <Link to="/" className="btn btn-warning">Back to Homepage</Link>
    </div>
  );
}

export default About;
