/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    //sort nums
    nums.sort((a,b)=>a-b)
    
    result = []

    //loop through nums checking intervals of 3
    for(let i = 0; i < nums.length; i+= 3) {
        //since the arrays are sorted check the first and the thrid element difference
        if(nums[i+2] - nums[i] <= k){
            result.push([nums[i],nums[i+1],nums[i+2]])
        } else{
            return []
        }
    }
    return result

            //check all size differences
        // let diff1 = nums[i+1] - nums[i] //[1]-[0]
        // let diff2 = nums[i+2] - nums[i+1] //[2]-[1]
        // let diff3 = nums[i+2] - nums[i] //[2]-[0]
            //if all diff are <= k push to result
        // if( diff1 <= k && diff2 <= k && diff3 <=k) {
        //     result.push([nums[i],nums[i+1],nums[i+2]])
        // } else return []
};