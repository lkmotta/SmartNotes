import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
    <nav style={styles.navbar}>
      <h2>📚 SmartNotes</h2>
      <ul style={styles.navList}>
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/notas">📝 Minhas Notas</Link></li>
        <li><Link to="/grafico">📊 Desempenho</Link></li>
      </ul>
    </nav>
    );
}

const styles = {
    navbar: { width: '250px', height: '100vh', background: '#2c3e50', color: 'white', padding: '20px' },
    navList: { listStyle: 'none', padding: 0 }
};

//https://boxicons.com/