import ColorPicker from "@/components/ui/ColorPicker";
import GridDropAndDrag from "@/components/ui/GridDropAndDrag";
import Input from "@/components/ui/Input";
import TextTitle from "@/components/ui/TextTitle";
import { BORDER_RADIUS, PADDING, STATUS_BAR_HEIGHT } from "@/constants";
import { pastelColorOptions, ThemeColors } from "@/constants/Colors";
import generatePastelColors from "@/utils/generatePastelColors";
import { validateNumberInputGripGap } from "@/utils/validateNumberInputGripGap";
import { validateNumberInputGripSize } from "@/utils/validateNumberInputGripSize";
import { debounce } from "lodash";
import React, { useCallback, useMemo, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { useAnimatedRef } from "react-native-reanimated";
const AppIndex = () => {
  const [gridSize, setGridSize] = useState<number | string>("");
  const [gridGap, setGridGap] = useState<number | string>("");

  const [selectedColor, setSelectedColor] = useState<ColorSelect>(
    pastelColorOptions[0]
  );

  const [inputText, setInputText] = useState("");
  const [widthGridView, setWidthGridView] = useState<number>(0);

  const colors = useMemo(() => {
    return generatePastelColors(
      selectedColor.color,
      Number(gridSize) * Number(gridSize)
    );
  }, [selectedColor, gridSize]);

  /**
   * Resets the grid size and gap to 0.
   */
  const resetGrid = (): void => {
    setGridGap(0);
    setGridSize(0);
    setInputText("");
  };

  const debouncedSetGridSize = useCallback(
    debounce((value) => {
      setGridSize(validateNumberInputGripSize(value));
    }, 500),
    []
  );

  const scrollableRef = useAnimatedRef<Animated.ScrollView>();

  return (
    <SafeAreaView style={styles.container}>
      <TextTitle />
      <View style={styles.inputContainer}>
        <Input
          testId="gridSizeInput"
          value={inputText}
          setValue={(text: string) => {
            setInputText(text);
            debouncedSetGridSize(text);
          }}
          containerStyle={{ marginRight: 6 }}
          label="Grid Size"
          keyboardType="numeric"
        />
        <Input
          testId="gridGapInput"
          value={gridGap}
          setValue={(text: string) =>
            setGridGap(validateNumberInputGripGap(text))
          }
          containerStyle={{ marginLeft: 6 }}
          label="Grid Gap"
          keyboardType="numeric"
        />
      </View>
      <ColorPicker
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <View style={styles.resetContainer}>
        <TouchableOpacity
          testID="resetButton"
          style={styles.resetButton}
          onPress={resetGrid}
        >
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <View
        style={styles.gridContainer}
        onLayout={(event) => setWidthGridView(event.nativeEvent.layout.width)}
      >
        <Animated.ScrollView
          ref={scrollableRef}
          showsVerticalScrollIndicator={false}
        >
          <GridDropAndDrag
            scrollableRef={scrollableRef}
            gridSize={Number(gridSize)}
            gridGap={Number(gridGap)}
            colors={colors}
            widthGridView={widthGridView}
          />
        </Animated.ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AppIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: STATUS_BAR_HEIGHT,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 16,
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  resetContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  resetButton: {
    backgroundColor: "white",
    borderRadius: BORDER_RADIUS,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: ThemeColors.borderGray,
    borderWidth: 1,
  },
  resetButtonText: {
    color: ThemeColors.pureBlack,
    fontSize: 16,
  },

  gridContainer: {
    flex: 1,
    paddingHorizontal: PADDING,
    paddingVertical: 8,
    // flexDirection: "row",
  },
});
