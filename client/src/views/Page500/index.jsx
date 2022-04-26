import React from 'react';
import { Link } from 'react-router-dom';

const Page500 = () => {
  return (
    <div className='content-wrapper' style={{ minHeight: '1604.71px' }}>
      <section className='content-header'>
        <div className='container-fluid'>
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h1>Página de error 500</h1>
            </div>
            {/* <div className='col-sm-6'>
              <ol className='breadcrumb float-sm-right'>
                <li className='breadcrumb-item'>
                  <a href='#'>Home</a>
                </li>
                <li className='breadcrumb-item active'>Página de error 500 Error Page</li>
              </ol>
            </div> */}
          </div>
        </div>
      </section>
      <section className='content'>
        <div className='error-page'>
          <h2 className='headline text-danger'>500</h2>
          <div className='error-content'>
            <h3>
              <i className='fas fa-exclamation-triangle text-danger' /> ¡Oh! Algo salió mal.
            </h3>
            <p>
              Estamos trabajando en solucionarlo. Mientras tanto, puedes{' '}
              <Link to='/'>regresar al inicio</Link> o usar el
              formulario de búsqueda.
            </p>
            <form className='search-form'>
              <div className='input-group'>
                <input
                  type='text'
                  name='search'
                  className='form-control'
                  placeholder='Buscar'
                />
                <div className='input-group-append'>
                  <button
                    type='submit'
                    name='submit'
                    className='btn btn-danger'
                  >
                    <i className='fas fa-search' />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page500;
