/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    
    let result = 0

    while(x > 0 || y > 0) {
        const right1 = x % 2
        const right2 = y % 2

        if(right1 != right2) {
            result +=1
        }
        x = Math.floor(x/2)
        y = Math.floor(y/2)
    }

    return result

};