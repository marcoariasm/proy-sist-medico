import React from 'react';
import Preloader from './Preloader/index';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import ControlSidebar from './ControlSidebar';

import Logo from '../../assets/img/logo.png';
import Avatar from '../../assets/img/avatars/avatar5.png';
import avatar from '../../assets/img/avatars/avatar.png';
import avatar2 from '../../assets/img/avatars/avatar2.png';
import avatar3 from '../../assets/img/avatars/avatar3.png';

import { MENU } from '../../config';

// navBar constants
const navBarLinks = [
  { href: '/', text: 'Inicio' },
  { href: '/', text: 'Link1' },
  { href: '/', text: 'Link2' },
];

const navBarMessagesList = [
  {
    userImage: avatar,
    nameUser: 'Alberto',
    message: 'Mensaje urgente...',
    timeAgo: 'hace 4 horas',
    color: 'text-danger',
    href: '!#',
  },
  {
    userImage: avatar2,
    nameUser: 'Reinaldo',
    message: 'Hola como estás',
    timeAgo: 'hace 3 años',
    color: 'text-warning',
    href: '!#',
  },
  {
    userImage: avatar3,
    nameUser: 'Rodrigo',
    message: 'Para recordar...',
    timeAgo: 'hace 2 minutos',
    color: 'text-muted',
    href: '!#',
  },
];

const navBarNotificationsList = [
  {
    type: 'mensaje',
    numberMessages: 3,
    hrefMessages: '!#',
    longAgo: '3 minutos',
    icon: 'fa-envelope',
  },
  {
    type: 'reporte',
    numberMessages: 7,
    hrefMessages: '!#',
    longAgo: '2 horas',
    icon: 'fa-users',
  },
  {
    type: 'evento',
    numberMessages: 5,
    hrefMessages: '!#',
    longAgo: '1 día',
    icon: 'fa-file',
  },
];

// Sidebar constants
const user = {
  srcUser: Avatar,
  nameUser: 'Doctor Uno',
};

const title = 'Sistema Médico';

// consts footer
const textsFooter = {
  rights: 'Derechos reservados © 2021. Desarrollado por',
  href: 'https://google.com/',
  developer: 'Team',
  version: '1.0.0',
};

const Layout = ({ children }) => {
  return (
    <div className='wrapper'>
      <Preloader logo={Logo} alt='' />
      <Navbar
        navBarLinks={navBarLinks}
        navBarMessagesList={navBarMessagesList}
        navBarNotificationsList={navBarNotificationsList}
      />
      <Sidebar title={title} menuListSidebar={MENU} user={user} />
        {children}
      <Footer textsFooter={textsFooter} />
      <ControlSidebar />
    </div>
  );
};

export default Layout;
