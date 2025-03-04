import { DIMENSIONS, ThemeColors } from "@/constants";
import React from "react";
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from "react-native";

type Props = {
  value: number | string;
  setValue: (value: string) => void;
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  keyboardType?: KeyboardTypeOptions;
  testId?: string;
};

const Input = ({
  value,
  setValue,
  label: labelText,
  containerStyle,
  keyboardType: keyboardTypeOption,
  testId,
}: Props) => {
  return (
    <View style={[styles.inputGroup, containerStyle]}>
      {labelText && <Text style={styles.label}>{labelText}</Text>}
      <TextInput
        testID={testId}
        style={styles.input}
        keyboardType={keyboardTypeOption}
        value={String(value)}
        onChangeText={setValue}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginBottom: 16,
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  inputGroup: {
    flex: 1,
  },
  label: {
    color: ThemeColors.pureBlack,
    marginBottom: 4,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: ThemeColors.borderGray,
    borderRadius: DIMENSIONS.BORDER_RADIUS,
    padding: 8,
  },
});
