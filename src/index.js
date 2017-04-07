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
    <div className="modal modal-over">
      <ReactModal
        className={cl}
        overlayClassName="modal-overlay"
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
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.any,
  modalClass: PropTypes.string,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
}

export default Modal
