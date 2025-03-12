import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/Sidebar.css';

export default function Sidebar() {
  
  const location = useLocation(); // localizador de página do router

  return (
    <div className="sidebar">
      <ul className="nav-list">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            <i className='bx bx-grid-alt'></i>
          </Link>
          <span className="tooltip">Home</span>
        </li>
        <li>
          <Link to="/pomodoroTimer" className={location.pathname === '/pomodoroTimer' ? 'active' : ''}>
            <i className='bx bx-timer'></i>
          </Link>
          <span className="tooltip">Pomodoro</span>
        </li>
        <li>
          <Link to="/tasks" className={location.pathname === '/tasks' ? 'active' : ''}>
            <i className='bx bx-task'></i>
          </Link>
          <span className="tooltip">Tasks</span>
        </li>
        <li>
          <Link to="/mentalMaps" className={location.pathname === '/mentalMaps' ? 'active' : ''}>
            <i className='bx bx-brain'></i>
          </Link>
          <span className="tooltip">Mapas Mentais</span>
        </li>
        <li>
          <Link to="/notas" className={location.pathname === '/notas' ? 'active' : ''}>
            <i className='bx bx-user'></i>
          </Link>
          <span className="tooltip">Minhas Notas</span>
        </li>
        <li>
          <Link to="/desempenho" className={location.pathname === '/desempenho' ? 'active' : ''}>
            <i className='bx bx-pie-chart-alt-2'></i>
          </Link>
          <span className="tooltip">Desempenho</span>
        </li>
      </ul>
      <div className="config">
        <Link to="/config" className={location.pathname === '/config' ? 'active' : ''}>
            <i className='bx bx-cog'></i>
        </Link>
        <span className="tooltip">Configurações</span>
      </div>
      {/* <div
        className="resizer"
        onMouseDown= {() => setIsDragging(true)}}
        /> */}
    </div>
  );
  /* // caso queira futuramente implementar uma sidebar redimensionável
  
  const [width, setWidth] = useState(window.innerWidth); // pegando dimensão da tela
  const maxWidthSidebar = width * 0.2; // tamanho máximo da sidebar deve ser 20% da tela
  const minWidthSidebar = 60; // largura mínima da sidebar para mostrar apenas ícones
  const [sidebarWidth, setSidebarWidthState] = useState(minWidthSidebar); // largura inicial da sidebar
  const [isDragging, setIsDragging] = useState(false); 
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const newWidth = e.clientX;
        if (newWidth >= minWidthSidebar && newWidth <= maxWidthSidebar) {
          setSidebarWidthState(newWidth);
          setSidebarWidth(newWidth);
        } else if (newWidth < minWidthSidebar) {
          setSidebarWidthState(minWidthSidebar);
          setSidebarWidth(minWidthSidebar);
        }
      }
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]); */
}