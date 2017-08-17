import React from 'react'

import Modal from '../../src'

const Default = ({ isOpen, onClose }) => {
  const footer = (
    <div className="modal-footer">
      <button className="btn btn-sm btn-success">Save</button>
    </div>
  )
  return (
    <Modal
      className="modal-sm"
      isOpen={isOpen}
      onClose={onClose}
      header="Default"
      footer={footer}
      draggable
    >
      <h1>Default Modal</h1>
      <h1>Default Modal</h1>
      <h1>Default Modal</h1>
      <h1>Default Modal</h1>
      <fieldset className="modal-footer">
        <button className="btn btn-success">Save</button>
      </fieldset>
    </Modal>
  )
}

export default Default
