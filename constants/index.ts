import { Dimensions, Platform, StatusBar } from "react-native";

export * from "./Colors";

export const DEVICE_WIDTH = Dimensions.get("window").width;
export const DEVICE_HEIGHT = Dimensions.get("window").height;

const WIDTH_NEED_CHANGE = 600;

export const IS_IOS = Platform.OS === "ios";
export const IS_ANDROID = Platform.OS === "android";
export const IS_IPAD = DEVICE_WIDTH > WIDTH_NEED_CHANGE;

export const PADDING = IS_IPAD ? 16 : 8;
export const BORDER_RADIUS = 6;

const STATUSBAR_DEFAULT_HEIGHT = 20;

export const STATUS_BAR_HEIGHT = Platform.select({
  ios: STATUSBAR_DEFAULT_HEIGHT,
  android: StatusBar.currentHeight,
  default: 0,
});

export const APP_NAME = "Pastel Grid";
export const APP_VERSION = "1.0.0";
export const GITHUB_URL =
  "https://github.com/perryhoang2012/interview-pastel-grid";
