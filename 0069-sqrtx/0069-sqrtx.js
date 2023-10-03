/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {


//test case if x is 1 return 1
if(x == 1) {
    return x
}

if((x/2) * (x/2) == x) {
    return x/2
}
for (let i = 1; i <= x/2; i++) {
    if(i * i < x && (i+1)*(i+1) > x) {
        return i
    } else if ( i * i == x) {
        return i
    }
}
};