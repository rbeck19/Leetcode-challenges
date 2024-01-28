/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    
    
    //sort nums
    nums.sort((a,b)=> a-b)
    //store the arr
    const arr = []
    
   //loop through nums and add them to arr based on the game rules
    for(let i =0; i < nums.length; i += 2){//increase by 2
        arr.push(nums[i+1])
        arr.push(nums[i])
    }
    return arr
};