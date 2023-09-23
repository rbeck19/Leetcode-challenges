/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //32 bit min and max int value 
    let min = -2147483648
    let max = 2147483648
    //IF x is less tham Zero 0
    //make negative number positve 
    //convert x to a string, split the string to an array reverse the array and join it
    //add negative sign back onto string
    //ELSE turn into string split it into array reverse the array and join 
    if(x < 0) {
        //make x positve
        x *= -1
        x = x.toString().split("").reverse().join("")
        x = "-" + x
    } else {
        x = x.toString().split("").reverse().join("")
    }
    //Ternary, if number is less than min or greater than max return 0 else return the reversed num
    return Number(x) < min || Number(x) > max ? 0 : x
};