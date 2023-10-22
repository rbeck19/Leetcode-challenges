/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    
    let missing = 0
    let count = 0
    let expected = 1

    for(let i = 0; count < k; i++) {

        if(arr[i] != expected) {
            count += 1
            missing = expected
            //expected += 1
            i = i -1
        }
        expected += 1
    }

    return missing

};