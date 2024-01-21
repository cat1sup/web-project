import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();

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
    switch (selectedRole) {
      case 'organizer':
        navigate('/organizer');
        break;
      case 'reviewer':
        navigate('/reviewer');
        break;
      case 'author':
        navigate('/author');
        break;
      default:
        console.log('Invalid role selected');
    }

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
              className="custom-input"
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
              className="custom-input"
            />
          </label>
          <br />
          <label>
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
          <br />
          <button type="submit" className="custom-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
