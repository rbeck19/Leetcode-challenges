/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    
    let prod = 1
    let sum  = 0

    //split n into an array. map each element and do the math for prod and sum
    String(n).split("").map((num) => prod = (prod * Number(num)))
    String(n).split("").map((num) => sum = (sum + Number(num)))

    return prod - sum
};