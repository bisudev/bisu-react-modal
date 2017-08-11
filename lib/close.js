"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Close = function Close(_ref) {
  var onClose = _ref.onClose;
  return _react2.default.createElement(
    "button",
    { onClick: onClose, type: "button", className: "close", "aria-label": "Close" },
    _react2.default.createElement(
      "span",
      { "aria-hidden": "true" },
      "\xD7"
    )
  );
};

exports.default = Close;
module.exports = exports["default"];