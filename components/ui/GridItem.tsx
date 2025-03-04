import { DIMENSIONS } from "@/constants";
import React from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  item: string;
  index: number;
  itemSize: number;
};
/**
 * GridItem component renders a single grid item.
 *
 * @param {Props} props - The props for the component.
 * @returns {JSX.Element} A styled View component representing a grid item.
 */
const GridItem: React.FC<Props> = ({ itemSize, item, index }): JSX.Element => {
  return (
    <View
      key={index}
      style={[
        styles.container,
        {
          backgroundColor: item,
          width: itemSize,
          height: itemSize,
        },
      ]}
    />
  );
};

export default GridItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: DIMENSIONS.BORDER_RADIUS,
  },
});
