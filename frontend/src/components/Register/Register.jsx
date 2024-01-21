import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }

    // Simulating registration by storing user data in localStorage
    const user = {
      username,
      password,
      role: selectedRole,
    };

    // Check if the user already exists in localStorage
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const userExists = existingUsers.some((existingUser) => existingUser.username === user.username);

    if (userExists) {
      alert('User already registered. Please use a different username.');
    } else {
      // Add the new user to the list of registered users
      localStorage.setItem('registeredUsers', JSON.stringify([...existingUsers, user]));

      // Display success message
      alert('User has been successfully registered!');

      // Redirect to the login page
      navigate('/login');
    }

    // Clear form fields
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setSelectedRole('');
  };

  return (
    <div className="app">
      <header className="header-style">
        <h1>Conference Meeting</h1>
      </header>
      <div className="custom-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
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
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm your password"
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
