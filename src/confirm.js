import React, { Component } from 'react'
import ReactModal from 'react-modal'
import Icon from 'react-icons/lib/md/error-outline'

class Confirm extends Component {
  _onCancel = () => {
    if (this.props.pending) {
      return false
    }
    this.props.onCancel()
  }

  render() {
    const { children, onConfirm, isOpen, pending } = this.props
    return (
      <ReactModal
        className="bisu--react-modal modal-dialog modal-sm confirm"
        overlayClassName="bisu--react-modal-overlay dark"
        contentLabel="confirm"
        onRequestClose={this._onCancel}
        isOpen={isOpen}
      >
        <div className="modal-content">
          <div className="modal-body text-center">
            <div className="icon">
              <Icon />
            </div>
            {children}
          </div>
          <fieldset className="modal-footer" disabled={pending}>
            <button
              type="button"
              onClick={this._onCancel}
              className="btn btn-link"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={onConfirm}
              className="btn btn-danger"
            >
              Yes, confirm!
            </button>
          </fieldset>
        </div>
      </ReactModal>
    )
  }
}

export default Confirm
