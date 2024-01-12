import React, { useState } from 'react';
import './Organizer.css';

const Organizer = () => {
  const [conferenceName, setConferenceName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedReviewers, setSelectedReviewers] = useState([]);
  const [availableReviewers, setAvailableReviewers] = useState([
    'Reviewer 1',
    'Reviewer 2',
    'Reviewer 3',
    'Reviewer 4',
  ]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleConferenceNameChange = (e) => {
    setConferenceName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleCheckboxChange = (value) => {
    setSelectedReviewers((prevReviewers) => {
      if (prevReviewers.includes(value)) {
        // If the reviewer is already selected, remove it
        return prevReviewers.filter((reviewer) => reviewer !== value);
      } else {
        // If the reviewer is not selected, add it
        return [...prevReviewers, value];
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
    console.log('Conference Name:', conferenceName);
    console.log('Description:', description);
    console.log('Selected Reviewers:', selectedReviewers);
    // Add additional logic as needed
  };

  return (
    <div className="organizer-app">
      <header className="organizer-header">
        <h1>Create Conference</h1>
      </header>
      <div className="organizer-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="organizer-form">
          <label className="organizer-label">
            Conference Name:
            <input
              type="text"
              value={conferenceName}
              onChange={handleConferenceNameChange}
              placeholder="Enter conference name"
              className="organizer-input"
            />
          </label>
          <br />
          <label className="organizer-label">
            Description:
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Enter conference description"
              className="organizer-textarea"
            />
          </label>
          <br />
          <div className="organizer-styled-dropdown">
            <label className="organizer-dropdown-label">
              Reviewers:
              <div id="reviewersDropdown" className={`dropdown-check-list ${isDropdownVisible ? 'visible' : ''}`} tabIndex="100">
                <span className="anchor" onClick={toggleDropdown}>
                  Select Reviewers
                </span>
                <ul className="items">
                  {availableReviewers.map((reviewer) => (
                    <li key={reviewer}>
                      <label>
                        <input
                          type="checkbox"
                          className="reviewer-checkbox"
                          value={reviewer}
                          checked={selectedReviewers.includes(reviewer)}
                          onChange={() => handleCheckboxChange(reviewer)}
                        />
                        {reviewer}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </label>
          </div>
          <br />
          <button type="submit" className="organizer-submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Organizer;
