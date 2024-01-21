import React from 'react';
import { Link } from 'react-router-dom';
import './Conference.css';

const Conference = () => {
  return (
    <div className="conference-page">
      <h1>Conference Meetings</h1>
      <div className="conference-buttons-container">
        <Link to="/login" className="conference-button">
          Log In
        </Link>
        <Link to="/register" className="conference-button">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Conference;
