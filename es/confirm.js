import React from 'react';
import ReactModal from 'react-modal';
import Icon from 'react-icons/lib/md/error-outline';

var Confirm = function Confirm(_ref) {
  var children = _ref.children,
      onConfirm = _ref.onConfirm,
      onCancel = _ref.onCancel,
      isOpen = _ref.isOpen;
  return React.createElement(
    ReactModal,
    {
      className: 'bisu--react-modal modal-dialog modal-sm confirm',
      overlayClassName: 'bisu--react-modal-overlay dark',
      contentLabel: 'confirm',
      onRequestClose: onCancel,
      isOpen: isOpen
    },
    React.createElement(
      'div',
      { className: 'modal-content' },
      React.createElement(
        'div',
        { className: 'modal-body text-center' },
        React.createElement(
          'div',
          { className: 'icon' },
          React.createElement(Icon, null)
        ),
        children
      ),
      React.createElement(
        'div',
        { className: 'modal-footer' },
        React.createElement(
          'button',
          { type: 'button', onClick: onCancel, className: 'btn btn-link' },
          'Cancel'
        ),
        React.createElement(
          'button',
          { type: 'button', onClick: onConfirm, className: 'btn btn-danger' },
          'Yes, confirm!'
        )
      )
    )
  );
};

export default Confirm;