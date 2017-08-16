import React from 'react'
import ReactModal from 'react-modal'
import Icon from 'react-icons/lib/md/info'

const Alert = ({ children, okText, onConfirm, isOpen }) =>
  <ReactModal
    className="bisu--react-modal modal-dialog modal-sm alert"
    overlayClassName="bisu--react-modal-overlay dark"
    contentLabel="alert"
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
        <button
          type="button"
          onClick={onConfirm}
          className="btn btn-info btn-sm"
        >
          {okText}
        </button>
      </div>
    </div>
  </ReactModal>

Alert.defaultProps = {
  okText: 'Okay',
}

export default Alert
