import React, { Component } from 'react'

import { Confirm } from '../../src'

class MyConfirm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
    }
  }

  _showModal = () => {
    this.setState({ show: true })
  }

  _hideModal = () => {
    this.setState({ show: false })
  }

  render() {
    const { show } = this.state

    return (
      <div>
        <h2>Confirm Dialog</h2>
        <button
          onClick={this._showModal}
          type="button"
          className="btn btn-warning"
        >
          Open Confirm Dialog
        </button>
        <Confirm
          isOpen={show}
          onCancel={this._hideModal}
          onConfirm={this._onConfirm}
        >
          Are you sure you want to do this?
        </Confirm>
      </div>
    )
  }
}

export default MyConfirm
