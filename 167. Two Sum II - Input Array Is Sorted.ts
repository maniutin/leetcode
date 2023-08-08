function twoSum(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] == target - numbers[i]) {
        return [i + 1, j + 1];
      }
    }
  }
}
