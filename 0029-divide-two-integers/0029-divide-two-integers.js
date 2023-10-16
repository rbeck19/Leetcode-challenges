/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

    let result = Math.trunc(dividend/divisor)

    if(result > -2147483647 && result > 2147483647){
        return 2147483647;
    }
    return result
};