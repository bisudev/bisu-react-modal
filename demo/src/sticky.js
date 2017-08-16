import React from 'react'

import Modal from '../../src'

const Sticky = ({ isOpen, onClose }) =>
  <Modal isOpen={isOpen} onClose={onClose} withClose sticky>
    Sticky Modal
    <fieldset className="modal-footer">
      <button className="btn btn-outline-secondary">Cancel</button>
      <button className="btn btn-success">Save</button>
    </fieldset>
  </Modal>

export default Sticky
