import { DIMENSIONS, pastelColorOptions, ThemeColors } from "@/constants";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  setSelectedColor: React.Dispatch<React.SetStateAction<ColorSelect>>;
};
const ColorPicker = ({ setSelectedColor }: Props) => {
  const renderColorOption = ({ color, name }: ColorSelect) => (
    <TouchableOpacity
      key={name}
      style={[styles.colorButton, { backgroundColor: color }]}
      onPress={() => setSelectedColor({ color, name })}
    >
      <Text style={styles.colorButtonText}>{name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.colorPickerContainer}>
      <Text style={styles.label}>Color Picker</Text>
      <ScrollView horizontal style={styles.colorPicker}>
        {pastelColorOptions.map(renderColorOption)}
      </ScrollView>
    </View>
  );
};

export default ColorPicker;

const styles = StyleSheet.create({
  label: {
    color: ThemeColors.pureBlack,
    marginBottom: 4,
    fontSize: 16,
  },
  colorPickerContainer: {
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  colorPicker: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  colorButton: {
    borderRadius: DIMENSIONS.BORDER_RADIUS,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginRight: 6,
  },
  colorButtonText: {
    color: ThemeColors.pureBlack,
  },
});
