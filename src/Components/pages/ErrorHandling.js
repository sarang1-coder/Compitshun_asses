import React from 'react';
import '../../assets/css/error.css'; 

const ErrorHandling = () => {
  return (
    <div className="error-container">
      <h1>Oops, Route Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default ErrorHandling;
