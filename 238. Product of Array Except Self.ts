function productExceptSelf(nums: number[]): number[] {
  const result: number[] = Array(nums.length).fill(1);
  let prefix: number = 1;
  let postfix: number = 1;

  for (let i in nums) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= postfix;
    postfix *= nums[j];
  }

  return result;
}
