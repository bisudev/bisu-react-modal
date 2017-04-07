import React, { Component } from 'react'
import {render} from 'react-dom'

import Modal from '../../src'
import './demo.scss'

class Demo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      openModal: false,
    }
  }

  _openModal = () => {
    this.setState({
      openModal: true,
    })
  }

  _closeModal = () => {
    this.setState({
      openModal: false,
    })
  }

  render() {
    const { openModal } = this.state

    return (
      <div>
        <h1>bisu-react-modal Demo</h1>
        <button type="button" onClick={this._openModal} className="btn btn-primary">Open Modal</button>
        <Modal
          handleClose={this._closeModal}
          isOpen={openModal}
        >
          <h1>Modal content here</h1>
        </Modal>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
