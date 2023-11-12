/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    
    let elementSum = 0
    let digitSum = 0
    
    for (i in nums) {
        elementSum += nums[i] //add each element

        //add the digits
        if(nums[i] > 9) {
            let digits = nums[i].toString().split("")
            for( d in digits) {
                digitSum += Number(digits[d])
            }
        } else {
           digitSum += nums[i]
        }
    }

    return Math.abs(elementSum - digitSum)
};