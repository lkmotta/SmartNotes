import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  // funções de controle do menu
  useEffect(() => {
    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");
    //let searchBtn = document.querySelector(".bx-search");

    closeBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      menuBtnChange();
    });

    /* searchBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      menuBtnChange();
    }); */

    // comentei o search button pq ta inutil na navbar

    function menuBtnChange() {
      if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    }
  }, []);

  // navbar html
  return (
    <div className="sidebar" style={styles.sidebar}>
      {/* Logo do APP */}
      <div className="logo-details" style={styles.logoDetails}>
        <i className='bx bxl-nodejs icon' style={styles.icon}></i>
        <div className="logo_name" style={styles.logoName}>SmartNotes</div>
        <i className='bx bx-menu' id="btn" style={styles.btn}></i>
      </div>


      <ul className="nav-list" style={styles.navList}>
        {/* <li style={styles.listItem}>
          <i className='bx bx-search' style={styles.bxSearch}></i>
          <input type="text" placeholder="Search..." style={styles.input} />
          <span className="tooltip" style={styles.tooltip}>Search</span>
        </li> */}
        <li style={styles.listItem}>
          <Link to="/" style={styles.link}>
            <i className='bx bx-grid-alt'></i>
            <span className="links_name" style={styles.linksName}>Home</span>
          </Link>
          <span className="tooltip" style={styles.tooltip}>Home</span>
        </li>
        <li style={styles.listItem}>
          <Link to="/notas" style={styles.link}>
            <i className='bx bx-user'></i>
            <span className="links_name" style={styles.linksName}>Minhas Notas</span>
          </Link>
          <span className="tooltip" style={styles.tooltip}>Minhas Notas</span>
        </li>
        <li style={styles.listItem}>
          <Link to="/desempenho" style={styles.link}>
            <i className='bx bx-pie-chart-alt-2'></i>
            <span className="links_name" style={styles.linksName}>Desempenho</span>
          </Link>
          <span className="tooltip" style={styles.tooltip}>Desempenho</span>
        </li>
      </ul>
    </div>
  );
}

const styles = {
  sidebar: {
    position: 'fixed',
    fontFamily: '"DM Serif Text", serif',
    fontWeight: 400,
    fontStyle: 'normal',
    left: 0,
    top: 0,
    height: '100%',
    width: '78px',
    background: '#11101D',
    padding: '6px 14px',
    zIndex: 99,
    transition: 'all 0.5s ease',
  },

  sidebarOpen: {
    width: '250px',
  },
  logoDetails: {
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  icon: {
    opacity: 0,
    transition: 'all 0.5s ease',
  },
  logoName: {
    color: '#fff',
    fontSize: '20px',
    fontWeight: 600,
    opacity: 0,
    transition: 'all 0.5s ease',
  },
  logoDetailsOpen: {
    opacity: 1,
  },
  btn: {
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: 'translateY(-50%)',
    fontSize: '22px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.5s ease',
  },
  btnOpen: {
    textAlign: 'right',
  },
  navList: {
    marginTop: '20px',
    height: '100%',
  },
  listItem: {
    position: 'relative',
    margin: '8px 0',
    listStyle: 'none',
  },
  tooltip: {
    position: 'absolute',
    top: '-20px',
    left: 'calc(100% + 15px)',
    zIndex: 3,
    background: '#fff',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)',
    padding: '6px 12px',
    borderRadius: '4px',
    fontSize: '15px',
    fontWeight: 400,
    opacity: 0,
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    transition: '0s',
  },
  tooltipHover: {
    opacity: 1,
    pointerEvents: 'auto',
    transition: 'all 0.4s ease',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  input: {
    fontSize: '15px',
    color: '#FFF',
    fontWeight: 400,
    outline: 'none',
    height: '50px',
    width: '100%',
    border: 'none',
    borderRadius: '12px',
    transition: 'all 0.5s ease',
    background: '#1d1b31',
  },
  inputOpen: {
    padding: '0 20px 0 50px',
    width: '100%',
  },
  bxSearch: {
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translateY(-50%)',
    fontSize: '22px',
    background: '#1d1b31',
    color: '#FFF',
  },
  bxSearchHover: {
    background: '#FFF',
    color: '#11101d',
  },
  link: {
    display: 'flex',
    height: '100%',
    width: '100%',
    borderRadius: '12px',
    alignItems: 'center',
    textDecoration: 'none',
    transition: 'all 0.4s ease',
    background: '#11101D',
  },
  linkHover: {
    background: '#FFF',
  },
  linksName: {
    color: '#fff',
    fontSize: '15px',
    fontWeight: 400,
    whiteSpace: 'nowrap',
    opacity: 0,
    pointerEvents: 'none',
    transition: '0.4s',
  },
  linksNameOpen: {
    opacity: 1,
    pointerEvents: 'auto',
  },
  profile: {
    position: 'fixed',
    height: '60px',
    width: '78px',
    left: 0,
    bottom: '-8px',
    padding: '10px 14px',
    background: '#1d1b31',
    transition: 'all 0.5s ease',
    overflow: 'hidden',
  },
  profileOpen: {
    width: '250px',
  },
  profileDetails: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  profileImg: {
    height: '45px',
    width: '45px',
    objectFit: 'cover',
    borderRadius: '6px',
    marginRight: '10px',
  },
  profileName: {
    fontSize: '15px',
    fontWeight: 400,
    color: '#fff',
    whiteSpace: 'nowrap',
  },
  profileJob: {
    fontSize: '12px',
  },
  logOut: {
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: 'translateY(-50%)',
    background: '#1d1b31',
    width: '100%',
    height: '60px',
    lineHeight: '60px',
    borderRadius: '0px',
    transition: 'all 0.5s ease',
  },
  logOutOpen: {
    width: '50px',
    background: 'none',
  },
  homeSection: {
    position: 'relative',
    background: '#E4E9F7',
    minHeight: '100vh',
    top: 0,
    left: '78px',
    width: 'calc(100% - 78px)',
    transition: 'all 0.5s ease',
    zIndex: 2,
  },
  homeSectionOpen: {
    left: '250px',
    width: 'calc(100% - 250px)',
  },
  homeText: {
    display: 'inline-block',
    color: '#11101d',
    fontSize: '25px',
    fontWeight: 500,
    margin: '18px',
  },
};

//https://boxicons.com/