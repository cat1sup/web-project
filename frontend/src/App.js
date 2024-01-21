import React from 'react';
import LoginForm from './components/Login/LoginForm';
import Organizer from './components/Organizer/Organizer';
import Register from './components/Register/Register';
import Author from './components/Author/Author';
import Reviewer from './components/Reviewer/Reviewer';
import Conference from './components/Conference/Conference';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Conference />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
