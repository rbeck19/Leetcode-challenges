/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    
    const hashmap = {}

    //create a Object containg how many times a number appears
    for(let i = 0; i < arr.length; i++) {
        if(!hashmap[arr[i]]) {
            hashmap[arr[i]] = 1
        } else {
            hashmap[arr[i]] += 1
        }
    }

    //get an array of all appearance values
    const values = Object.values(hashmap)
    //make an array without duplicate values
    const removeDup = [... new Set(values)]

    //comapre the length of both array
    //if the lenghts are the same then there were no duplicate values
    return values.length === removeDup.length ? true : false


};