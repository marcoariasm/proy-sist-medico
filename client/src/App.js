import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Preloader from './components/Layout/Preloader';

// Container
const Base = React.lazy(() => import('./views/pages/Base'));

// Pages
const Login = React.lazy(() => import('./modules/auth/Login'));
// const Register = React.lazy(() => import('./modules/auth/Register'));
const Page404 = React.lazy(() => import('./views/Page404'));
const Page500 = React.lazy(() => import('./views/Page500'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Preloader/>}>
        <Routes>
          <Route exact path='/login' name='Login' element={<Login />} />
          {/* <Route exact path='/register' name='Registro' element={<Register />} /> */}
          <Route exact path='/404' name='Página 404' element={<Page404 />} />
          <Route exact path='/500' name='Página 500' element={<Page500 />} />
          <Route path='*' name='Base' element={<Base />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
