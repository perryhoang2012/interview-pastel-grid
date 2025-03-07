import { BORDER_RADIUS } from "@/constants";
import getGridItemSize from "@/utils/gridUtils";
import { memo, useCallback } from "react";
import { View } from "react-native";
import type { SortableGridRenderItem } from "react-native-sortables";
import Sortable from "react-native-sortables";

type Props = {
  gridSize: number;
  gridGap: number;
  colors: string[];
  widthGridView: number;
  scrollableRef?: any;
};
const GridDropAndDrag = ({
  gridSize,
  gridGap,
  colors,
  widthGridView,
  scrollableRef,
}: Props) => {
  const renderItem = useCallback<SortableGridRenderItem<string>>(
    ({ item }) => (
      <View
        style={{
          backgroundColor: item,
          width: getGridItemSize(widthGridView, gridSize, gridGap),
          height: getGridItemSize(widthGridView, gridSize, gridGap),
          borderRadius: BORDER_RADIUS,
        }}
      />
    ),
    [gridSize, gridGap, widthGridView]
  );

  if (gridSize === 0) return <></>;
  return (
    <Sortable.Grid
      scrollableRef={scrollableRef}
      key={`${gridSize}x${gridSize}`}
      columns={gridSize}
      data={colors}
      renderItem={renderItem}
      rowGap={gridGap}
      columnGap={gridGap}
      activeItemOpacity={1}
      inactiveItemOpacity={1}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

export default memo(GridDropAndDrag);
