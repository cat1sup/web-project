import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [selectedRole, setSelectedRole] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', credentials, 'as', selectedRole);
    setCredentials({ username: '', password: '' });
    setSelectedRole('');
  };

  return (
    <div className="container">
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <div className="styled-dropdown">
          <label className="dropdown-label">
            Choose your role:
            <select className="dropdown-select" value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
              <option value="">Select Role</option>
              <option value="organizer">Organizer</option>
              <option value="reviewer">Reviewer</option>
              <option value="author">Author</option>
            </select>
          </label>
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
