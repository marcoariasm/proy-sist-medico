import React from 'react';

const Modal = ({ id, size, header, body, footer }) => {
  return (
    <div
      className='modal fade'
      id={id}
      aria-hidden='true'
      style={{ display: 'none' }}
    >
      <div className={`modal-dialog modal-${size}`}>
        <div className='modal-content'>
          <div className='modal-header'>{header}</div>
          <div className='modal-body'>{body}</div>
          <div className='modal-footer justify-content-between'>{footer}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
