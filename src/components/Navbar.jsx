import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    const btnMenu = document.getElementById('btn-menu');
    btnMenu.classList.toggle('bx-menu-alt-right'); // mudando o ícone do botão menu
    const logodetails = document.querySelector('.logo-details');
    const logotext = document.querySelector('.logo-text');
    logodetails.style.justifyContent = !isOpen ? 'flex-start' : 'center'; // mudando alinhamento do logo e botão menu
    logotext.style.transition = isOpen ? '0s' : '1s'; // removendo transição do texto do logo
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="logo-details">
        <div className="logo-text">SmartNotes</div>
        <i className='bx bx-menu' id="btn-menu" onClick={toggleSidebar}></i>
      </div>
      <ul className="nav-list">
        <li>
          <Link to="/">
            <i className='bx bx-grid-alt'></i>
            <span className="links_name">Home</span>
          </Link>
          <span className="tooltip">Home</span>
        </li>
        <li>
          <Link to="/notas">
            <i className='bx bx-user'></i>
            <span className="links_name">Minhas Notas</span>
          </Link>
          <span className="tooltip">Minhas Notas</span>
        </li>
        <li>
          <Link to="/desempenho">
            <i className='bx bx-pie-chart-alt-2'></i>
            <span className="links_name">Desempenho</span>
          </Link>
          <span className="tooltip">Desempenho</span>
        </li>
      </ul>
    </div>
  );
}