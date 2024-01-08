/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    const hashmap = {} //hold the sum and their count

    //run the the array, track the sum of the current element plus the next and add it to hashmap
    //if hashmap already has that sum, return true
    for(let i = 0; i < nums.length; i++) {
        if(!hashmap[ nums[i] + nums[i+1] ]) {
            hashmap[ nums[i] + nums[i+1] ] = 1
        } else {
            return true
        }
    }
    //for loop did not return true, no equal subarray
    return false



};