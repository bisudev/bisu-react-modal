import React from 'react';
import ReactModal from 'react-modal';
import Draggable from 'react-draggable';
import DragIcon from 'react-icons/lib/md/drag-handle';
import cn from 'classnames';

import Close from './close';

var Modal = function Modal(_ref) {
  var children = _ref.children,
      header = _ref.header,
      className = _ref.className,
      overlayClassName = _ref.overlayClassName,
      isOpen = _ref.isOpen,
      withClose = _ref.withClose,
      sticky = _ref.sticky,
      footer = _ref.footer,
      draggable = _ref.draggable,
      onClose = _ref.onClose;

  var cl = cn('bisu--react-modal', 'modal-dialog', className);
  var oc = cn('bisu--react-modal-overlay', overlayClassName);

  return React.createElement(
    ReactModal,
    {
      className: cl,
      overlayClassName: oc,
      contentLabel: 'modal',
      onRequestClose: onClose,
      shouldCloseOnOverlayClick: !sticky,
      isOpen: isOpen
    },
    React.createElement(
      Draggable,
      { handle: '.draggable' },
      React.createElement(
        'div',
        { className: 'modal-content' },
        header && React.createElement(
          'div',
          { className: 'modal-header' },
          header
        ),
        React.createElement(
          'div',
          { className: 'modal-body' },
          children
        ),
        footer,
        withClose && React.createElement(Close, { onClose: onClose }),
        draggable && React.createElement(
          'button',
          { type: 'button', title: 'drag', className: 'close draggable' },
          React.createElement(DragIcon, null)
        )
      )
    )
  );
};

Modal.defaultProps = {
  overlayClassName: 'dark'
};

export default Modal;

import _Confirm from './confirm';
export { _Confirm as Confirm };
import _Alert from './alert';
export { _Alert as Alert };