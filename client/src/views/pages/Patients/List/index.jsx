import React from 'react';
import Breadcrumb from '../../../../components/commons/Breadcrumb';
import Card from '../../../../components/commons/Card';
import Swal from 'sweetalert2';
import Modal from '../../../../components/modal';
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

const PatientsList = ({
  title = 'Listado de Pacientes',
  breadcrumbs = [
    { link: '!#', text: 'Home', active: true },
    { link: '!#', text: 'Dashboard', active: false },
  ],
}) => {
  const [doctors, setDoctors] = React.useState([]);
  // const [patient, setPatient] = React.useState({});
  // const [visibleModalCreatePatient, setVisibleModalCreatePatient] = React.useState(false);

  React.useEffect(() => {
    const fetchDoctors = async () => {
      // 'https://jsonplaceholder.typicode.com/users'
      const response = await fetch('http://localhost:8080/patients');
      const data = await response.json();
      setDoctors(data);
    };
    fetchDoctors();
  }, []);
  // console.log(doctors);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());

    console.log('submitting', values);
    fetch('http://localhost:8080/add-patients', {
      method: 'POST',
      // headers:{
      // 'Content-Type':'application/json'
      // },
      body: JSON.stringify(values),
    });
  };

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
                  title={'Lista de Pacientes'}
                  tools={
                    <button
                      type='button'
                      class='btn btn-success btn-sm'
                      data-toggle='modal'
                      data-target='#modal-add-doctor'
                    >
                      Añadir Paciente
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
                          {/* <th>Sexo</th> */}
                          {/* <th>Ubigeo</th> */}
                          <th>Dirección</th>
                          <th>Cómo se enteró</th>
                          <th>Historia Clínica</th>
                          <th>Avance Tratamientos</th>
                          <th>Estado de Pagos</th>
                          <th>Acciones</th>
                          {/* <th style={{ width: 40 }}>Label</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {doctors &&
                          doctors.map((doctor, key) => {
                            return (
                              <tr>
                                <td>{key + 1}</td>
                                <td>{doctor.names}</td>
                                <td>{doctor.lastNames}</td>
                                <td>{doctor.numberDocument}</td>
                                <td>{doctor.address.zone}</td>
                                <td>{doctor.howDidYouKnow}</td>
                                <td>
                                  {doctor.hasMedicalRecord ? (
                                    <span className='badge bg-success'>SI</span>
                                  ) : (
                                    <span className='badge bg-danger'>NO</span>
                                  )}
                                </td>
                                <td>
                                  <span className='badge bg-warning'>
                                    {doctor.progressTreatments}
                                  </span>
                                </td>
                                <td>
                                  <span className='badge bg-success'>
                                    {doctor.progressPayments}
                                  </span>
                                </td>
                                <td>
                                  <button
                                    type='button'
                                    class='btn btn-warning btn-xs mr-1'
                                    data-toggle='modal'
                                    data-target='#modal-edit-doctor'
                                  >
                                    <i class='nav-icon fas fa-pen'></i>
                                  </button>
                                  <button
                                    type='button'
                                    class='btn btn-danger btn-xs'
                                    onClick={eraseDoctor}
                                  >
                                    <i
                                      class='fa fa-trash'
                                      aria-hidden='true'
                                    ></i>
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
                            );
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

      {/* <Modal
        size={'lg'}
        id={'modal-add-doctor'}
        header={
          <>
            <h4 className='modal-title'>Añadir Paciente</h4>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>×</span>
            </button>
          </>
        }
        body={
          <form
            onSubmit={handleSubmit}
            id='form-add-doctor'
            className='needs-validation'
            noValidate
          >
            <div className='form-group'>
              <label htmlFor='exampleInputNames'>Nombres</label>
              <input
                type='text'
                name='names'
                className='form-control'
                id='exampleInputNames'
                placeholder='Ingrese nombres'
                required
              />
              <div class='invalid-feedback'>Looks good!</div>
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputLastnames'>Apellidos</label>
              <input
                type='text'
                name='last-names'
                className='form-control'
                id='exampleInputLastnames'
                placeholder='Ingrese apellidos'
                required
              />
            </div>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='form-group'>
                  <label>Documento</label>
                  <select
                    className='custom-select rounded-0'
                    id='exampleSelectRounded0'
                    name='document'
                    required
                  >
                    <option>DNI</option>
                    <option>CE</option>
                    <option>PTP</option>
                    <option>Pasaporte</option>
                  </select>
                </div>
              </div>
              <div className='col-sm-6'>
                <div className='form-group'>
                  <label>Número Documento</label>
                  <input
                    type='number'
                    name='number-document'
                    className='form-control'
                    placeholder='Ingrese número documento...'
                    required
                  />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='form-group'>
                  <label>Celular</label>
                  <input
                    type='number'
                    name='cellphone'
                    className='form-control'
                    placeholder='Ingrese celular...'
                    required
                  />
                </div>
              </div>
              <div className='col-sm-6'>
                <div className='form-group'>
                  <label>Teléfono fijo</label>
                  <input
                    type='number'
                    name='telephone'
                    className='form-control'
                    placeholder='Ingrese teléfono fijo...'
                  />
                </div>
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputAddress'>Dirección</label>
              <input
                type='text'
                name='address'
                className='form-control'
                id='exampleInputAddress'
                placeholder='Ingrese dirección'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputBirthdate'>
                ¿Cómo se enteró de nosotros?
              </label>
              <input
                type='text'
                name='how-did-you-know'
                className='form-control'
                id='exampleInputBirthdate'
                placeholder='Recomendado por...'
                required
              />
            </div>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='form-group'>
                  <label>Fecha de Nacimiento</label>
                  <input
                    type='date'
                    name='birthdate'
                    className='form-control'
                    placeholder='Ingrese Ubigeo...'
                    required
                  />
                </div>
              </div>
              <div className='col-sm-6'>
                <div className='form-group'>
                  <label>Sexo</label>
                  <select
                    className='custom-select rounded-0'
                    id='exampleSelectRounded0'
                    name='sex'
                    required
                  >
                    <option>Masculino</option>
                    <option>Femenino</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='custom-control custom-checkbox'>
                  <input
                    className='custom-control-input'
                    type='checkbox'
                    id='customCheckbox1'
                    name='under-age'
                  />
                  <label for='customCheckbox1' className='custom-control-label'>
                    Menor de edad
                  </label>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-12'>
                <div className='form-group'>
                  <input
                    type='text'
                    name='representative'
                    className='form-control'
                    placeholder='Ingrese nombre del Apoderado...'
                  />
                </div>
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputLastnames'>Correo electrónico</label>
              <input
                type='email'
                name='email'
                className='form-control'
                id='exampleInputLastnames'
                placeholder='Ingrese correo electrónico...'
                required
              />
            </div>
            <div className='justify-content-between'>
              <button
                type='button'
                className='btn btn-default'
                data-dismiss='modal'
              >
                Cancelar
              </button>
              <input
                type='submit'
                className='btn btn-success float-right'
                value='Guardar'
              />
            </div>
          </form>
        }
      /> */}

      <div
        className='modal fade'
        id='modal-add-doctor'
        aria-hidden='true'
        style={{ display: 'none' }}
      >
        <form
          onSubmit={handleSubmit}
          id='form-add-doctor'
          className='needs-validation'
          noValidate
        >
          <div className='modal-dialog modal-lg'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h4 className='modal-title'>Añadir Paciente</h4>
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
                <div>
                  <div className='form-group'>
                    <label htmlFor='exampleInputNames'>Nombres</label>
                    <input
                      type='text'
                      name='names'
                      className='form-control'
                      id='exampleInputNames'
                      placeholder='Ingrese nombres'
                      required
                    />
                    <div class='invalid-feedback'>Looks good!</div>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='exampleInputLastnames'>Apellidos</label>
                    <input
                      type='text'
                      name='last-names'
                      className='form-control'
                      id='exampleInputLastnames'
                      placeholder='Ingrese apellidos'
                      required
                    />
                  </div>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <div className='form-group'>
                        <label>Documento</label>
                        <select
                          className='custom-select rounded-0'
                          id='exampleSelectRounded0'
                          name='document'
                          required
                        >
                          <option>DNI</option>
                          <option>CE</option>
                          <option>PTP</option>
                          <option>Pasaporte</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='form-group'>
                        <label>Número Documento</label>
                        <input
                          type='number'
                          name='number-document'
                          className='form-control'
                          placeholder='Ingrese número documento...'
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <div className='form-group'>
                        <label>Celular</label>
                        <input
                          type='number'
                          name='cellphone'
                          className='form-control'
                          placeholder='Ingrese celular...'
                          required
                        />
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='form-group'>
                        <label>Teléfono fijo</label>
                        <input
                          type='number'
                          name='telephone'
                          className='form-control'
                          placeholder='Ingrese teléfono fijo...'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='exampleInputAddress'>Dirección</label>
                    <input
                      type='text'
                      name='address'
                      className='form-control'
                      id='exampleInputAddress'
                      placeholder='Ingrese dirección'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='exampleInputBirthdate'>
                      ¿Cómo se enteró de nosotros?
                    </label>
                    <input
                      type='text'
                      name='how-did-you-know'
                      className='form-control'
                      id='exampleInputBirthdate'
                      placeholder='Recomendado por...'
                      required
                    />
                  </div>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <div className='form-group'>
                        <label>Fecha de Nacimiento</label>
                        <input
                          type='date'
                          name='birthdate'
                          className='form-control'
                          placeholder='Ingrese Ubigeo...'
                          required
                        />
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='form-group'>
                        <label>Sexo</label>
                        <select
                          className='custom-select rounded-0'
                          id='exampleSelectRounded0'
                          name='sex'
                          required
                        >
                          <option>Masculino</option>
                          <option>Femenino</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <div className='custom-control custom-checkbox'>
                        <input
                          className='custom-control-input'
                          type='checkbox'
                          id='customCheckbox1'
                          name='under-age'
                        />
                        <label
                          for='customCheckbox1'
                          className='custom-control-label'
                        >
                          Menor de edad
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-12'>
                      <div className='form-group'>
                        <input
                          type='text'
                          name='representative'
                          className='form-control'
                          placeholder='Ingrese nombre del Apoderado...'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='exampleInputLastnames'>
                      Correo electrónico
                    </label>
                    <input
                      type='email'
                      name='email'
                      className='form-control'
                      id='exampleInputLastnames'
                      placeholder='Ingrese correo electrónico...'
                      required
                    />
                  </div>
                </div>
              </div>
              <div className='modal-footer justify-content-between'>
                <button
                  type='button'
                  className='btn btn-default'
                  data-dismiss='modal'
                >
                  Cancelar
                </button>
                <input
                  type='submit'
                  className='btn btn-success'
                  value='Guardar'
                />
              </div>
            </div>
          </div>
        </form>
      </div>

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
              <h4 className='modal-title'>Editar Paciente</h4>
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

export default PatientsList;
