import React from 'react';

import LeftLinks from './LeftLinks';
import MessagesDropDown from './MessagesDropDown';
import NotificationsDropdown from './NotificationsDropdown';
import Search from './Search';
import avatar from '../../../assets/img/avatars/avatar5.png';

const index = ({
  navBarLinks,
  navBarMessagesList,
  navBarNotificationsList,
}) => {
  return (
    <nav className='main-header navbar navbar-expand navbar-white navbar-light'>
      {/* Left navbar links */}
      <LeftLinks links={navBarLinks} />

      {/* Right navbar links */}
      <ul className='navbar-nav ml-auto'>
        {/* Navbar Search */}
        <Search placeholder={'Buscar'} />

        {/* Messages Dropdown Menu */}
        <MessagesDropDown number={3} navBarMessagesList={navBarMessagesList} />

        {/* Notifications Dropdown Menu */}
        <NotificationsDropdown
          number={15}
          navBarNotificationsList={navBarNotificationsList}
        />

        {/* Fullscreen button */}
        <li className='nav-item'>
          <a
            className='nav-link'
            data-widget='fullscreen'
            href='!#'
            role='button'
          >
            <i className='fas fa-expand-arrows-alt' />
          </a>
        </li>

        {/* User Sidebar */}
        <li className='nav-item dropdown'>
          {/* <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="!#" role="button">
                        <i className="fas fa-th-large" />
                    </a> */}
          <div className='image'>
            <a href='!#' className='nav-link' data-toggle='dropdown'>
              <img
                style={{ width: '28px', height: '28px' }}
                src={avatar}
                className='img-circle elevation-2'
                alt='Usuario'
              />
            </a>
            <div className='dropdown-menu dropdown-menu-lg dropdown-menu-right'>
              <span className='dropdown-item dropdown-header'>
                Doctor Uno
              </span>
              <div className='dropdown-divider'></div>
              <a href='!#' className='dropdown-item'>
                <i className='fas fa-user mr-2'></i>Ver Mi Perfil
                {/* <span className='float-right text-muted text-sm'>blah</span> */}
              </a>
              <div className='dropdown-divider'></div>
              <a href='!#' className='dropdown-item'>
                <i className='fas fa-gear mr-2'></i>Configurar cuenta
                {/* <span className='float-right text-muted text-sm'>
                  blah
                </span> */}
              </a>
              <div className='dropdown-divider'></div>
              <a href='!#' className='dropdown-item'>
                <i className='fas fa-envelope mr-2'></i>Ver mis mensajes
                {/* <span className='float-right text-muted text-sm'>blah</span> */}
              </a>
              <div className='dropdown-divider'></div>
              <a href='!#' className='dropdown-item dropdown-footer'>
                Cerrar sesión
              </a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default index;
