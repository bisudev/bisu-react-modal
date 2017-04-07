"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Close = function Close(_ref) {
  var close = _ref.close;
  return _react2.default.createElement(
    "div",
    { className: "modal-close" },
    _react2.default.createElement(
      "button",
      {
        type: "button",
        onClick: close,
        className: "close",
        "aria-label": "Close"
      },
      _react2.default.createElement(
        "span",
        { "aria-hidden": "true" },
        "\xD7"
      )
    )
  );
};

process.env.NODE_ENV !== "production" ? Close.propTypes = {
  close: _react.PropTypes.func
} : void 0;

exports.default = Close;
module.exports = exports["default"];