/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    // create a an array of strs where each word is sorted aplhibeticaly
    const sortedStrs = strs.map( word => word.split("").sort().join("") )     
    //set the hashmap object   
    const hashmap = {}

    //loop through the sortedString array
    //IF hashmap[sortedStrs]  does not exist set it with the value of the original word using the index
    for(let i = 0; i < strs.length; i++) {
        if(!hashmap[sortedStrs[i]]) {
            hashmap[sortedStrs[i]] = [strs[i]]
        } else {
            hashmap[sortedStrs[i]].push(strs[i])
        }
    }

    //return the values of all keys in the hashmap
    return Object.values(hashmap)
};