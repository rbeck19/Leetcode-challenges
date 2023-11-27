/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    let max = Math.max(...candies) //gets the max number of array
    const result = []
    //loop through candies and compare if given the extra will it be greater or equal to the max
    for(let i = 0; i < candies.length; i++) {
        if(candies[i] + extraCandies >= max) {
            result.push(true)
        } else {
            result.push(false)
        }
    }
    return result
};