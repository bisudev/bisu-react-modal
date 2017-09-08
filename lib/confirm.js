'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _errorOutline = require('react-icons/lib/md/error-outline');

var _errorOutline2 = _interopRequireDefault(_errorOutline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Confirm = function (_Component) {
  _inherits(Confirm, _Component);

  function Confirm() {
    var _temp, _this, _ret;

    _classCallCheck(this, Confirm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this._onCancel = function () {
      if (_this.props.pending) {
        return false;
      }
      _this.props.onCancel();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Confirm.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        okText = _props.okText,
        onConfirm = _props.onConfirm,
        isOpen = _props.isOpen,
        pending = _props.pending;

    return _react2.default.createElement(
      _reactModal2.default,
      {
        className: 'bisu--react-modal modal-dialog modal-sm confirm',
        overlayClassName: 'bisu--react-modal-overlay dark',
        contentLabel: 'confirm',
        onRequestClose: this._onCancel,
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
          'fieldset',
          { className: 'modal-footer', disabled: pending },
          _react2.default.createElement(
            'button',
            {
              type: 'button',
              onClick: this._onCancel,
              className: 'btn btn-link'
            },
            'Cancel'
          ),
          _react2.default.createElement(
            'button',
            {
              type: 'button',
              onClick: onConfirm,
              className: 'btn btn-sm btn-danger'
            },
            okText
          )
        )
      )
    );
  };

  return Confirm;
}(_react.Component);

Confirm.defaultProps = {
  okText: 'Yes, confirm!'
};

exports.default = Confirm;
module.exports = exports['default'];