/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    
    output = []

    for(let i = 0; i < nums.length; i++) {
        //looking at nums[i]
  
        let suffix = {}
        let prefix = {}

        //check all element at i and before 
        for(let p = 0; p <= i; p++) {
            //if no number in object add it otherwise ignore
            if(!prefix[nums[p]]) {
                prefix[nums[p]] = 1
            }
        }

        //after check Suffix
        for(let s = i + 1; s < nums.length; s++) {
            //if no number in object add it otherwise ignore
            if(!suffix[nums[s]]) {
                suffix[nums[s]] = 1
            }
        }

        output.push(Object.keys(prefix).length - Object.keys(suffix).length)
        
    }

    return output

};