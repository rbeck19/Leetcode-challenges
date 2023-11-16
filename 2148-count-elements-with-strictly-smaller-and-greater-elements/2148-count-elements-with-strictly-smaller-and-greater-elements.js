/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    
    //test case not enough nums 
    if(nums.length < 3) {
        return 0
    }

    //sort nums in acesnding order
    nums.sort((a,b) => a -b)

    let count = 0
    //loop through all nums between the min and max number
    for (let i = 1; i < nums.length - 1; i++) {
        //if number is greater then the min and less than the max add to count
        if (nums[i] > nums[0] && nums[i] < nums[nums.length - 1]) {
            count += 1
        }
    }

    return count

};