'use strict';

exports.__esModule = true;
exports.Alert = exports.Confirm = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _reactDraggable = require('react-draggable');

var _reactDraggable2 = _interopRequireDefault(_reactDraggable);

var _dragHandle = require('react-icons/lib/md/drag-handle');

var _dragHandle2 = _interopRequireDefault(_dragHandle);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _close = require('./close');

var _close2 = _interopRequireDefault(_close);

var _confirm = require('./confirm');

var _confirm2 = _interopRequireDefault(_confirm);

var _alert = require('./alert');

var _alert2 = _interopRequireDefault(_alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  var cl = (0, _classnames2.default)('bisu--react-modal', 'modal-dialog', className);
  var oc = (0, _classnames2.default)('bisu--react-modal-overlay', overlayClassName);

  return _react2.default.createElement(
    _reactModal2.default,
    {
      className: cl,
      overlayClassName: oc,
      contentLabel: 'modal',
      onRequestClose: onClose,
      shouldCloseOnOverlayClick: !sticky,
      isOpen: isOpen
    },
    _react2.default.createElement(
      _reactDraggable2.default,
      { handle: '.draggable' },
      _react2.default.createElement(
        'div',
        { className: 'modal-content' },
        header && _react2.default.createElement(
          'div',
          { className: 'modal-header' },
          header
        ),
        _react2.default.createElement(
          'div',
          { className: 'modal-body' },
          children
        ),
        footer,
        withClose && _react2.default.createElement(_close2.default, { onClose: onClose }),
        draggable && _react2.default.createElement(
          'button',
          { type: 'button', title: 'drag', className: 'close draggable' },
          _react2.default.createElement(_dragHandle2.default, null)
        )
      )
    )
  );
};

Modal.defaultProps = {
  overlayClassName: 'dark'
};

exports.default = Modal;
exports.Confirm = _confirm2.default;
exports.Alert = _alert2.default;