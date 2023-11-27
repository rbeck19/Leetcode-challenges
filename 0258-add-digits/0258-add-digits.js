/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {

    while(num > 9) {
        let arr = num.toString().split("") //split number
        num = 0 // set the new number
        arr.map((number)=> { num += Number(number) }) // add the split numbers
    }
    return num //will be a single digit number
};