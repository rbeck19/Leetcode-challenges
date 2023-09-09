/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    

    let reverseString = x.toString().split("").reverse().join("")

    return x.toString() === reverseString

};