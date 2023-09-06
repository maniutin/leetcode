function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let count: number = 1;
  let max: number = 1;
  const sortedNums: number[] = nums.sort((a, b) => a - b);

  for (let i: number = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] - sortedNums[i - 1] === 1) {
      count++;
      max = Math.max(max, count);
    } else if (sortedNums[i] === sortedNums[i - 1]) {
      continue;
    } else {
      count = 1;
    }
  }

  return max;
}
