import React from 'react';
import localImage from '/images/404.png';

function ErrorPage() {
  return (
    <div className="container error-container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <img src={localImage} alt="404 Error" className="error-image img-fluid" style={{ width: '800px', height: 'auto' }} />
        <h1 className="error-heading display-4">Oops! Page Not Found</h1>
        <p className="error-message lead">The requested URL <code></code> was not found on this server.</p>
        <p className="error-message">Sorry about that. Let's get you back on track.</p>
        <a href="/" className="btn btn-light border">Go Back to Homepage</a>
      </div>
    </div>
  );
}

export default ErrorPage;
