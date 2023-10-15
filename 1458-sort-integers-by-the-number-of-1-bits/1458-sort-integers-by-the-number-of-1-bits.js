/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    
    //sort the array in acending order
    arr = arr.sort((a,b)=>a-b)
    const hashmap = {}

    //function to get the number of 1's in binary code
    function countBits(n) {
        let count = 0
        while(n){
            count += n & 1
            n >>= 1
        }
        return count
    }

    //create a hashmap of:
    //Key: number of Bits
    //Value: number
    for(let num in arr) {
        let bitCount = countBits(arr[num])
        if(!hashmap[bitCount]) {
            hashmap[bitCount] = [arr[num]]
        } else {
            hashmap[bitCount].push(arr[num])
        }
    }

    let output = []
    //combine all array Values as one array
    for(let key in hashmap){
        output = output.concat(hashmap[key])
    }
    
    return output
};