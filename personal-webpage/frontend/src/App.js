import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import navBar from './components/navBar';

import home from './components/home';
import Posts from './components/Posts';
import education from './components/education';
import projects from './components/projects';
import skills from './components/skills';
import contact from './components/contact';

function App() {
  return (
    <Router>
      <navBar />
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/posts" element={<posts />} />
        <Route path="/education" element={<education />} />
        <Route path="/projects" element={<projects />} />
        <Route path="/skills" element={<skills />} />
        <Route path="/contact" element={<contact />} />
      </Routes>
    </Router>
  );
}

export default App;
