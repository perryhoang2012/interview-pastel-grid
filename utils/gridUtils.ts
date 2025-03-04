import { DIMENSIONS } from "@/constants";

/**
 * Calculate the size of a grid item given the parent width, number of items in the grid, and the gap size between items.
 * @param {number} parentWidth The width of the parent container.
 * @param {number} numItems The number of items in the grid.
 * @param {number} gapSize The size of the gap between items.
 * @returns {number} The size of each grid item.
 */ const getGridItemSize = (
  parentWidth: number,
  numItems: number,
  gapSize: number
): number => {
  // Calculate the total space occupied by gaps between items
  const totalGap = numItems * 2 * gapSize;

  // Determine the available width for grid items after accounting for padding and gaps
  const availableWidth = parentWidth - DIMENSIONS.PADDING * 2 - totalGap;

  // Calculate and return the size of each grid item
  return availableWidth / numItems;
};

export default getGridItemSize;
