import React from 'react';
import Breadcrumb from '../../../../components/commons/Breadcrumb';
import Card from './../../../../components/commons/Card';
import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';

// const MySwal = withReactContent(Swal);

// MySwal.fire({
//   title: <p>Eliminar Doctor</p>,
//   footer: 'Footer',
//   didOpen: () => {
//     // `MySwal` is a subclass of `Swal`
//     //   with all the same instance & static methods
//     MySwal.clickConfirm();
//   },
// }).then(() => {
//   return MySwal.fire(<p>Shorthand works too</p>);
// });

const eraseDoctor = () => {
  Swal.fire({
    title: 'Eliminar registro?',
    text: 'Esta acción no puede deshacerse!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, borrar!',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Borrado!', 'El registro fue borrado.', 'success');
    }
  });
};

const DoctorsList = ({
  title = 'Mantenimiento de Doctores',
  breadcrumbs = [
    { link: '!#', text: 'Home', active: true },
    { link: '!#', text: 'Dashboard', active: false },
  ],
}) => {
  const [doctors, setDoctors] = React.useState([]);

  React.useEffect(() => {
    const fetchDoctors = async () => {
      // 'https://jsonplaceholder.typicode.com/users'
      const response = await fetch(
        'http://localhost:8080/doctors'
      );
      const data = await response.json();
      setDoctors(data);
    };
    fetchDoctors();
  }, []);
  console.log(doctors);

  return (
    <>
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
                    <button
                      type='button'
                      className='btn btn-success btn-sm'
                      data-toggle='modal'
                      data-target='#modal-add-doctor'
                    >
                      Añadir Doctor
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
                      {doctors &&
                        doctors.map((doctor, key) => {
                            return(
                          <tr>
                            <td>{key+1}</td>
                            <td>{doctor.username}</td>
                            <td>{doctor.name}</td>
                            <td>{doctor.id}</td>
                            <td>{key}</td>
                            <td>{(doctor.address.zipcode).split("-")[0]}</td>
                            <td>{`${doctor.address.street} ${doctor.address.suite}`}</td>
                            <td>01-01-2022</td>
                            <td>
                              <button
                                type='button'
                                className='btn btn-warning btn-xs mr-1'
                                data-toggle='modal'
                                data-target='#modal-edit-doctor'
                              >
                                <i className="nav-icon fas fa-pen"></i>
                              </button>
                              <button
                                type='button'
                                className='btn btn-danger btn-xs'
                                onClick={eraseDoctor}
                              >
                                <i className="fa fa-trash" aria-hidden="true"></i>
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
                          </tr>)
                        })}
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

      {/* modal añadir doctor */}
      <div
        className='modal fade'
        id='modal-add-doctor'
        aria-hidden='true'
        style={{ display: 'none' }}
      >
        <div className='modal-dialog modal-lg'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>Añadir Doctor</h4>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>×</span>
              </button>
            </div>
            <div className='modal-body'>
              {/* formulario añadir doctor */}
              <div>
                <div className='form-group'>
                  <label htmlFor='exampleInputNames'>Nombres</label>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleInputNames'
                    placeholder='Ingrese nombres'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='exampleInputLastnames'>Apellidos</label>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleInputLastnames'
                    placeholder='Ingrese apellidos'
                  />
                </div>

                <div className='row'>
                  <div className='col-sm-6'>
                    <div className='form-group'>
                      <label>Documento</label>
                      <select
                        className='custom-select rounded-0'
                        id='exampleSelectRounded0'
                      >
                        <option>DNI</option>
                        <option>CE</option>
                        <option>PTP</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='form-group'>
                      <label>Número Documento</label>
                      <input
                        type='number'
                        className='form-control'
                        placeholder='Ingrese número documento...'
                      />
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-sm-6'>
                    <div className='form-group'>
                      <label>Sexo</label>
                      <select
                        className='custom-select rounded-0'
                        id='exampleSelectRounded0'
                      >
                        <option>Masculino</option>
                        <option>Femenino</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='form-group'>
                      <label>UBIGEO</label>
                      <input
                        type='number'
                        className='form-control'
                        placeholder='Ingrese Ubigeo...'
                      />
                    </div>
                  </div>
                </div>

                <div className='form-group'>
                  <label htmlFor='exampleInputAddress'>Dirección</label>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleInputAddress'
                    placeholder='Ingrese dirección'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='exampleInputBirthdate'>
                    Fecha de Nacimiento
                  </label>
                  <input
                    type='date'
                    className='form-control'
                    id='exampleInputBirthdate'
                    placeholder='Password'
                  />
                </div>
                {/* <div className='form-group'>
                  <label htmlFor='exampleInputFile'>File input</label>
                  <div className='input-group'>
                    <div className='custom-file'>
                      <input
                        type='file'
                        className='custom-file-input'
                        id='exampleInputFile'
                      />
                      <label
                        className='custom-file-label'
                        htmlFor='exampleInputFile'
                      >
                        Choose file
                      </label>
                    </div>
                    <div className='input-group-append'>
                      <span className='input-group-text'>Upload</span>
                    </div>
                  </div>
                </div>
                <div className='form-check'>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    id='exampleCheck1'
                  />
                  <label className='form-check-label' htmlFor='exampleCheck1'>
                    Check me out
                  </label>
                </div> */}
              </div>

              {/* fin formulario */}
            </div>
            <div className='modal-footer justify-content-between'>
              <button
                type='button'
                className='btn btn-default'
                data-dismiss='modal'
              >
                Cancelar
              </button>
              <button type='button' className='btn btn-success'>
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* fin modal añadir doctor */}

      {/* modal editar doctor */}
      <div
        className='modal fade'
        id='modal-edit-doctor'
        aria-hidden='true'
        style={{ display: 'none' }}
      >
        <div className='modal-dialog modal-lg'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>Editar Doctor</h4>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>×</span>
              </button>
            </div>
            <div className='modal-body'>
              {/* formulario añadir doctor */}
              <div>
                <div className='form-group'>
                  <label htmlFor='exampleInputNames'>Nombres</label>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleInputNames'
                    placeholder='Ingrese nombres'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='exampleInputLastnames'>Apellidos</label>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleInputLastnames'
                    placeholder='Ingrese apellidos'
                  />
                </div>

                <div className='row'>
                  <div className='col-sm-6'>
                    <div className='form-group'>
                      <label>Documento</label>
                      <select
                        className='custom-select rounded-0'
                        id='exampleSelectRounded0'
                      >
                        <option>DNI</option>
                        <option>CE</option>
                        <option>PTP</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='form-group'>
                      <label>Número Documento</label>
                      <input
                        type='number'
                        className='form-control'
                        placeholder='Ingrese número documento...'
                      />
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-sm-6'>
                    <div className='form-group'>
                      <label>Sexo</label>
                      <select
                        className='custom-select rounded-0'
                        id='exampleSelectRounded0'
                      >
                        <option>Masculino</option>
                        <option>Femenino</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='form-group'>
                      <label>UBIGEO</label>
                      <input
                        type='number'
                        className='form-control'
                        placeholder='Ingrese Ubigeo...'
                      />
                    </div>
                  </div>
                </div>

                <div className='form-group'>
                  <label htmlFor='exampleInputAddress'>Dirección</label>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleInputAddress'
                    placeholder='Ingrese dirección'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='exampleInputBirthdate'>
                    Fecha de Nacimiento
                  </label>
                  <input
                    type='date'
                    className='form-control'
                    id='exampleInputBirthdate'
                    placeholder='Password'
                  />
                </div>
              </div>
              {/* fin formulario */}
            </div>
            <div className='modal-footer justify-content-between'>
              <button
                type='button'
                className='btn btn-default'
                data-dismiss='modal'
              >
                Cancelar
              </button>
              <button type='button' className='btn btn-warning'>
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* fin modal editar doctor */}
    </>
  );
};

export default DoctorsList;
