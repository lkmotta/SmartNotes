import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import PomodoroTimer from './pages/pomodoroTimer';
import Tasks from './pages/tasks';
import MentalMaps from './pages/mentalMaps';
import Notas from './pages/Notas';
import Desempenho from './pages/Desempenho';
import Config from './pages/Config';

export default function App() {
  const [sidebarWidth, setSidebarWidth] = useState(60); // largura inicial da sidebar

  return (
    <Router basename="/">
      <div style={{ display: 'flex', marginLeft: `${sidebarWidth}px` }}>
        <Sidebar />
        <div style={{ flex: 1 }}> {/* 20px de margem para o conteúdo */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pomodoroTimer" element={<PomodoroTimer />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/mentalMaps" element={<MentalMaps />} />
            <Route path="/notas" element={<Notas />} />
            <Route path="/desempenho" element={<Desempenho />} />
            <Route path="/config" element={<Config />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}