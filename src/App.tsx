import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import RSVP from './pages/RSVP';
import Info from './pages/Info';
import Questionnaire from './pages/Questionnaire';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-beige">
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/info" element={<Info />} />
            <Route path="/questionnaire" element={<Questionnaire />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;