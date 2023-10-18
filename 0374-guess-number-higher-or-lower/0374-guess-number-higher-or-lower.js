/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    
    let num = Math.floor(n / 2)
    let min = 1
    let max = n
    console.log(num)
    while(true){
        let check = guess(num)
        console.log(check, num)
        if (check === -1) {
            max = num - 1
            num = Math.floor((max + min) / 2)
            //num--
        } else if (check === 1){
            min = num + 1
            num = Math.floor((max + min) / 2)
            //num++
        } else {
            break
        }
    }

    return num

};