/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    //sort the array in decreasing order
    nums.sort((a,b)=> b-a)
    //return the first two max value indiecies with the math they want 
    return ( (nums[0]-1)*(nums[1]-1) )

};