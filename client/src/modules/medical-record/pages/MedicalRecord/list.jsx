import React from 'react';
import Breadcrumb from '../../../../components/commons/Breadcrumb';
import Card from '../../../../components/commons/Card';
import Swal from 'sweetalert2';
import mr from '../../../../services/mock/medicalrecords.json';

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

const ListMedicalRecords = ({
  title = 'Listado de Historias Clínicas',
  breadcrumbs = [
    { link: '!#', text: 'Home', active: true },
    { link: '!#', text: 'Dashboard', active: false },
  ],
}) => {
  const [medicalRecords, setMedicalRecords] = React.useState([]);

  React.useEffect(() => {
    const fetchMedicalRecords = async () => {
      // 'https://jsonplaceholder.typicode.com/users'
      const response = await fetch('http://localhost:8080/medicalrecords');
      const data = await response.json();
      setMedicalRecords(data);
    };
    fetchMedicalRecords();
  }, []);
  console.log(medicalRecords);
  //   console.log(mr);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());

    console.log('submitting', values);
    fetch('http://localhost:8080/medicalrecords', {
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
                  title={'Lista de Historias'}
                  tools={
                    <button
                      type='button'
                      class='btn btn-success btn-sm'
                      data-toggle='modal'
                      data-target='#modal-add-medical-record'
                    >
                      Añadir Historia Clínica
                    </button>
                  }
                  body={
                    <table className='table table-striped'>
                      <thead>
                        <tr>
                          <th style={{ width: 10 }}>#</th>
                          <th>Nombres</th>
                          <th>Apellidos</th>
                          <th>Grado de colaboración</th>
                          <th>Cantidad de registros</th>
                          <th>Fecha última visita</th>
                          {/* <th>Estado de pagos</th> */}
                          <th>Avance Tratamientos</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mr &&
                          mr.map((medicalRecord, key) => {
                            return (
                              <tr>
                                <td>{key + 1}</td>
                                <td>{medicalRecord.names}</td>
                                <td>{medicalRecord.lastNames}</td>
                                <td>
                                  {medicalRecord.background.collaboration}
                                </td>
                                <td>{medicalRecord.records.length}</td>
                                <td>
                                  {
                                    medicalRecord.records[
                                      medicalRecord.records.length - 1
                                    ].date
                                  }
                                </td>
                                {/* <td>
                                  {medicalRecord.payments ? (
                                    <span className='badge bg-success'>
                                      AL DÍA
                                    </span>
                                  ) : (
                                    <span className='badge bg-warning'>
                                      SALDO
                                    </span>
                                  )}
                                </td> */}
                                <td>
                                  <span className='badge bg-success'>
                                    TERMINADO 100%
                                  </span>
                                </td>
                                <td>
                                  <button
                                    type='button'
                                    class='btn btn-info btn-xs mr-1'
                                    data-toggle='modal'
                                    data-target='#modal-medical-record'
                                  >
                                    <i
                                      class='nav-icon fas fa-eye'
                                      alt='Ver'
                                    ></i>
                                  </button>
                                  {/* <button
                                    type='button'
                                    class='btn btn-danger btn-xs'
                                    onClick={eraseDoctor}
                                  >
                                    <i
                                      class='fa fa-trash'
                                      aria-hidden='true'
                                    ></i>
                                  </button> */}
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

      {/* modal añadir historia clínica */}
      <div
        className='modal fade'
        id='modal-add-medical-record'
        aria-hidden='true'
        style={{ display: 'none' }}
      >
        <form
          onSubmit={handleSubmit}
          id='form-add-doctor'
          className='needs-validation'
          novalidate
        >
          <div className='modal-dialog modal-xl'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h4 className='modal-title'>Añadir Historia Clínica</h4>
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




                {/* formulario añadir paciente */}
                <div className='row'>
                  <div className='col-6'>
                    <button
                      type='button'
                      className='btn btn-md btn-secondary mr-2'
                      data-dismiss='modal'
                      aria-label='Close'
                    >
                      Paciente Existente
                    </button>
                    <button
                      type='button'
                      className='btn btn-md btn-primary'
                      data-dismiss='modal'
                      aria-label='Close'
                    >
                      Paciente Nuevo
                    </button>
                  </div>
                  <div className='col-6'>
                    
                  </div>
                </div>
                <div className='mb-5 p-4 bg-white shadow-sm'>


                {/* fin formulario */}
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
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* fin modal añadir doctor */}

      {/* modal editar doctor */}
      <div
        className='modal fade'
        id='modal-medical-record'
        aria-hidden='true'
        style={{ display: 'none' }}
      >
        <div className='modal-dialog modal-xl'>
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

export default ListMedicalRecords;
