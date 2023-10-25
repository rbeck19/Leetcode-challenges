/**
 * @param {number} n
 * @return {number}
 */
var distinctIntegers = function(n) {
    
    //based on the calculations any number greater than 1 will have n-1 numbers
    //if n = 1 return 1 otherwise return n-1
    return n === 1 ? 1 : n-1

};