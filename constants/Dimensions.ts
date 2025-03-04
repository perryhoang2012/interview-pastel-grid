import { Dimensions } from "react-native";
import { IS_IPAD } from "./Platform";

export const { width: D_WIDTH, height: D_HEIGHT } = Dimensions.get("window");

export const DIMENSIONS = {
  SCREEN_WIDTH: D_WIDTH,
  SCREEN_HEIGHT: D_HEIGHT,
  BORDER_RADIUS: 6,
  PADDING: IS_IPAD ? 16 : 8,
};
