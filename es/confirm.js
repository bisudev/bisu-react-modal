function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import ReactModal from 'react-modal';
import Icon from 'react-icons/lib/md/error-outline';

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
        onConfirm = _props.onConfirm,
        isOpen = _props.isOpen,
        pending = _props.pending;

    return React.createElement(
      ReactModal,
      {
        className: 'bisu--react-modal modal-dialog modal-sm confirm',
        overlayClassName: 'bisu--react-modal-overlay dark',
        contentLabel: 'confirm',
        onRequestClose: this._onCancel,
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
          'fieldset',
          { className: 'modal-footer', disabled: pending },
          React.createElement(
            'button',
            {
              type: 'button',
              onClick: this._onCancel,
              className: 'btn btn-link'
            },
            'Cancel'
          ),
          React.createElement(
            'button',
            {
              type: 'button',
              onClick: onConfirm,
              className: 'btn btn-danger'
            },
            'Yes, confirm!'
          )
        )
      )
    );
  };

  return Confirm;
}(Component);

export default Confirm;