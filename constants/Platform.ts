import { Platform } from "react-native";
import { D_WIDTH } from "./Dimensions";

const WIDTH_NEED_CHANGE = 600;

export const IS_IOS = Platform.OS === "ios";
export const IS_ANDROID = Platform.OS === "android";
export const IS_IPAD = D_WIDTH > WIDTH_NEED_CHANGE;
