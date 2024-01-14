import React, { useState } from 'react';
import './Author.css';

const AuthorPage = () => {
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [fileInput, setFileInput] = useState(null);
  const [attendMessage, setAttendMessage] = useState(null);
  const [proposalMessage, setProposalMessage] = useState(null);

  // Mock-up meetings data
  const meetings = [
    {
      id: 1,
      title: 'Conference A',
      description: 'Annual conference on technology and innovation.',
    },
    {
      id: 2,
      title: 'Workshop B',
      description: 'Hands-on workshop for developers and designers.',
    },
    {
      id: 3,
      title: 'Symposium C',
      description: 'Symposium exploring recent advancements in science.',
    },
  ];

  const handleMeetingSelect = (e) => {
    const selectedMeetingId = parseInt(e.target.value, 10);
    const meeting = meetings.find((m) => m.id === selectedMeetingId);
    setSelectedMeeting(meeting);
  };

  const handleAttendClick = () => {
    if (selectedMeeting) {
      setAttendMessage(`You decided to attend "${selectedMeeting.title}" meeting.`);
      console.log('Attending Meeting:', selectedMeeting);
    } else {
      setAttendMessage(null);
      alert('Please select a meeting to attend.');
    }
  };

  const handleProposalClick = () => {
    if (selectedMeeting && fileInput) {
      setProposalMessage(`You made a paper proposal for "${selectedMeeting.title}" meeting.`);
      console.log('Submitting Proposal for Meeting:', selectedMeeting);
      console.log('Uploaded File:', fileInput.files[0]);
    } else {
      setProposalMessage(null);
      alert('Please select a meeting and upload a file for the proposal.');
    }
  };

  return (
    <div className="author-page">
      <h1>Author Page</h1>
      <div className="author-meetings-list">
        <h2>Meetings</h2>
        <ul>
          {meetings.map((meeting) => (
            <li key={meeting.id}>
              <label>
                <input
                  type="radio"
                  name="meeting"
                  value={meeting.id}
                  checked={selectedMeeting && selectedMeeting.id === meeting.id}
                  onChange={handleMeetingSelect}
                />
                <div>
                  <strong>{meeting.title}</strong>
                  <p>{meeting.description}</p>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="author-buttons-container">
        <button onClick={handleAttendClick} disabled={attendMessage !== null}>
          Attend
        </button>
        <div>
          <label>
            Upload Proposal:
            <input type="file" onChange={(e) => setFileInput(e.target)} />
          </label>
        </div>
        <button onClick={handleProposalClick} disabled={proposalMessage !== null}>
          Make a Paper Proposal
        </button>
      </div>
      {attendMessage && <p>{attendMessage}</p>}
      {proposalMessage && <p>{proposalMessage}</p>}
    </div>
  );
};

export default AuthorPage;
