"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStylesheet = exports.getStylesheet = void 0;

var _ = _interopRequireWildcard(require("lodash"));

var _MediaQuery = require("./MediaQuery");

var _useDimensions = _interopRequireDefault(require("./useDimensions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const getStylesheet = ({
  width,
  height
}, styles) => {
  const selectedStyles = [];
  styles.forEach(style => (0, _MediaQuery.mediaQuery)(style.query, width, height) ? selectedStyles.push(_.cloneDeep(style.style)) : undefined);
  return _.merge.apply(null, selectedStyles);
};

exports.getStylesheet = getStylesheet;

const useStylesheet = styles => {
  const dimensions = (0, _useDimensions.default)();
  return getStylesheet(dimensions, styles);
};

exports.useStylesheet = useStylesheet;
//# sourceMappingURL=useStylesheet.js.map