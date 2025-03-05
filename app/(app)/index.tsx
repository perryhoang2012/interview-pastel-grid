import ColorPicker from "@/components/ui/ColorPicker";
import GridItem from "@/components/ui/GridItem";
import Input from "@/components/ui/Input";
import TextTitle from "@/components/ui/TextTitle";
import { DIMENSIONS } from "@/constants";
import { pastelColorOptions, ThemeColors } from "@/constants/Colors";
import generatePastelColors from "@/utils/generatePastelColors";
import getGridItemSize from "@/utils/gridUtils";
import { validateNumberInputGripGap } from "@/utils/validateNumberInputGripGap";
import { validateNumberInputGripSize } from "@/utils/validateNumberInputGripSize";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AutoDragSortableView } from "react-native-drag-sort";

const AppIndex = () => {
  const [gridSize, setGridSize] = useState<number>(0);
  const [gridGap, setGridGap] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<ColorSelect>(
    pastelColorOptions[0]
  );
  const [colors, setColors] = useState<string[]>([]);
  const [widthGridView, setWidthGridView] = useState<number>(0);

  useEffect(() => {
    setColors(generatePastelColors(selectedColor.color, gridSize * gridSize));
  }, [selectedColor, gridSize]);

  /**
   * Resets the grid size and gap to 0.
   */
  const resetGrid = (): void => {
    setGridGap(0);
    setGridSize(0);
  };

  const _renderGrid = () => {
    return (
      <AutoDragSortableView
        dataSource={colors}
        parentWidth={widthGridView}
        childrenWidth={getGridItemSize(widthGridView, gridSize, gridGap)}
        childrenHeight={getGridItemSize(widthGridView, gridSize, gridGap)}
        marginChildrenBottom={gridGap}
        marginChildrenLeft={gridGap}
        marginChildrenRight={gridGap}
        marginChildrenTop={gridGap}
        keyExtractor={(_, index) => index}
        renderItem={(item, index) => (
          <GridItem
            item={item}
            index={index}
            itemSize={getGridItemSize(widthGridView, gridSize, gridGap)}
          />
        )}
        onDataChange={(data: string[]) => {
          setColors(data);
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextTitle />
      <View style={styles.inputContainer}>
        <Input
          testId="gridSizeInput"
          value={gridSize}
          setValue={(text: string) =>
            setGridSize(validateNumberInputGripSize(text, 100))
          }
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
        {_renderGrid()}
      </View>
    </SafeAreaView>
  );
};

export default AppIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
    marginBottom: 8,
  },
  resetButton: {
    backgroundColor: "white",
    borderRadius: DIMENSIONS.BORDER_RADIUS,
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
    paddingHorizontal: DIMENSIONS.PADDING,
    paddingVertical: 8,
    flexDirection: "row",
  },
});
