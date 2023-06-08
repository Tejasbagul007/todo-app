"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _reactNative = require("react-native");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ResponsiveComponent extends _react.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      window: _reactNative.Dimensions.get("window")
    });

    _defineProperty(this, "onDimensionChange", dims => this.setState(dims));
  }

  componentDidMount() {
    _reactNative.Dimensions.addEventListener("change", this.onDimensionChange);
  }

  componentWillUnmount() {
    _reactNative.Dimensions.removeEventListener("change", this.onDimensionChange);
  }

}

exports.default = ResponsiveComponent;
//# sourceMappingURL=ResponsiveComponent.js.map