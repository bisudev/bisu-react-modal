import React, { Component } from 'react'

import Modal from '../../src'
import DefaultModal from './default'

class Stacked extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modal: false,
    }
  }

  _openModal = () => {
    this.setState({
      modal: true,
    })
  }

  _closeModal = () => {
    this.setState({
      modal: false,
    })
  }

  render() {
    const { modal } = this.state
    const { isOpen, onClose } = this.props

    return (
      <Modal className="modal-lg" isOpen={isOpen} onClose={onClose} withClose>
        <button
          type="button"
          onClick={this._openModal}
          className="btn btn-info"
        >
          Open Escapeable Modal
        </button>{' '}
        <DefaultModal isOpen={modal} onClose={this._closeModal} />
      </Modal>
    )
  }
}

export default Stacked
