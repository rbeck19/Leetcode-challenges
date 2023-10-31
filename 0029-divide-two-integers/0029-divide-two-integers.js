/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

    //test case
    if(divisor === 0) return 0
    if(divisor === 1) return Math.min(2147483647, dividend)
    if(divisor === -1 && dividend > 1) return Math.max(-2147483648, -dividend)
    if(divisor === -1 && dividend < 1) return Math.min(2147483647, Math.abs(dividend))


    // let result = Math.trunc(dividend/divisor)
    let dividentPos
    let divisorPos

    let result = 0

    //track positive status of divident
    if(dividend < 0) {
        dividentPos = false
        dividend = Math.abs(dividend)
    } else {
        dividentPos = true
    }
    //track positive status of divisor
    if(divisor < 0) {
        divisorPos = false
        divisor = Math.abs(divisor)
    } else {
        divisorPos = true
    }

    while(dividend >= divisor) {
        dividend -= divisor
        result++
    }

    //check if number is to be positive or negative
    if( (dividentPos === true && divisorPos === true) || (dividentPos === false && divisorPos === false) ) {
         //return result
    }else {
        //return -Math.abs(result)
        result = -Math.abs(result)
    }

    if(result > 2147483647) {
        return 2147483647
    } else if (result < -2147483648) {
        return -2147483648
    } else {
        return result
    }

   
};