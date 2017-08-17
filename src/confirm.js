import React from 'react'
import ReactModal from 'react-modal'
import Icon from 'react-icons/lib/md/error-outline'

const Confirm = ({ children, onConfirm, onCancel, isOpen }) =>
  <ReactModal
    className="bisu--react-modal modal-dialog modal-sm confirm"
    overlayClassName="bisu--react-modal-overlay dark"
    contentLabel="confirm"
    onRequestClose={onCancel}
    isOpen={isOpen}
  >
    <div className="modal-content">
      <div className="modal-body text-center">
        <div className="icon">
          <Icon />
        </div>
        {children}
      </div>
      <div className="modal-footer">
        <button type="button" onClick={onCancel} className="btn btn-link">
          Cancel
        </button>
        <button type="button" onClick={onConfirm} className="btn btn-danger">
          Yes, confirm!
        </button>
      </div>
    </div>
  </ReactModal>

export default Confirm
