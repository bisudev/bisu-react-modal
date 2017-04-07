import React, { PropTypes } from 'react'

const Close = ({ close }) => (
  <div className="modal-close">
    <button
      type="button"
      onClick={close}
      className="close"
      aria-label="Close"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
)

Close.propTypes = {
  close: PropTypes.func,
}

export default Close
