/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    
    const hashmap = {}
    //loop through first arr and set up hashmap 
    for( let key in arr1) {
        //set key as ID containing the object
        hashmap[arr1[key].id] = arr1[key]
    }
    //loop through secong arr and add the Object if key does not exist otherwise overwite it
    for(let key in arr2){
        if(!hashmap[arr2[key].id]){
            hashmap[arr2[key].id] = arr2[key]
        } else { //only change key values that is in arr2
            //only replace key values that exisit in both
            for(let newKey in hashmap[arr2[key].id]) {
                if(arr2[key].hasOwnProperty(newKey)) {
                    hashmap[arr2[key].id][newKey] = arr2[key][newKey]
                }
            }
            //if arr2 has keys that were not in arr1 add them
            for(let newKey in arr2[key]) {
                if(!hashmap[arr2[key].id].hasOwnProperty(newKey)) {
                    console.log(newKey)
                    hashmap[arr2[key].id][newKey] = arr2[key][newKey]
                }
            }
        }
    }

    return Object.values(hashmap)




};