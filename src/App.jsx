import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Notas from './pages/Notas';
import Desempenho from './pages/Desempenho';

export default function App() {
  const [sidebarWidth, setSidebarWidth] = useState(64); // largura inicial da sidebar

  return (
    <Router basename="/">
      <div style={{ display: 'flex' }}>
        <Sidebar setSidebarWidth={setSidebarWidth} />
        <div style={{ flex: 1, marginLeft: `${sidebarWidth+20}px` }}> {/* 20px de margem para o conteúdo */}
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