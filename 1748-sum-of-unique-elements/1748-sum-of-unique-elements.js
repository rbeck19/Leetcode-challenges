/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    
    // const hashmap = {}
    // let sum = 0
    //create a key:value object of number occurance
    // for(let i = 0; i < nums.length; i++) {
    //     if(!hashmap[nums[i]]) {
    //         hashmap[nums[i]] = 1
    //     } else {
    //         hashmap[nums[i]] += 1
    //     }
    // }
    //if number occured once add it to sum
    // for(const key in hashmap) {
    //     console.log("key:", key, "value:", hashmap[key])
    //     if(hashmap[key] === 1) {
    //         sum += Number(key)
    //     }
    // }
    // return sum
    
    //----- Does above code but in 1 for loop -----

    const hashmap = {}
    let sum = 0
    //create key : value and handle sum at same time
    for(let i = 0; i < nums.length; i++) {
        if(!hashmap[nums[i]]) { // occurs 1st time add to sum
            hashmap[nums[i]] = 1
            sum += nums[i]
        } else {
            hashmap[nums[i]] += 1 //occurs again add value to key
        }
        if (hashmap[nums[i]] === 2) { //if occured 2nd time negate it from sum
            sum -= nums[i]
        }
    }

    return sum

};