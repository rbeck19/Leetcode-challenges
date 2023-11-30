/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    nums = nums.sort((a,b) => a-b)
    //console.log(nums)
    let count = 0
    let noPairs = 0
    for(let i = 0; i < nums.length; i++) {
        //console.log("index:", i, nums[i])
        if(nums[i] === nums[i + 1]) {
            count += 1
            i = i + 1
        } else {
            noPairs += 1
        }
    }

    console.log(count)
    console.log(noPairs)
    return [count,noPairs]
};