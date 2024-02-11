/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    //set uglyN of length n
    let uglyN = new Array(n)

    uglyN[0] = 1

    let pf2 = 0
    let pf3 = 0
    let pf5 = 0

    for(let i = 1; i < n; i++) {
        //check uglyN[0] {1} * 2,3,5
        //increse to uglyN[1] {2} * 2,3,5
        uglyN[i] = Math.min(uglyN[pf2] * 2, uglyN[pf3] * 3, uglyN[pf5] * 5)
        //if min is found increase to the next uglyN[pf]
        if (uglyN[i] === uglyN[pf2] * 2) pf2++;
        if (uglyN[i] === uglyN[pf3] * 3) pf3++;
        if (uglyN[i] === uglyN[pf5] * 5) pf5++;
    }
    //return last element in uglyN
    return uglyN[n-1]
};