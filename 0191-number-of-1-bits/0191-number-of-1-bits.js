/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    
    let result = 0
    //the math behind seeing if the binary is 0 or 1
    while(n >0){
        if(n % 2 === 1) {
            result += 1
        }
        n = Math.floor(n/2) 
    }

   return result

};