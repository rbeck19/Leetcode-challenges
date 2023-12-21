/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    
    let count = 0

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i-1]) {
            if (nums[i] <= nums[i-2]) nums[i] = nums[i-1]
            count ++
        }
    }

    return count <= 1



    // const sort = (nums,removed) => {
    //     console.log(nums, removed)
    //     if(removed > 1) {
    //         return false
    //     }

    //     for( let i = 0; i < nums.length -1; i++) {
    //         if(nums[i] >= nums[i+1]) {
    //             removed += 1
    //             nums.splice(i,1)
    //             sort(nums,removed)
    //             console.log('removed')
    //             console.log(removed)
    //             break
    //         }
    //         if(i = nums.length -1) {
    //             return true
    //         }
    //     }
    // }

    // let removed = 0
    // let awnser = sort(nums,removed)
    // console.log(awnser)


   // let removed = 0
    
   // for(let i = 0; i < nums.length - 1; i++) {
   //     if(nums[i] > nums[i+1]){
   //         removed += 1
  //      }
  //  }
    
    //console.log(removed)
    //return removed > 1 ? false : true
    
    
};