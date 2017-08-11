import React from 'react';

var Close = function Close(_ref) {
  var onClose = _ref.onClose;
  return React.createElement(
    "button",
    { onClick: onClose, type: "button", className: "close", "aria-label": "Close" },
    React.createElement(
      "span",
      { "aria-hidden": "true" },
      "\xD7"
    )
  );
};

export default Close;