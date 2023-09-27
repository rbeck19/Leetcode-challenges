/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    

    nums.sort((a,b)=> b-a)
    console.log(nums)


    return ( (nums[0]-1)*(nums[1]-1) )

};