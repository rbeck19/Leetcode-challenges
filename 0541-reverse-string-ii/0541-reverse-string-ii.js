/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    
    //split the string into segments of length k
    const arr = []
    for (let i = 0; i < s.length; i+= k) {
        arr.push(s.substring(i, i + k));
    }

    //loop through the arr reverse the every other segment of k
    for( let i = 0; i < arr.length; i += 2) {
        arr[i] = arr[i].split('').reverse().join('')
    }

    return arr.join('')

};