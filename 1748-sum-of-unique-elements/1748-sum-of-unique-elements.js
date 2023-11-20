/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    
    const hashmap = {}
    let sum = 0
    
    for(let i = 0; i < nums.length; i++) {
        if(!hashmap[nums[i]]) {
            hashmap[nums[i]] = 1
        } else {
            hashmap[nums[i]] += 1
        }
    }
    
    for(const key in hashmap) {
        console.log("key:", key, "value:", hashmap[key])
        if(hashmap[key] === 1) {
            sum += Number(key)
        }
    }
    
    return sum
    
};