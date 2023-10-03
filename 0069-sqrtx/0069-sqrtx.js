/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

let mid = x / 2

if(x == 1) {
    return x
}
if(mid * mid == x) {
    return mid
}

for (let i = 1; i <= mid; i++) {
    if(i * i < x && (i+1)*(i+1) > x) {
        return i
    } else if ( i * i == x) {
        return i
    }
}

};