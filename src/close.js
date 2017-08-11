import React from 'react'

const Close = ({ onClose }) =>
  <button onClick={onClose} type="button" className="close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>

export default Close
