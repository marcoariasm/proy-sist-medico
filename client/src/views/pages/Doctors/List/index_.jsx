import React from 'react';
import Breadcrumb from '../../../components/commons/Breadcrumb';
import Layout from './../../../components/Layout';
import Card from './../../../components/commons/Card';

const DoctorsList = ({
  title = 'Mantenimiento de Doctores',
  breadcrumbs = [
    { link: '!#', text: 'Home', active: true },
    { link: '!#', text: 'Dashboard', active: false },
  ],
}) => {
  return (
    <Layout>
      <div className='content-wrapper'>
        <div className='content-header'>
          <div className='container-fluid'>
            <div className='row mb-2'>
              <div className='col-sm-6'>
                <h1 className='m-0'>{title}</h1>
              </div>
              {/* /.col */}

              <Breadcrumb breadcrumbs={breadcrumbs} />
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>

        <section className='content'>
          <div className='container-fluid'>
            <div className='row'>
              <section className='col-lg-12 connectedSortable'>
                <Card
                  title={'Lista de Doctores'}
                  tools={
                    <button type='button' class='btn btn-success btn-sm'>
                      Agregar Doctor
                    </button>
                  }
                  body={
                    <table className='table table-striped'>
                      <thead>
                        <tr>
                          <th style={{ width: 10 }}>#</th>
                          <th>Nombres</th>
                          <th>Apellidos</th>
                          <th>Documento</th>
                          <th>Sexo</th>
                          <th>Ubigeo</th>
                          <th>Dirección</th>
                          <th>Fecha Nacimiento</th>
                          <th>Acciones</th>
                          {/* <th style={{ width: 40 }}>Label</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1.</td>
                          <td>Usuario</td>
                          <td>Uno</td>
                          <td>88888888</td>
                          <td>Masculino</td>
                          <td>150114</td>
                          <td>La Molina</td>
                          <td>01-01-2022</td>
                          <td>
                            <button
                              type='button'
                              class='btn btn-warning btn-xs mr-1'
                            >
                              Editar
                            </button>
                            <button type='button' class='btn btn-danger btn-xs'>
                              Borrar
                            </button>
                          </td>
                          {/* <td>
                            <div className='progress progress-xs'>
                              <div
                                className='progress-bar progress-bar-danger'
                                style={{ width: '55%' }}
                              />
                            </div>
                          </td> */}
                          {/* <td>
                            <span className='badge bg-danger'>55%</span>
                          </td> */}
                        </tr>
                        <tr>
                          <td>1.</td>
                          <td>Usuario</td>
                          <td>Uno</td>
                          <td>88888888</td>
                          <td>Masculino</td>
                          <td>150114</td>
                          <td>La Molina</td>
                          <td>01-01-2022</td>
                          <td>
                            <button
                              type='button'
                              class='btn btn-warning btn-xs mr-1'
                            >
                              Editar
                            </button>
                            <button type='button' class='btn btn-danger btn-xs'>
                              Borrar
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>1.</td>
                          <td>Usuario</td>
                          <td>Uno</td>
                          <td>88888888</td>
                          <td>Masculino</td>
                          <td>150114</td>
                          <td>La Molina</td>
                          <td>01-01-2022</td>
                          <td>
                            <button
                              type='button'
                              class='btn btn-warning btn-xs mr-1'
                            >
                              Editar
                            </button>
                            <button type='button' class='btn btn-danger btn-xs'>
                              Borrar
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>1.</td>
                          <td>Usuario</td>
                          <td>Uno</td>
                          <td>88888888</td>
                          <td>Masculino</td>
                          <td>150114</td>
                          <td>La Molina</td>
                          <td>01-01-2022</td>
                          <td>
                            <button
                              type='button'
                              class='btn btn-warning btn-xs mr-1'
                            >
                              Editar
                            </button>
                            <button type='button' class='btn btn-danger btn-xs'>
                              Borrar
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>1.</td>
                          <td>Usuario</td>
                          <td>Uno</td>
                          <td>88888888</td>
                          <td>Masculino</td>
                          <td>150114</td>
                          <td>La Molina</td>
                          <td>01-01-2022</td>
                          <td>
                            <button
                              type='button'
                              class='btn btn-warning btn-xs mr-1'
                            >
                              Editar
                            </button>
                            <button type='button' class='btn btn-danger btn-xs'>
                              Borrar
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>1.</td>
                          <td>Usuario</td>
                          <td>Uno</td>
                          <td>88888888</td>
                          <td>Masculino</td>
                          <td>150114</td>
                          <td>La Molina</td>
                          <td>01-01-2022</td>
                          <td>
                            <button
                              type='button'
                              class='btn btn-warning btn-xs mr-1'
                            >
                              Editar
                            </button>
                            <button type='button' class='btn btn-danger btn-xs'>
                              Borrar
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>1.</td>
                          <td>Usuario</td>
                          <td>Uno</td>
                          <td>88888888</td>
                          <td>Masculino</td>
                          <td>150114</td>
                          <td>La Molina</td>
                          <td>01-01-2022</td>
                          <td>
                            <button
                              type='button'
                              class='btn btn-warning btn-xs mr-1'
                            >
                              Editar
                            </button>
                            <button type='button' class='btn btn-danger btn-xs'>
                              Borrar
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>1.</td>
                          <td>Usuario</td>
                          <td>Uno</td>
                          <td>88888888</td>
                          <td>Masculino</td>
                          <td>150114</td>
                          <td>La Molina</td>
                          <td>01-01-2022</td>
                          <td>
                            <button
                              type='button'
                              class='btn btn-warning btn-xs mr-1'
                            >
                              Editar
                            </button>
                            <button type='button' class='btn btn-danger btn-xs'>
                              Borrar
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>1.</td>
                          <td>Usuario</td>
                          <td>Uno</td>
                          <td>88888888</td>
                          <td>Masculino</td>
                          <td>150114</td>
                          <td>La Molina</td>
                          <td>01-01-2022</td>
                          <td>
                            <button
                              type='button'
                              class='btn btn-warning btn-xs mr-1'
                            >
                              Editar
                            </button>
                            <button type='button' class='btn btn-danger btn-xs'>
                              Borrar
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>1.</td>
                          <td>Usuario</td>
                          <td>Uno</td>
                          <td>88888888</td>
                          <td>Masculino</td>
                          <td>150114</td>
                          <td>La Molina</td>
                          <td>01-01-2022</td>
                          <td>
                            <button
                              type='button'
                              class='btn btn-warning btn-xs mr-1'
                            >
                              Editar
                            </button>
                            <button type='button' class='btn btn-danger btn-xs'>
                              Borrar
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>1.</td>
                          <td>Usuario</td>
                          <td>Uno</td>
                          <td>88888888</td>
                          <td>Masculino</td>
                          <td>150114</td>
                          <td>La Molina</td>
                          <td>01-01-2022</td>
                          <td>
                            <button
                              type='button'
                              class='btn btn-warning btn-xs mr-1'
                            >
                              Editar
                            </button>
                            <button type='button' class='btn btn-danger btn-xs'>
                              Borrar
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>1.</td>
                          <td>Usuario</td>
                          <td>Uno</td>
                          <td>88888888</td>
                          <td>Masculino</td>
                          <td>150114</td>
                          <td>La Molina</td>
                          <td>01-01-2022</td>
                          <td>
                            <button
                              type='button'
                              class='btn btn-warning btn-xs mr-1'
                            >
                              Editar
                            </button>
                            <button type='button' class='btn btn-danger btn-xs'>
                              Borrar
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>1.</td>
                          <td>Usuario</td>
                          <td>Uno</td>
                          <td>88888888</td>
                          <td>Masculino</td>
                          <td>150114</td>
                          <td>La Molina</td>
                          <td>01-01-2022</td>
                          <td>
                            <button
                              type='button'
                              class='btn btn-warning btn-xs mr-1'
                            >
                              Editar
                            </button>
                            <button type='button' class='btn btn-danger btn-xs'>
                              Borrar
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>1.</td>
                          <td>Usuario</td>
                          <td>Uno</td>
                          <td>88888888</td>
                          <td>Masculino</td>
                          <td>150114</td>
                          <td>La Molina</td>
                          <td>01-01-2022</td>
                          <td>
                            <button
                              type='button'
                              class='btn btn-warning btn-xs mr-1'
                            >
                              Editar
                            </button>
                            <button type='button' class='btn btn-danger btn-xs'>
                              Borrar
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  }
                />
              </section>
              {/* <section className='col-lg-6 connectedSortable'>
                <Card title={'Compras'} body={'asdfg'} />
              </section> */}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DoctorsList;
