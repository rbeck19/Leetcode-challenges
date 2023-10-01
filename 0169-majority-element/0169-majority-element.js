/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

        const hashmap = {}

        for (let i = 0; i < nums.length; i++) {
            if(!hashmap[nums[i]]) {
                hashmap[nums[i]] = 1
            } else {
                hashmap[nums[i]] += 1
            }
        }

    let output = [0,0]

    for(let key in hashmap) {
        if(hashmap[key] > output[1]) {
            output = [key, hashmap[key]]
        }
    }

    return output[0]

};