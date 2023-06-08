import { PixelRatio, Platform } from "react-native";
import useDimensions from "./useDimensions";
export const isInInterval = (value, min, max) => (min === undefined || value >= min) && (max === undefined || value <= max);
export const mediaQuery = (query, width, height) => {
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
  return isInInterval(width, minWidth, maxWidth) && isInInterval(height, minHeight, maxHeight) && isInInterval(width / height, minAspectRatio, maxAspectRatio) && isInInterval(PixelRatio.get(), minPixelRatio, maxPixelRatio) && (orientation === undefined || orientation === currentOrientation) && (platform === undefined || platform === Platform.OS) && (condition === undefined || condition);
};

const MediaQuery = ({
  children,
  ...props
}) => {
  const {
    width,
    height
  } = useDimensions();
  const val = mediaQuery(props, width, height);

  if (val) {
    return children;
  }

  return null;
};

export default MediaQuery;
//# sourceMappingURL=MediaQuery.js.map