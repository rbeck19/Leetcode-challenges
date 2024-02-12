/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {


    const hashmap = {}

    //fill the hashmap
    for(let i = 0; i < nums.length; i++){
        !hashmap[nums[i]] ? hashmap[nums[i]] = 1 : hashmap[nums[i]] += 1
    }
    
    let res = [0,0]
    //loop through the hashmap when the value is greater than what is in res, adjust res to new key value
    for(let key in hashmap) {
        if(hashmap[key] > res[1]) {
            res = [key, hashmap[key]]
        }
    }
    //return the first element of res which holds the majority element
    return res[0]



    //     const hashmap = {}

    //     for (let i = 0; i < nums.length; i++) {
    //         if(!hashmap[nums[i]]) {
    //             hashmap[nums[i]] = 1
    //         } else {
    //             hashmap[nums[i]] += 1
    //         }
    //     }

    // let output = [0,0]

    // for(let key in hashmap) {
    //     if(hashmap[key] > output[1]) {
    //         output = [key, hashmap[key]]
    //     }
    // }

    // return output[0]

};