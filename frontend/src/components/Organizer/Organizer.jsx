// import React, { useState } from 'react';
// import './Organizer.css';

// const Organizer = () => {
//   const [conferenceName, setConferenceName] = useState('');
//   const [description, setDescription] = useState('');
//   const [selectedReviewers, setSelectedReviewers] = useState([]);
//   const [availableReviewers] = useState([
//     'Reviewer 1',
//     'Reviewer 2',
//     'Reviewer 3',
//     // Add more reviewers as needed
//   ]);

//   const handleConferenceNameChange = (e) => {
//     setConferenceName(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleReviewerChange = (e) => {
//     const selectedOptions = Array.from(e.target.options)
//       .filter((option) => option.selected)
//       .map((option) => option.value);
//     setSelectedReviewers(selectedOptions);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform submission logic here
//     console.log('Conference Name:', conferenceName);
//     console.log('Description:', description);
//     console.log('Selected Reviewers:', selectedReviewers);
//     // Add additional logic as needed
//   };

//   return (
//     <div className="container">
//       <header className="header">
//         <h1>Create Conference</h1>
//       </header>
//       <form onSubmit={handleSubmit} className="form">
//         <label>
//           Conference Name:
//           <input
//             type="text"
//             value={conferenceName}
//             onChange={handleConferenceNameChange}
//             placeholder="Enter conference name"
//           />
//         </label>
//         <br />
//         <label>
//           Description:
//           <textarea
//             value={description}
//             onChange={handleDescriptionChange}
//             placeholder="Enter conference description"
//           />
//         </label>
//         <br />
//         <div className="styled-dropdown">
//           <label className="dropdown-label">
//             Reviewers:
//             <select
//               multiple
//               className="dropdown-select"
//               value={selectedReviewers}
//               onChange={handleReviewerChange}
//             >
//               {availableReviewers.map((reviewer) => (
//                 <option key={reviewer} value={reviewer}>
//                   {reviewer}
//                 </option>
//               ))}
//             </select>
//           </label>
//         </div>
//         <br />
//         <button type="submit" className="submit-button">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Organizer;
