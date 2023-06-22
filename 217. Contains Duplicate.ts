function containsDuplicate(nums: number[]): boolean {
    let hash={};
    for (const i in nums) {
        if (hash[nums[i]]==undefined) {
            hash[nums[i]]=1;
        } else {
            return true;
        }
    }
    return false;
};