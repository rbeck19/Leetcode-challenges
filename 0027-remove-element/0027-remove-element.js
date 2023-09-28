/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    //filter the to make a new array without the Val
    const arr = nums.filter((num) => num != val)

    //modify nums for the beggining to match the arr without the val numbers
    for (let i = 0; i < arr.length; i++) {
        nums[i] = arr[i];
    }

    return arr.length
};