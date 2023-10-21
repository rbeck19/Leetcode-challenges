/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    

    const seperation = []

    for(let i = 0; i < nums.length; i++) {
        let numSplit = [...nums[i] + ""].map(n=> + n)
        numSplit.forEach((element) => seperation.push(element))
    }

    return seperation

};