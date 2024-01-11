/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    
    //track the item value and weight  items1[i][0] : itemm1[i][1]
    const hashmap = {}

    //adjust the the key value pair for items1
    for(let i = 0; i < items1.length; i++) {
        if(!hashmap[items1[i][0]]) {
            hashmap[items1[i][0]] = items1[i][1]
        } else {
            hashmap[items1[i][0]] += items1[i][1]
        }
    }
    //adjust the the key value pair for items2
    for(let i = 0; i < items2.length; i++) {
        if(!hashmap[items2[i][0]]) {
            hashmap[items2[i][0]] = items2[i][1]
        } else {
            hashmap[items2[i][0]] += items2[i][1]
        }
    }

    //map throught the hashmap and create an array of arrays with the [[key, value]]
    const output = Object.keys(hashmap).map(key => [Number(key), hashmap[key]])
    return output
};