import { DIMENSIONS, pastelColorOptions, ThemeColors } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  selectedColor: ColorSelect;
  setSelectedColor: React.Dispatch<React.SetStateAction<ColorSelect>>;
};
const ColorPicker = ({ selectedColor, setSelectedColor }: Props) => {
  const renderColorOption = ({ color, name }: ColorSelect) => {
    const active: boolean = selectedColor.color === color;
    return (
      <TouchableOpacity
        key={name}
        style={[styles.colorButton, { backgroundColor: color }]}
        onPress={() => setSelectedColor({ color, name })}
      >
        <View style={styles.viewEmpty} />
        <Text style={styles.colorButtonText}>{name}</Text>
        {active ? (
          <Ionicons
            name="checkmark-circle"
            size={18}
            color={ThemeColors.pureBlack}
          />
        ) : (
          <View style={styles.viewEmpty} />
        )}
      </TouchableOpacity>
    );
  };

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
    marginRight: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 130,
    alignItems: "center",
    paddingHorizontal: 8,
  },
  colorButtonText: {
    color: ThemeColors.pureBlack,
    marginHorizontal: 10,
  },
  viewEmpty: {
    width: 16,
  },
});
