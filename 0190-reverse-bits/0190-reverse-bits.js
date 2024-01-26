/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {

    let result = 0

    
    //itterate through each bit of the integer and shift the result to the left and adding the least significant bit of the input
    for (let i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n >>>= 1; // Unsigned right shift
    }

    return result >>> 0
}