'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _info = require('react-icons/lib/md/info');

var _info2 = _interopRequireDefault(_info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Alert = function Alert(_ref) {
  var children = _ref.children,
      okText = _ref.okText,
      onConfirm = _ref.onConfirm,
      isOpen = _ref.isOpen;
  return _react2.default.createElement(
    _reactModal2.default,
    {
      className: 'bisu--react-modal modal-dialog modal-sm alert',
      overlayClassName: 'bisu--react-modal-overlay dark',
      contentLabel: 'alert',
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
          _react2.default.createElement(_info2.default, null)
        ),
        children
      ),
      _react2.default.createElement(
        'div',
        { className: 'modal-footer' },
        _react2.default.createElement(
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

exports.default = Alert;
module.exports = exports['default'];