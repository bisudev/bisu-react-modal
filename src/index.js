import React, { PropTypes } from 'react'
import ReactModal from 'react-modal'
import cn from 'classnames'

import Close from './close'

const Modal = ({ children, handleClose, isOpen, modalClass }) => {
  if (!isOpen) {
    return null
  }

  const cl = cn('modal-dialog', modalClass)
  return (
    <ReactModal
      className={cl}
      overlayClassName="bisu--react-modal modal-overlay"
      onRequestClose={handleClose}
      contentLabel="modal"
      isOpen
    >
      <div className="modal-content">
        <div className="modal-body">
          <Close close={handleClose} />
          {children}
        </div>
      </div>
    </ReactModal>
  )
}

Modal.propTypes = {
  children: PropTypes.any,
  modalClass: PropTypes.string,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
}

export default Modal
