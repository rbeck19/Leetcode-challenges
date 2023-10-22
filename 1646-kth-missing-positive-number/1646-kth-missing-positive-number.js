/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    
    let missing = 0  //track the number missing
    let count = 0   //track how many missing numbers
    let expected = 1 //the number to look for

    //loop through the array until you get to the k-th missing number in count
    for(let i = 0; count < k; i++) {
        //if arr[i] is not the expected number
        //add to count, missing number is the expected number
        //set i to repeat on the same element
        //if the missing k-th number is past the array length it will run by comparing expected to undefined until count hits the k-th element
        if(arr[i] != expected) {
            count += 1
            missing = expected
            i = i -1
        }
        expected += 1  //adjust the next expected number
    }

    return missing
};