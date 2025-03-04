import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Notas from './pages/Notas';
import Desempenho from './pages/Desempenho';

export default function App() {
  return (
    <Router basename="/">
      <div style={{ display: 'flex' }}>
        <Navbar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notas" element={<Notas />} />
            <Route path="/desempenho" element={<Desempenho />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}