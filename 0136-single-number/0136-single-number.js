/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    // const ht = {}
    
    // for (const num of nums) {
    //     ht[num] = ht[num] + 1 || 1
    // }
        
    // for (const value in ht) {
    //     if (ht[value] === 1) {
    //         return value
    //     }
    // }

    nums = nums.sort((a,b) => a-b)

    for(let i = 0; i < nums.length; i+= 2) {
        if(nums[i] != nums[i+1]) {
            return nums[i]
        }
    }

};