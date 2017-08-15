'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _errorOutline = require('react-icons/lib/md/error-outline');

var _errorOutline2 = _interopRequireDefault(_errorOutline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Confirm = function Confirm(_ref) {
  var children = _ref.children,
      onConfirm = _ref.onConfirm,
      onCancel = _ref.onCancel,
      isOpen = _ref.isOpen;
  return _react2.default.createElement(
    _reactModal2.default,
    {
      className: 'bisu--react-modal modal-dialog modal-sm confirm',
      overlayClassName: 'bisu--react-modal-overlay dark',
      contentLabel: 'confirm',
      onRequestClose: onCancel,
      isOpen: isOpen
    },
    _react2.default.createElement(
      'div',
      { className: 'modal-content' },
      _react2.default.createElement(
        'div',
        { className: 'modal-body text-center' },
        _react2.default.createElement(
          'div',
          { className: 'icon' },
          _react2.default.createElement(_errorOutline2.default, null)
        ),
        children
      ),
      _react2.default.createElement(
        'div',
        { className: 'modal-footer' },
        _react2.default.createElement(
          'button',
          { type: 'button', onClick: onCancel, className: 'btn btn-default' },
          'Cancel'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', onClick: onConfirm, className: 'btn btn-danger' },
          'Yes, confirm!'
        )
      )
    )
  );
};

exports.default = Confirm;
module.exports = exports['default'];