import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = ({ menuList }) => {
  return (
    <nav className='mt-2'>
      <ul
        className='nav nav-pills nav-sidebar flex-column'
        data-widget='treeview'
        role='menu'
        data-accordion='false'
      >
        {/* Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library */}
        {menuList.map((e, idx) => {
          return (
            <>
              <li className={`nav-header ${e.header === '' ? 'hidden' : ''}`} key={idx}>
                {e.header !== '' ? e.header : ''}
              </li>

              {e.titles.map((t, ind) => {
                return (
                  <li className={`nav-item`} key={ind}>
                    <NavLink
                      exact
                      to={t.titleLink}
                      className={({isActive}) => 'nav-link'+(isActive.isActive?' active':'')}
                    >
                      <i className={`nav-icon fas ${t.titleIcon}`} />
                      <p>
                        {t.title}
                        {t.hasTreeView && t.hasTreeView ? (
                          <i className='right fas fa-angle-left' />
                        ) : (
                          ''
                        )}
                        {t.hasBadge && t.hasBadge ? (
                          <span className={`right badge badge-${t.colorBadge}`}>
                            {t.badge}
                          </span>
                        ) : (
                          ''
                        )}
                      </p>
                    </NavLink>
                    {t.items &&
                      t.items.map((item, ide) => {
                        return (
                          <ul className='nav nav-treeview'>
                            <li className={"nav-item"}>
                              <NavLink
                                exact
                                to={item.itemLink}
                                className={({isActive}) => 'nav-link'+(isActive.isActive?' active':'')}
                                key={ide}
                              >
                                <i
                                  className='far fa-circle nav-icon'
                                  style={{ fontSize: '0.5rem' }}
                                />
                                <p>{item.item}</p>
                              </NavLink>
                            </li>
                          </ul>
                        );
                      })}
                  </li>
                );
              })}
            </>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
