/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // for (let i = 1; i < nums.length; i++) {
  //     if (nums[i-1] + nums[i] === target) {
  //         return [i-1,i]
  //     }
  // }
  // nums.shift()
  // console.log(nums)
  // twoSum(nums, target)

  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    //current number
    let num1 = nums[i];
    //number we would need if using current number
    let num2 = target - num1;

    if (map.has(num2)) {
      return [i, map.get(num2)];
    }
    map.set(num1, i);
  }
};
