/*
  给定 nums = [2, 7, 11, 15], target = 9
  因为 nums[0] + nums[1] = 2 + 7 = 9
  所以返回 [0, 1]
*/

let twoSum = (nums: number[], target: number): number[] => {
    const valsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (valsMap.get(complement) != undefined) {
            return ([valsMap.get(complement), i])
        } else {
            valsMap.set(nums[i], i)
        }
    }
}