function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { Component } from "react";
import { Dimensions } from "react-native"; // eslint-disable-next-line @typescript-eslint/no-empty-interface

export default class ResponsiveComponent extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      window: Dimensions.get("window")
    });

    _defineProperty(this, "onDimensionChange", dims => this.setState(dims));
  }

  componentDidMount() {
    Dimensions.addEventListener("change", this.onDimensionChange);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.onDimensionChange);
  }

}
//# sourceMappingURL=ResponsiveComponent.js.map