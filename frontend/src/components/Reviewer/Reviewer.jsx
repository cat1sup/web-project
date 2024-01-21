import React, { useState } from 'react';
import './Reviewer.css';

const ReviewerPage = () => {
  const [meetingInfo, setMeetingInfo] = useState({
    name: 'Conference A',
    description: 'Annual conference on technology and innovation.',
    submittedFile: 'paper_submission.pdf', 
  });

  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleReturnPaperClick = () => {
    // Add logic to handle returning the paper
    console.log('Returning Paper for Meeting:', meetingInfo.name);
  };

  const handleAcceptPaperClick = () => {
    // Add logic to handle accepting the paper
    console.log('Accepting Paper for Meeting:', meetingInfo.name);
  };

  return (
    <div className="reviewer-page">
      <div className="reviewer-meeting-info">
        <h1>Reviewer Page</h1>
        <h2>Meeting Information</h2>
        <p className="reviewer-info"><strong>Name:</strong> {meetingInfo.name}</p>
        <p className="reviewer-info"><strong>Description:</strong> {meetingInfo.description}</p>
        <p className="reviewer-info"><strong>Submitted File:</strong> {meetingInfo.submittedFile}</p>
      </div>

      <div className="reviewer-feedback-container">
        <h2>Feedback</h2>
        <textarea
          value={feedback}
          onChange={handleFeedbackChange}
          placeholder="Provide your feedback here..."
          className="reviewer-textarea"
        />
      </div>

      <div className="reviewer-buttons-container">
        <button className="reviewer-button" onClick={handleReturnPaperClick}>Return Paper</button>
        <button className="reviewer-button" onClick={handleAcceptPaperClick}>Accept Paper</button>
      </div>
    </div>
  );
};

export default ReviewerPage;
