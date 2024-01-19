/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    
    let count = 0

    for(let i = 1; i <= num; i++) {
        // Convert the number to a string
        // Split the string into an array of digits
        const digits = i.toString().split('');
        // Add the digits together
        const sum = digits.reduce((a, b) => parseInt(a) + parseInt(b), 0);
        //if the sum of digits even add to count
        if(sum % 2 === 0) {
            count += 1
        }
    }
    return count
};