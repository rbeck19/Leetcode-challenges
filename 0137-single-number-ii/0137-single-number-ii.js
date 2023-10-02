/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    

    const hashmap = {}

    for(let i = 0; i < nums.length; i++) {
        if(!hashmap[nums[i]]) {
            hashmap[nums[i]] = 1
        } else {
            hashmap[nums[i]] += 1
        }
    }

    for(let key in hashmap) {
        if(hashmap[key] == 1) {
            return key
        }
    }

};