/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    
    const hashmap = {}
    let result = [0,0]

    //create a hashmap
    for(let i = 0; i < arr.length; i++) {
        if(!hashmap[arr[i]]) {
            hashmap[arr[i]] = 1
        } else {
            hashmap[arr[i]] += 1
        }
    }

    //obtain the key with the largest value
    for(const key in hashmap) {
        console.log(key, hashmap[key])
        if(hashmap[key] > result[1]) {
            result[0] = key
            result[1] = hashmap[key]
        }
    }

    return result[0]

};