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
    console.log(sortDup)
    console.log(sort)
    console.log(longest)

    return longest
};