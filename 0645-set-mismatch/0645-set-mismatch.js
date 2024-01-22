/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    
    //sort in increasing order
    nums = nums.sort((a,b)=>a-b)
    //from 1-n check what number we should see
    let expected = 1
    //hold the output of doubled number, missing number
    const res = [0,0]
    
    for(let i = 0; i < nums.length; i++) {
        //if current num is not the expcted, thats the missing number
        if(nums[i] != expected && res[1] === 0) {
            res[1] = expected
        }
        //if current and the next are the same, thats the duplicate
        //increase i to skip over the duplicate
        if(nums[i] === nums[i+1]) {
            res[0] = nums[i]
            i+=1
        }
        //every run increase what the next number should be
        expected += 1
    }
    //nums is missing the very last number
    if(res[1] === 0) {
        res[1] = nums[nums.length - 1] + 1
    }

    return res

};