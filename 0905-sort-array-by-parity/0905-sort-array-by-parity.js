/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    
    nums.sort((a, b) => {
        if (a % 2 === 0 && b % 2 !== 0) {
            return -1; // even numbers come before odd numbers
        } else if (a % 2 !== 0 && b % 2 === 0) {
            return 1; // odd numbers come after even numbers
        } else {
            return 0; // no change in order if both are even or both are odd
        }
    });

    return nums

};