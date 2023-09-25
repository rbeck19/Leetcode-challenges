/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    //sort array in ascending order
    const sortDup = nums.sort(function (a, b) { return a - b })
    //remove duplicates from array
    const sort = [...new Set(sortDup)]

    let longest = 0
    let counter = 1
    
    //loop through sorted array without duplicates
    //IF current index and the next are consecutive add counter
    //ELSE reset counter
    //IF counter is greater or equal to longest set longest to counter
    for(let i = 0; i < sort.length; i++) {
        if(sort[i] + 1 == sort[i + 1]) {
            counter++
        }else {
            counter = 1
        }
        if(counter >= longest) {
            longest = counter
        }
    }

    return longest
};