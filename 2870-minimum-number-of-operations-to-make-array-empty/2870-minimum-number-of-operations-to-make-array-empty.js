/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    
    //hashmap of amount of nums
    const hashmap = {}
    //track the times it will take to empty the array
    let count = 0

    //loop throug nums and add to hashmap
    for(let i = 0; i < nums.length; i++) {
        if(!hashmap[nums[i]]) {
            hashmap[nums[i]] = 1
        } else {
            hashmap[nums[i]] += 1
        }
    }

    //loop through the hashmap
    for(let key in hashmap) {
        //if value is 1 it cant be removed return -1
        if(hashmap[key] === 1) { 
            return -1
        }
        //count how many times untill key value is 0
        while(hashmap[key] > 0) {
            if(hashmap[key] - 3 === 0 || hashmap[key] - 3 > 1) {
                hashmap[key] = hashmap[key] - 3
                count += 1
            } else {
                hashmap[key] = hashmap[key] - 2
                count += 1
            }
        }
    }

    return count
};