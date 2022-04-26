import React from 'react';
import { useLocation } from 'react-router-dom';
import routes from '../../../routes';

const Breadcrumb = () => {
  const currentLocation = useLocation().pathname;

  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname);
    return currentRoute ? currentRoute.name : false;
  };

  const getBreadcrumbs = (location) => {
    const breadcrumbs = []
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`
      const routeName = getRouteName(currentPathname, routes)
      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        })
      return currentPathname
    })
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation)

  return (
    <div className='col-sm-6'>
      <ol className='breadcrumb float-sm-right'>
        {breadcrumbs.map((b) => (
          <li
            className={`breadcrumb-item ${b.active === true ? 'active' : ''}`}
          >
            {b.active === true ? <a href={b.link}>{b.text}</a> : b.text}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Breadcrumb;
