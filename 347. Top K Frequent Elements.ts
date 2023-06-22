function topKFrequent(nums: number[], k: number): number[] {
  const numsHash = {};

  for (let num of nums){
    numsHash[num] = (numsHash[num] || 0) + 1;
  }

  let keys = Object.keys(numsHash);

  keys.sort((a, b) => numsHash[b] - numsHash[a]);

  return keys.map(Number).slice(0, k);
};