import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in as:', username, 'having the password:', password, 'as', selectedRole);
    setUsername('');
    setPassword('');
    setSelectedRole('');
  };

  return (
    <div className="app">
      <header className="header-style">
        <h1>Conference Meeting</h1>
      </header>
      <div className="custom-container">     
        <h2>Register</h2>
        <form onSubmit={handleLogin}>
          <label className="custom-label">
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleInputChange}
              placeholder="Enter your email here"
              className="custom-input"
            />
          </label>
          <br />
          <label className="custom-label">
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              placeholder="Enter your password here"
              className="custom-input"
            />
          </label>
          <br />
          <label className="custom-label">
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              placeholder="Enter your password here"
              className="custom-input"
            />
          </label>
          <br />

          <div className="styled-dropdown">
            <label className="custom-select-label">
              Choose your role:
              <select
                className="custom-select"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option value="">Select Role</option>
                <option value="organizer">Organizer</option>
                <option value="reviewer">Reviewer</option>
                <option value="author">Author</option>
              </select>
            </label>
          </div>
          <br />
          <button type="submit" className="custom-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
