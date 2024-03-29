function containsDuplicate(nums: number[]): boolean {
  const hash = {};

  for (let num of nums) {
    if (hash[num]) {
      return true;
    } else {
      hash[num] = 1;
    }
  }

  return false;
}
