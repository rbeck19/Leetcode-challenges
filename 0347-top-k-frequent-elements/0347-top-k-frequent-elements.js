/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hashmap = {}
    //create a hashmap
    for(let i = 0; i < nums.length; i++) {
        if( hashmap[nums[i]] ) {
            hashmap[nums[i]] += 1
        } else {
            hashmap[nums[i]] = 1
        }
    }
    let result = Object.keys(hashmap).map((key) => [Number(key), hashmap[key]]);
    let sortedResult = result.sort((a,b) => {
        return b[1]-a[1]
    })

        let output = []
    for ( let i = 0; i < k; i++){
        output.push(sortedResult[i][0])
    }
    return output;
};