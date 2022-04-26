import React from 'react'

import BrandLogo from './BrandLogo'
import UserPanel from './UserPanel'
import SearchSidebar from './SearchSidebar'
import Menu from './Menu'

import Logo from '../../../assets/img/icono-blanco.png'
// import Avatar from '../../../assets/img/avatars/avatar5.png'


const Sidebar = ({ title, menuListSidebar, user }) => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <BrandLogo logo={ Logo } alt="" title={title} />
            
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <UserPanel srcUser={ user.srcUser } nameUser={ user.nameUser } />

                {/* SidebarSearch Form */}
                <SearchSidebar />

                {/* Sidebar Menu */}
                <Menu menuList={ menuListSidebar }/>                
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}

        </aside>
    )
}

export default Sidebar