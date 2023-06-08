"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.mediaQuery = exports.isInInterval = void 0;

var _reactNative = require("react-native");

var _useDimensions = _interopRequireDefault(require("./useDimensions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isInInterval = (value, min, max) => (min === undefined || value >= min) && (max === undefined || value <= max);

exports.isInInterval = isInInterval;

const mediaQuery = (query, width, height) => {
  const {
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    minAspectRatio,
    maxAspectRatio,
    minPixelRatio,
    maxPixelRatio,
    orientation,
    platform,
    condition
  } = query;
  const currentOrientation = width > height ? "landscape" : "portrait";
  return isInInterval(width, minWidth, maxWidth) && isInInterval(height, minHeight, maxHeight) && isInInterval(width / height, minAspectRatio, maxAspectRatio) && isInInterval(_reactNative.PixelRatio.get(), minPixelRatio, maxPixelRatio) && (orientation === undefined || orientation === currentOrientation) && (platform === undefined || platform === _reactNative.Platform.OS) && (condition === undefined || condition);
};

exports.mediaQuery = mediaQuery;

const MediaQuery = ({
  children,
  ...props
}) => {
  const {
    width,
    height
  } = (0, _useDimensions.default)();
  const val = mediaQuery(props, width, height);

  if (val) {
    return children;
  }

  return null;
};

var _default = MediaQuery;
exports.default = _default;
//# sourceMappingURL=MediaQuery.js.map