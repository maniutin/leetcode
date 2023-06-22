function productExceptSelf(nums: number[]): number[] {
  const result = [];

  for (let num of nums) {
      const tempNums = [...nums];
      let index = nums.indexOf(num);
      
      tempNums.splice(index, 1)
      result.push(tempNums.reduce((a,b)=> a*b , 1));
      tempNums.push(num);

  }
  return result;
};