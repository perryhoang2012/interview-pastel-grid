import { APP_NAME } from "@/constants";
import generateColorForText from "@/utils/generateColorForText";
import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";

/**
 * A React component that renders a title with each character
 * colored from the `generateColorForText` function.
 *
 * @returns {JSX.Element} The rendered text.
 */
const TextTitle = (): JSX.Element => {
  const titleColors = useMemo(() => generateColorForText(APP_NAME), [APP_NAME]);

  return (
    <View style={styles.container}>
      <Text>
        {titleColors.map((color, index) => (
          <Text key={index} style={[styles.titleText, { color }]}>
            {APP_NAME[index]}
          </Text>
        ))}
      </Text>
    </View>
  );
};

export default TextTitle;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 40,
    fontWeight: "500",
  },
});
