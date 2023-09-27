/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    const hashmap = {}
    let output 

    //create a hashmap with key as the element and value as number needed for target and the index + 1 location
    //if key already exsist and the number needed for the target is same number return the exisiting key index and current index
    for(let i = 0; i <numbers.length; i++) {
        if(!hashmap[numbers[i]]) {
            hashmap[numbers[i]] = [target - numbers[i], i + 1]
        } else if(hashmap[numbers[i]] && hashmap[numbers[i]][0] == numbers[i]) {
            output = [ hashmap[numbers[i]][1], i + 1 ]
            console.log("from the first for")
            return output.sort((a,b)=>a-b)
        }
    }

    //loop through the hashmap, if the hashmap contains the value needed to reach the target mmake array = the index locations
    for(const key in hashmap) {
        if(hashmap[ hashmap[key][0] ]) {
            output = [ hashmap[key][1], hashmap[ hashmap[key][0] ][1] ]
        }
    }

    return output.sort((a,b)=>a-b)

};