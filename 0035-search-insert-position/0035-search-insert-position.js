/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    //set the starting point
    let left = 0
    let right = nums.length-1

    // mid is the mid point of the arr
    //IF mid = target ruturn mid
    //ELSE IF middle is less then target  make the left pointer the middle
    //ELSE make the right pointer the middle
    while (left <= right){
        let mid = Math.floor( (left + right) / 2)
        if(nums[mid] == target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return left

};