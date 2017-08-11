import React from 'react'

import Modal from '../../src'

const WithClose = ({ isOpen, onClose }) =>
  <Modal
    header="With Close"
    isOpen={isOpen}
    onClose={onClose}
    overlayClassName="dark"
    withClose
    draggable
  >
    WithClose Modal
    <div className="modal-footer">
      <button className="btn btn-sm btn-success">Save</button>
    </div>
  </Modal>

export default WithClose
