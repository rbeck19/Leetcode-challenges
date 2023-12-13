/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    
    //hashmap this
    const hashmap = {}

    for(let i = 0; i < nums.length; i++) {
        //looking at num[i]
        //is it in the hashmap
        if(!hashmap[nums[i]]) {
            hashmap[nums[i]] = 1
        } else {
            //remove the key 
            delete hashmap[nums[i]] 
        }
    }

    return Object.keys(hashmap)

};