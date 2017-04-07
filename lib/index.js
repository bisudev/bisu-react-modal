'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _close = require('./close');

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(_ref) {
  var children = _ref.children,
      handleClose = _ref.handleClose,
      isOpen = _ref.isOpen,
      modalClass = _ref.modalClass;

  if (!isOpen) {
    return null;
  }

  var cl = (0, _classnames2.default)('modal-dialog', modalClass);
  return _react2.default.createElement(
    'div',
    { className: 'bisu--react-modal modal modal-over' },
    _react2.default.createElement(
      _reactModal2.default,
      {
        className: cl,
        overlayClassName: 'modal-overlay',
        onRequestClose: handleClose,
        contentLabel: 'modal',
        isOpen: true
      },
      _react2.default.createElement(
        'div',
        { className: 'modal-content' },
        _react2.default.createElement(
          'div',
          { className: 'modal-body' },
          _react2.default.createElement(_close2.default, { close: handleClose }),
          children
        )
      )
    )
  );
};

process.env.NODE_ENV !== "production" ? Modal.propTypes = {
  children: _react.PropTypes.any,
  modalClass: _react.PropTypes.string,
  isOpen: _react.PropTypes.bool,
  handleClose: _react.PropTypes.func
} : void 0;

exports.default = Modal;
module.exports = exports['default'];