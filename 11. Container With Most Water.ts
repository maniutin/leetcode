function maxArea(height: number[]): number {
  let leftPointer: number = 0;
  let rightPointer: number = height.length - 1;
  let result: number = 0;

  while (leftPointer < rightPointer) {
    result = Math.max(
      result,
      Math.min(height[leftPointer], height[rightPointer]) *
        (rightPointer - leftPointer)
    );
    height[leftPointer] <= height[rightPointer]
      ? leftPointer++
      : rightPointer--;
  }

  return result;
}
