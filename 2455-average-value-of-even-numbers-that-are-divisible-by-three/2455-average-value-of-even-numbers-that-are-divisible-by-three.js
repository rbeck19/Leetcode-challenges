/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    //track the value
    let res = 0
    //track the count of numbers used
    let count = 0
    //loop through nums
    for(let i =0; i < nums.length; i++) {
        //if nums is even and divisable by 3
        if(nums[i] % 2 === 0 && nums[i] % 3 === 0) {
            res += nums[i] //add value to res
            count += 1 //add count track
        }
    }
    //if res is 0 return 0
    //otherwise return the rounded door number of res divided by the count or 1 if count = 0
    return res === 0 ? 0 : Math.floor( res/(count || 1) )
};