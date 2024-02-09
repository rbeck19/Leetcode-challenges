/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    //set trackers to the first value of nums
    let currentMax = nums[0];
    let maxProduct = nums[0];
    let currentMin= nums[0];
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] < 0) {
            [currentMax, currentMin] = [currentMin, currentMax]
        }
        currentMax = Math.max(nums[i], nums[i] * currentMax);
        currentMin = Math.min(nums[i], nums[i] * currentMin);
        maxProduct = Math.max(currentMax, maxProduct);
    }
    return maxProduct;
};