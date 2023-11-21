/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {

    const hashmap = {}
    let count = 0
        for(let i = 0; i < nums.length; i++) {
            //reverse string version
           let rev = nums[i].toString().split('').reverse().join('')
           nums[i] = nums[i] - Number(rev)
           if(!hashmap[nums[i]]) {
               hashmap[nums[i]] = 1
           } else {
               hashmap[nums[i]] += 1 
           }
        }

    for(const key in hashmap) {
        //console.log("key:", key, "value:", hashmap[key])
        if(hashmap[key] > 1) {
            count += (hashmap[key] * (hashmap[key] - 1)) / 2
        }
    }

    if (count >= 1000000007) {
        return count % 1000000007
    } else {
        return count
    }

};