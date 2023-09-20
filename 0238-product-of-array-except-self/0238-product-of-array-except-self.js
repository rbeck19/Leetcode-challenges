/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    // double loop
    // let output = []
    // for(let i = 0; i < nums.length; i++) {
    //     let sum = 1
    //     for(let j = 0; j < nums.length; j++){
    //         if(j == i) {
    //             continue
    //         }
    //         sum *= nums[j]
    //     }
    //     output.push(sum)
    // }
    // return output


    //if array is only 0's return the aray back
    if ( [...new Set(nums)] == 0 ) {
        return nums
    }

    // declare toggle for array containing zero
    let hasZero = 0
    let total = 1

    //get the total of the array without any zero numbers
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] == 0){
            hasZero++
            continue
        }
        total *= nums[i]
    }

    let output = []

    if(hasZero > 1) {
        for(let i = 0; i < nums.length; i++) {
            output.push(0)
        }
        return output
    }

   
    for (let i = 0; i < nums.length; i++) {
        if(hasZero == 1 && nums[i] != 0) {
            output.push(0)
        } else if (hasZero == 1 && nums[i] == 0){
            output.push(total)
        } else {
            output.push(total / nums[i])
        }
    }

    return output
};