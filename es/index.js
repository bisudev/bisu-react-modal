import React, { PropTypes } from 'react';
import ReactModal from 'react-modal';
import cn from 'classnames';

import Close from './close';

var Modal = function Modal(_ref) {
  var children = _ref.children,
      handleClose = _ref.handleClose,
      isOpen = _ref.isOpen,
      modalClass = _ref.modalClass;

  if (!isOpen) {
    return null;
  }

  var cl = cn('modal-dialog', modalClass);
  return React.createElement(
    'div',
    { className: 'modal modal-over' },
    React.createElement(
      ReactModal,
      {
        className: cl,
        overlayClassName: 'modal-overlay',
        onRequestClose: handleClose,
        contentLabel: 'modal',
        isOpen: true
      },
      React.createElement(
        'div',
        { className: 'modal-content' },
        React.createElement(
          'div',
          { className: 'modal-body' },
          React.createElement(Close, { close: handleClose }),
          children
        )
      )
    )
  );
};

process.env.NODE_ENV !== "production" ? Modal.propTypes = {
  children: PropTypes.any,
  modalClass: PropTypes.string,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func
} : void 0;

export default Modal;