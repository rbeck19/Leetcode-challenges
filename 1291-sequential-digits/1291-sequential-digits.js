/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const res = []
    let s = '123456789'
    let minLen = low.toString().length
    let maxLen = high.toString().length
   
    for (let size = minLen; size <= maxLen; size++) {
        for (let i = 0; i + size <= 9; i++) {
            const num = Number(s.substring(i, i + size));
            if (low <= num && num <= high) {
                res.push(num);
            }
        }
    }
    res.sort((a, b) => a - b);
    return res;


};