import React from 'react'

import Modal from '../../src'

const Sticky = ({ isOpen, onClose }) =>
  <Modal isOpen={isOpen} onClose={onClose} withClose sticky>
    Sticky Modal
  </Modal>

export default Sticky
