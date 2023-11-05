/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    
    let count = 0

    //nested loop
    for(let i = 0; i < nums.length; i++) {
        //look at index i and check for pairs after it
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] == nums[j]) {
                count++
            }
        }
    }

    return count
};