import React, { Component } from 'react'

import { Alert } from '../../src'

class MyAlert extends Component {
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
        <h2>Alert Dialog</h2>
        <button
          onClick={this._showModal}
          type="button"
          className="btn btn-warning"
        >
          Open Alert Dialog
        </button>
        <Alert isOpen={show} onConfirm={this._hideModal} okText="Login again">
          Sorry, your session has timed out.
        </Alert>
      </div>
    )
  }
}

export default MyAlert
