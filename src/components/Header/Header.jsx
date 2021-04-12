import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Sidebar from '../Sidebar/Sidebar';

function Header() {

  const [ isSidebarOpen, setSidebarOpen ] = React.useState(false);
  
  function toggleSidebar() {
    setSidebarOpen(!isSidebarOpen);
  }

  
  return (
    <header className="header">
      <Logo />
      <div className="header__container">
        <NavLink to="/therapy" className="header__link hvr-bounce-to-bottom" 
          activeClassName="hvr-bounce-to-bottom"
          >Терапевтическая стоматология
        </NavLink>
        <NavLink to="/surgery" className="header__link hvr-bounce-to-bottom" 
          activeClassName="hvr-bounce-to-bottom"
          >Хирургическая стоматология
        </NavLink>
        <NavLink to="/orthopedics" className="header__link hvr-bounce-to-bottom" 
          activeClassName="hvr-bounce-to-bottom"
          >Ортопедия
        </NavLink>
        <NavLink to="/orthodontics" className="header__link hvr-bounce-to-bottom" 
          activeClassName="hvr-bounce-to-bottom"
          >Ортодонтия
        </NavLink>
      </div>
      <button type="button" 
          className='header__burger-button' 
          onClick={toggleSidebar}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
    </header>
  );
}

export default Header;