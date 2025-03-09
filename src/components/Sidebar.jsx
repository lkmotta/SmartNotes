import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  // caso queira futuramente implementar uma sidebar redimensionável

  /* const [width, setWidth] = useState(window.innerWidth); // pegando dimensão da tela
  const maxWidthSidebar = width * 0.2; // tamanho máximo da sidebar deve ser 30% da tela
  const minWidthSidebar = 64; // largura mínima da sidebar para mostrar apenas ícones
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

  return (
    <div className="sidebar">
      {/* <div className="logo-details">
        <div className="logo-text">SN</div>
      </div>} */}
      <ul className="nav-list">
        <li>
          <Link to="/">
            <i className='bx bx-grid-alt'></i>
          </Link>
          <span className="tooltip">Home</span>
        </li>
        <li>
          <Link to="/PomodoroTimer">
            <i class='bx bx-timer'></i>
          </Link>
          <span className="tooltip">Pomodoro</span>
        </li>
        <li>
          <Link to="Tasks">
            <i class='bx bx-task' ></i>
          </Link>
          <span className="tooltip">Tasks</span>
        </li>
        <li>
          <Link to="MentalMaps">
            <i className='bx bx-brain' ></i>
          </Link>
          <span className="tooltip">Mapas Mentais</span>
        </li>
        <li>
          <Link to="/Notas">
            <i className='bx bx-user'></i>
          </Link>
          <span className="tooltip">Minhas Notas</span>
        </li>
        <li>
          <Link to="/Desempenho">
            <i className='bx bx-pie-chart-alt-2'></i>
          </Link>
          <span className="tooltip">Desempenho</span>
        </li>
      </ul>
      <div className="configs">
        <Link to="/Config">
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
}