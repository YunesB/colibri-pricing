import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar(props) {

  function closeSideBar(evt) {
    if (!evt.target.closest('.sidebar__container')) {
      props.toggleSidebar();
    }
  }

  return (
    <section className={`sidebar ${props.isOpen ? 'sidebar_opened' : ' '}`} onClick={closeSideBar}>
      <div className={`sidebar__container ${props.isOpen ? 'sidebar__container-animation' : ' '}`}>
        <ul className="sidebar__list">
          <li className="sidebar__list-item">
            <NavLink exact={true} to="/therapy" className="sidebar__link" activeClassName="sidebar__link_active" onClick={props.toggleSidebar}>Терапевтическая стоматология</NavLink>
          </li>
          <li className="sidebar__list-item">
            <NavLink to="/surgery" className="sidebar__link" activeClassName="sidebar__link_active" onClick={props.toggleSidebar}>Хирургическая стоматология</NavLink>
          </li>
          <li className="sidebar__list-item">
            <NavLink to="/orthopedics" className="sidebar__link" activeClassName="sidebar__link_active" onClick={props.toggleSidebar}>Ортопедия</NavLink>
          </li>
          <li className="sidebar__list-item">
            <NavLink to="/orthodontics" className="sidebar__link" activeClassName="sidebar__link-box_active" onClick={props.toggleSidebar}>
              Ортодонтия
            </NavLink>
          </li>
        </ul>
        <button type="button" className="sidebar__close-button" onClick={props.toggleSidebar}></button>
      </div>
    </section>
  );
}

export default Sidebar;