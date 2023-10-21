/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    

    let string = nums.join("")
    console.log(string)
    return [...string + ""].map(n=> + n)

    const seperation = []

    for(let i = 0; i < nums.length; i++) {
        let numSplit = [...nums[i] + ""].map(n=> + n)
        numSplit.forEach((element) => seperation.push(element))
    }

    return seperation

};