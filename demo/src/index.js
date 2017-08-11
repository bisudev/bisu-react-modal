import React, { Component } from 'react'
import { render } from 'react-dom'
import { fromJS } from 'immutable'

import DefaultModal from './default'
import WithClose from './with-close'
import Sticky from './sticky'
import Stacked from './stacked'

import './demo.scss'

class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: fromJS([
        false, // 1
        false, // 2
        false,
        false,
        false,
      ]),
    }
  }

  _openModal = index => {
    this.setState({
      modal: this.state.modal.set(index, true),
    })
  }

  _closeModal = index => {
    this.setState({
      modal: this.state.modal.set(index, false),
    })
  }

  render() {
    const { modal } = this.state

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>bisu-react-modal Demo</h1>
            <hr />
            <button
              type="button"
              onClick={this._openModal.bind(this, 0)}
              className="btn btn-info"
            >
              Open Default Modal
            </button>{' '}
            <DefaultModal
              isOpen={modal.get(0)}
              onClose={this._closeModal.bind(this, 0)}
            />
            <button
              type="button"
              onClick={this._openModal.bind(this, 1)}
              className="btn btn-info"
            >
              Modal with Close
            </button>{' '}
            <WithClose
              isOpen={modal.get(1)}
              onClose={this._closeModal.bind(this, 1)}
            />
            <button
              type="button"
              onClick={this._openModal.bind(this, 2)}
              className="btn btn-info"
            >
              Sticky Modal
            </button>{' '}
            <Sticky
              isOpen={modal.get(2)}
              onClose={this._closeModal.bind(this, 2)}
            />
            <button
              type="button"
              onClick={this._openModal.bind(this, 3)}
              className="btn btn-info"
            >
              Stacked Modal
            </button>{' '}
            <Stacked
              isOpen={modal.get(3)}
              onClose={this._closeModal.bind(this, 3)}
            />
            <hr />
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
            <h1>Placeholder</h1>
          </div>
        </div>
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
