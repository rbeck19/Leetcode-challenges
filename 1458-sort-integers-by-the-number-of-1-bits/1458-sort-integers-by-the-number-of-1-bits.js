/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    
    arr = arr.sort((a,b)=>a-b)
    const hashmap = {}

    //get the number of 1's in binary code
    function countBits(n) {
        let count = 0
        while(n){
            count += n & 1
            n >>= 1
        }
        return count
    }

    for(let num in arr) {
        let bitCount = countBits(arr[num])
        //console.log(arr[num], bitCount)
        if(!hashmap[bitCount]) {
            hashmap[bitCount] = [arr[num]]
        } else {
            hashmap[bitCount].push(arr[num])
        }
    }

    //console.log(hashmap)

    let output = []

    for(let key in hashmap){
        //console.log(hashmap[key])
        output = output.concat(hashmap[key])
        //console.log(output)
    }
    

    return output
};