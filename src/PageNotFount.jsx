import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css'; // Import the external CSS

function PageNotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-heading">404</h1>
      <p className="notfound-text">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/Home" className="notfound-link">Go to Home</Link>
    </div>
  );
}

export default PageNotFound;
