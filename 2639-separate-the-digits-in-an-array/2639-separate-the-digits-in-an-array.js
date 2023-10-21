/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    
    //join the entire array into one number
    let string = nums.join("")
    //spread the number and convert the elements from strings back into integers
    return [...string + ""].map(n=> + n)


    //set aside a output array
    const seperation = []
    //loop though each number and split it and add it to the array
    for(let i = 0; i < nums.length; i++) {
        let numSplit = [...nums[i] + ""].map(n=> + n)
        numSplit.forEach((element) => seperation.push(element))
    }
    return seperation
};