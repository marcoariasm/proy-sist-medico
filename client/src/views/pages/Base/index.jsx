import React, { Suspense } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import Layout from '../../../components/Layout';
import Preloader from '../../../components/Layout/Preloader';
import routes from '../../../routes';

const Base = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Layout>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            );
          })}
          <Route path='/' element={<Navigate to='dashboard' replace />} />
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default Base;
