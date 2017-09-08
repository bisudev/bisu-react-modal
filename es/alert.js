import React from 'react';
import ReactModal from 'react-modal';
import Icon from 'react-icons/lib/md/info';

var Alert = function Alert(_ref) {
  var children = _ref.children,
      okText = _ref.okText,
      onConfirm = _ref.onConfirm,
      isOpen = _ref.isOpen;
  return React.createElement(
    ReactModal,
    {
      className: 'bisu--react-modal modal-dialog modal-sm alert',
      overlayClassName: 'bisu--react-modal-overlay dark',
      contentLabel: 'alert',
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
          { type: 'button', onClick: onConfirm, className: 'btn btn-sm btn-info' },
          okText
        )
      )
    )
  );
};

Alert.defaultProps = {
  okText: 'Okay'
};

export default Alert;