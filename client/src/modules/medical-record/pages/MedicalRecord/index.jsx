import React from 'react';
import Breadcrumb from '../../../../components/commons/Breadcrumb';
import Odontogram from '../../../../components/Odontogram';
import mre from '../../../../services/mock/medicalrecords.json';

const constMedicalRecord = {
  title: 'Historia Clínica',
  breadcrumbs: [
    { link: '!#', text: 'Home', active: true },
    { link: '!#', text: 'Dashboard', active: false },
  ],
};

const MedicalRecord = () => {
  const [medicalRecord, setMedicalRecord] = React.useState([]);
  React.useEffect(() => {
    const fetchMedicalRecords = async () => {
      // 'https://jsonplaceholder.typicode.com/users'
      const response = await fetch('http://localhost:8080/medicalrecords');
      const data = await response.json();
      setMedicalRecord(data);
    };
    fetchMedicalRecords();
  }, []);

  const mr = mre[0];
  const recordsReverse = mr.records.slice(0).reverse();
  console.log(recordsReverse);

  return (
    <div className='content-wrapper'>
      <div className='content-header'>
        <div className='container-fluid'>
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h1 className='m-0'>{constMedicalRecord.title}</h1>
            </div>
            <Breadcrumb breadcrumbs={constMedicalRecord.breadcrumbs} />
          </div>
        </div>
      </div>

      <section className='content'>
        <div className='container-fluid'>
          <div className='row'>
            {/* ficha Pct  con foto  columna de 4 md */}
            <div className='col-md-4'>
              <div className='card card-widget widget-user'>
                <div className='widget-user-header bg-info'>
                  <h3 className='widget-user-username'>{`${mr.names} ${mr.lastNames}`}</h3>
                  <h5 className='widget-user-desc'>Paciente</h5>
                </div>
                <div className='widget-user-image'>
                  <img
                    className='img-circle elevation-2'
                    src='../dist/img/user1-128x128.jpg'
                    alt='User Avatar'
                  />
                </div>
                <div className='card-footer'>
                  <div className='row'>
                    <div className='col-sm-4 border-right'>
                      <div className='description-block'>
                        <h5 className='description-header'>{39}</h5>
                        <span className='description-text'>AÑOS</span>
                      </div>
                    </div>
                    <div className='col-sm-4 border-right'>
                      <div className='description-block'>
                        <h5 className='description-header'>{`${mr.generalInformation.size} m`}</h5>
                        <span className='description-text'>TALLA</span>
                      </div>
                    </div>
                    <div className='col-sm-4'>
                      <div className='description-block'>
                        <h5 className='description-header'>{`${mr.generalInformation.weight} Kg`}</h5>
                        <span className='description-text'>PESO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Antecedentes Pct  columna de 8 md */}
            <div className='col-md-8'>
              <div className='card'>
                <div className='card-header bg-info'>
                  <h3 class='card-title'>Antecedentes del Paciente</h3>
                </div>
                <div className='card-body p-0'>
                  <hr />
                  <div className='row my-0'>
                    <div className='col-5'>
                      <i className='fas fa-head-side-cough mx-3 text-info' />
                      Alergias
                    </div>
                    <div className='col-7'>{mr.background.allergies}</div>
                  </div>
                  <hr />
                  <div className='row'>
                    <div className='col-5'>
                      <i className='fa fa-disease mx-3 text-info' />
                      Enfermedades
                    </div>
                    <div className='col-7'>{mr.background.diseases}</div>
                  </div>
                  <hr />
                  <div className='row'>
                    <div className='col-5'>
                      <i className='fa fa-prescription mx-3 text-info' />
                      Diagnóstico
                    </div>
                    <div className='col-7'>{mr.background.diagnostic}</div>
                  </div>
                  <hr />
                  <div className='row'>
                    <div className='col-5'>
                      <i className='fa fa-tablets mx-3 text-info' />
                      Medicación
                    </div>
                    <div className='col-7'>{mr.background.medication}</div>
                  </div>
                  <hr />
                  <div className='row'>
                    <div className='col-5'>
                      <i className='fa fa-smile mx-3 text-info' />
                      Grado de colaboración
                    </div>
                    <div className='col-7'>{mr.background.collaboration}</div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
            {/* pestañas  anamnesis, plan de tto, etc */}
            <div className='row'>
              {/* card al 100% de view width */}
              <div className='col-12 vw-100'>
                <div className='card card-info card-tabs'>
                  <div className='card-header p-0 pt-1'>
                    <ul
                      className='nav nav-tabs'
                      id='custom-tabs-one-tab'
                      role='tablist'
                    >
                      <li className='nav-item'>
                        <a
                          className='nav-link active'
                          id='custom-tabs-one-home-tab'
                          data-toggle='pill'
                          href='#custom-tabs-one-home'
                          role='tab'
                          aria-controls='custom-tabs-one-home'
                          aria-selected='true'
                        >
                          Anamnesis
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          className='nav-link'
                          id='custom-tabs-one-odontogram-tab'
                          data-toggle='pill'
                          href='#custom-tabs-one-odontogram'
                          role='tab'
                          aria-controls='custom-tabs-one-odontogram'
                          aria-selected='false'
                        >
                          Odontograma
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          className='nav-link'
                          id='custom-tabs-one-profile-tab'
                          data-toggle='pill'
                          href='#custom-tabs-one-profile'
                          role='tab'
                          aria-controls='custom-tabs-one-profile'
                          aria-selected='false'
                        >
                          Plan de Tratamiento
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          className='nav-link'
                          id='custom-tabs-one-messages-tab'
                          data-toggle='pill'
                          href='#custom-tabs-one-messages'
                          role='tab'
                          aria-controls='custom-tabs-one-messages'
                          aria-selected='false'
                        >
                          Evolución
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          className='nav-link'
                          id='custom-tabs-one-settings-tab'
                          data-toggle='pill'
                          href='#custom-tabs-one-settings'
                          role='tab'
                          aria-controls='custom-tabs-one-settings'
                          aria-selected='false'
                        >
                          Consentimientos Informados
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* cuerpo con los contenidos de las pestañas */}
                  <div className='card-body'>
                    <div
                      className='tab-content'
                      id='custom-tabs-one-tabContent'
                    >
                      {/* Anamnesis */}
                      <div
                        className='tab-pane fade active show'
                        id='custom-tabs-one-home'
                        role='tabpanel'
                        aria-labelledby='custom-tabs-one-home-tab'
                      >
                        <h4 className='text-info'>
                          Antecedentes médicos generales
                        </h4>
                        <span>¿Ha tenido o tiene Usted?</span>

                        <div className='row mt-3'>
                          <div className='col-sm-8'>
                            1. <span>Hemorragias</span>
                          </div>
                          <div className='col-sm-4'>
                            <div className='row form-group'>
                              <div className='col-sm-2 form-check mr-5'>
                                <input
                                  className='form-check-input'
                                  type='radio'
                                  name='radio1'
                                  checked={
                                    mr.background.hemorrhages ? true : false
                                  }
                                />
                                <label className='form-check-label'>Sí</label>
                              </div>
                              <div className='col-sm-2 form-check'>
                                <input
                                  className='form-check-input'
                                  type='radio'
                                  name='radio1'
                                  checked={
                                    !mr.background.hemorrhages ? true : false
                                  }
                                />
                                <label className='form-check-label'>No</label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='row'>
                          <div className='col-sm-8'>
                            2. <span>Extracciones</span>
                          </div>
                          <div className='col-sm-4'>
                            <div className='row form-group'>
                              <div className='col-sm-2 form-check mr-5'>
                                <input
                                  className='form-check-input'
                                  type='radio'
                                  name='radio2'
                                  checked={
                                    mr.background.extractions ? true : false
                                  }
                                />
                                <label className='form-check-label'>Sí</label>
                              </div>
                              <div className='col-sm-2 form-check'>
                                <input
                                  className='form-check-input'
                                  type='radio'
                                  name='radio2'
                                  checked={
                                    !mr.background.extractions ? true : false
                                  }
                                />
                                <label className='form-check-label'>No</label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='row'>
                          <div className='col-sm-8'>
                            3. <span>Infecciones</span>
                          </div>
                          <div className='col-sm-4'>
                            <div className='row form-group'>
                              <div className='col-sm-2 form-check mr-5'>
                                <input
                                  className='form-check-input'
                                  type='radio'
                                  name='radio3'
                                  checked={
                                    mr.background.infections ? true : false
                                  }
                                />
                                <label className='form-check-label'>Sí</label>
                              </div>
                              <div className='col-sm-2 form-check'>
                                <input
                                  className='form-check-input'
                                  type='radio'
                                  name='radio3'
                                  checked={
                                    !mr.background.infections ? true : false
                                  }
                                />
                                <label className='form-check-label'>No</label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='row'>
                          <div className='col-sm-8'>
                            4. <span>Problemas con anestesia</span>
                          </div>
                          <div className='col-sm-4'>
                            <div className='row form-group'>
                              <div className='col-sm-2 form-check mr-5'>
                                <input
                                  className='form-check-input'
                                  type='radio'
                                  name='radio4'
                                  checked={
                                    mr.background.anesthesiaProblems
                                      ? true
                                      : false
                                  }
                                />
                                <label className='form-check-label'>Sí</label>
                              </div>
                              <div className='col-sm-2 form-check'>
                                <input
                                  className='form-check-input'
                                  type='radio'
                                  name='radio4'
                                  checked={
                                    !mr.background.anesthesiaProblems
                                      ? true
                                      : false
                                  }
                                />
                                <label className='form-check-label'>No</label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='row'>
                          <div className='col-sm-8'>
                            5. <span>VIH</span>
                          </div>
                          <div className='col-sm-4'>
                            <div className='row form-group'>
                              <div className='col-sm-2 form-check mr-5'>
                                <input
                                  className='form-check-input'
                                  type='radio'
                                  name='radio5'
                                  checked={mr.background.vih ? true : false}
                                />
                                <label className='form-check-label'>Sí</label>
                              </div>
                              <div className='col-sm-2 form-check'>
                                <input
                                  className='form-check-input'
                                  type='radio'
                                  name='radio5'
                                  checked={!mr.background.vih ? true : false}
                                />
                                <label className='form-check-label'>No</label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='row '>
                          <div className='col-sm-8'>
                            6. <span>Está Ud. embarazada</span>
                          </div>
                          <div className='col-sm-4'>
                            <div className='row form-group'>
                              <div className='col-sm-2 form-check mr-5'>
                                <input
                                  className='form-check-input'
                                  type='radio'
                                  name='radio6'
                                  checked={
                                    mr.background.pregnant ? true : false
                                  }
                                />
                                <label className='form-check-label'>Sí</label>
                              </div>
                              <div className='col-sm-2 form-check'>
                                <input
                                  className='form-check-input'
                                  type='radio'
                                  name='radio6'
                                  checked={
                                    !mr.background.pregnant ? true : false
                                  }
                                />
                                <label className='form-check-label'>No</label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='row'>
                          <div className='col-sm-8'>
                            <span>* De cuántos meses</span>
                          </div>
                          <div className='col-sm-4'>
                            <input
                              className='form-check-input'
                              type='number'
                              name='monthsPregnacy'
                              value={mr.background.monthsPregnacy}
                            />
                          </div>
                        </div>
                      </div>
                      {/* contenido odontograma */}
                      <div
                        className='tab-pane fade'
                        id='custom-tabs-one-odontogram'
                        role='tabpanel'
                        aria-labelledby='custom-tabs-one-odontogram-tab'
                      >
                        <div className='row text-center'>
                          <div className='col-12'>
                            <Odontogram />
                          </div>
                        </div>
                      </div>
                      {/* contenido Plan de tratamiento */}
                      <div
                        className='tab-pane fade'
                        id='custom-tabs-one-profile'
                        role='tabpanel'
                        aria-labelledby='custom-tabs-one-profile-tab'
                      >
                        <div className='col-12'>
                          <h4 className='text-info'>Actividad reciente</h4>
                          <div className='post'>
                            <div className='user-block'>
                              <img
                                className='img-circle img-bordered-sm'
                                src='../../dist/img/user1-128x128.jpg'
                                alt=''
                              />
                              <span className='username'>
                                <a href='!#'>Jonathan Burke Jr.</a>
                              </span>
                              <span className='description'>
                                Shared publicly - 7:45 PM today
                              </span>
                            </div>
                            <p>
                              Lorem ipsum represents a long-held tradition for
                              designers, typographers and the like. Some people
                              hate it and argue for its demise, but others
                              ignore. Typographers and the like. Some people
                              hate it and argue for its demise, but others
                              ignore.
                            </p>
                            <p>
                              <a href='!#' className='link-black text-sm'>
                                <i className='fas fa-link mr-1' /> Demo File 1
                                v2
                              </a>
                            </p>
                          </div>
                          <div className='post clearfix'>
                            <div className='user-block'>
                              <img
                                className='img-circle img-bordered-sm'
                                src='../../dist/img/user7-128x128.jpg'
                                alt=''
                              />
                              <span className='username'>
                                <a href='!#'>Sarah Ross</a>
                              </span>
                              <span className='description'>
                                Sent you a message - 3 days ago
                              </span>
                            </div>
                            <p>
                              Lorem ipsum represents a long-held tradition for
                              designers, typographers and the like. Some people
                              hate it and argue for its demise, but others
                              ignore.
                            </p>
                            <p>
                              <a href='!#' className='link-black text-sm'>
                                <i className='fas fa-link mr-1' /> Demo File 2
                              </a>
                            </p>
                          </div>
                          <div className='post'>
                            <div className='user-block'>
                              <img
                                className='img-circle img-bordered-sm'
                                src='../../dist/img/user1-128x128.jpg'
                                alt=''
                              />
                              <span className='username'>
                                <a href='!#'>Jonathan Burke Jr.</a>
                              </span>
                              <span className='description'>
                                Shared publicly - 5 days ago
                              </span>
                            </div>
                            <p>
                              Lorem ipsum represents a long-held tradition for
                              designers, typographers and the like. Some people
                              hate it and argue for its demise, but others
                              ignore.
                            </p>
                            <p>
                              <a href='!#' className='link-black text-sm'>
                                <i className='fas fa-link mr-1' /> Demo File 1
                                v1
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* contenido evolución */}
                      <div
                        className='tab-pane fade'
                        id='custom-tabs-one-messages'
                        role='tabpanel'
                        aria-labelledby='custom-tabs-one-messages-tab'
                      >
                        <div className='timeline'>
                          {recordsReverse.map((rec) => {
                            return (
                              <>
                                <div className='time-label'>
                                  <span className={`bg-${rec.type === 'evolution'?'red':'green'}`}>{rec.date}</span>
                                </div>
                                {rec.situationByTooth.map((teeth) => {
                                  return (
                                    <div>
                                      <i
                                        className={`fas fa-envelope bg-blue`}
                                      />
                                      <div className='timeline-item'>
                                        <span className='time'>
                                          <i className='fas fa-clock' />{' '}
                                          {rec.hour}
                                        </span>
                                        <h3 className='timeline-header'>
                                          <a href='#'>{rec.operator}</a> sent
                                          you an email
                                        </h3>
                                        <div className='timeline-body'>
                                          {`${teeth.id} necesita ${teeth.toDo} y se hará ${teeth.done} ${rec.notes}`}
                                        </div>
                                        <div className='timeline-footer'>
                                          <a className='btn btn-primary btn-sm'>
                                            Ver detalle
                                          </a>
                                          <a className='btn btn-danger btn-sm'>
                                            Delete
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </>
                            );
                          })}
                          <div>
                            <i class='fas fa-clock bg-gray'></i>
                          </div>
                        </div>
                      </div>
                      {/* contenido consentimientos informados */}
                      <div
                        className='tab-pane fade'
                        id='custom-tabs-one-settings'
                        role='tabpanel'
                        aria-labelledby='custom-tabs-one-settings-tab'
                      >
                        <div className='col-12'>
                          <h3 className='text-info'>
                            <i className='fas fa-file-signature' />{' '}
                            Consentimientos informados
                          </h3>
                          <p className='text-muted'>
                            Raw denim you probably haven't heard of them jean
                            shorts Austin. Nesciunt tofu stumptown aliqua
                            butcher retro keffiyeh dreamcatcher synth. Cosby
                            sweater eu banh mi, qui irure terr. You probably
                            haven't heard of them jean shorts Austin. Nesciunt
                            tofu stumptown aliqua butcher retro keffiyeh
                            dreamcatcher synth. Cosby sweater eu banh mi, qui
                            irure terr.
                          </p>
                          <br />
                          <div className='text-muted'>
                            <p className='text-sm'>
                              Client Company
                              <b className='d-block'>Deveint Inc</b>
                            </p>
                            <p className='text-sm'>
                              Project Leader
                              <b className='d-block'>Tony Chicken</b>
                            </p>
                          </div>
                          <h5 className='mt-5 text-muted'>Lista de Archivos</h5>
                          <ul className='list-unstyled'>
                            <li>
                              <a href className='btn-link text-secondary'>
                                <i className='far fa-fw fa-file-word' />{' '}
                                Functional-requirements.docx
                              </a>
                            </li>
                            <li>
                              <a href className='btn-link text-secondary'>
                                <i className='far fa-fw fa-file-pdf' /> UAT.pdf
                              </a>
                            </li>
                            <li>
                              <a href className='btn-link text-secondary'>
                                <i className='far fa-fw fa-envelope' />{' '}
                                Email-from-flatbal.mln
                              </a>
                            </li>
                            <li>
                              <a href className='btn-link text-secondary'>
                                <i className='far fa-fw fa-image ' /> Logo.png
                              </a>
                            </li>
                            <li>
                              <a href className='btn-link text-secondary'>
                                <i className='far fa-fw fa-file-word' />{' '}
                                Contract-10_12_2014.docx
                              </a>
                            </li>
                          </ul>
                          <div className='text-center mt-5 mb-3'>
                            <a href='!#' className='btn btn-sm btn-primary'>
                              Add files
                            </a>
                            <a href='!#' className='btn btn-sm btn-warning'>
                              Report contact
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* fin contenido consentimientos informados */}
                    </div>
                    {/* fin cuerpo card */}
                  </div>
                  {/* fin card */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalRecord;
