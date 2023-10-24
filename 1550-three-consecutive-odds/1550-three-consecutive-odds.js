/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    count = 0
    for(let i = 0; i < arr.length; i++) {
        if(count === 3) {
            return true //we got 3 consecutive
        }
        if(arr[i] % 2 != 0) {
            count += 1 //its a odd number add top count
        } else {
            count = 0 //reset count
        }
    }
    //if lsat odd number ends at end of array check count 
    return count === 3 ? true : false
};