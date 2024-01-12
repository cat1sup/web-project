import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
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
    setUsername('');
    setPassword('');
    setSelectedRole('');
  };

  return (
    <div className="app">
      <header class="headerStyle">
      <h1>Conference Meeting</h1>
    </header>
    <div className="container">     
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
            placeholder="Enter your email here"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Enter your password here"
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
    </div>
  );
};

export default LoginForm;

