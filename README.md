# bisu-react-modal

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Org usage for react-modal.

## Installation
`npm install --save bisu-react-modal`  
then include this scss file to your main scss
`@import '~bisu-react-modal/lib/style.scss';`

## Usage
```
import React, { Component } from 'react'
import Modal from 'bisu-react-modal'

class ShowModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }

  render() {
    const { showModal } = this.state
    
    return (
      <div>
        <button type="button" onClick={() => this.setState({ showModal: true })}>Show Modal</button>
        <Modal handleClose={() => this.setState({ showModal: false })} isOpen={showModal}>
          Modal Content
        </Modal>
      </div>
    )
  }
}

```
[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
