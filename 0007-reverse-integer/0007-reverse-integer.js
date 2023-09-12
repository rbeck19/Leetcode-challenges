/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let min = -2147483648
    let max = 2147483648
    if(x.length > 31) {
        return 0
    }
    if(x < 0) {
        //make x positve
        x *= -1
        x = x.toString().split("").reverse().join("")
        x = "-" + x
    } else {
        x = x.toString().split("").reverse().join("")
    }
    return Number(x) < min || Number(x) > max ? 0 : x
};