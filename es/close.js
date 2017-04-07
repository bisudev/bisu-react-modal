import React, { PropTypes } from 'react';

var Close = function Close(_ref) {
  var close = _ref.close;
  return React.createElement(
    "div",
    { className: "modal-close" },
    React.createElement(
      "button",
      {
        type: "button",
        onClick: close,
        className: "close",
        "aria-label": "Close"
      },
      React.createElement(
        "span",
        { "aria-hidden": "true" },
        "\xD7"
      )
    )
  );
};

process.env.NODE_ENV !== "production" ? Close.propTypes = {
  close: PropTypes.func
} : void 0;

export default Close;