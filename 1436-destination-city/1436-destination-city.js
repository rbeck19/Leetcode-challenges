/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    

    const hashmap = {}
    
    for(let i = 0; i < paths.length; i++) {
        if(!hashmap[paths[i][0]]) { // look at starting point
            hashmap[paths[i][0]] = 1
        } else {
            hashmap[paths[i][0]] += 1
        }
        if(!hashmap[paths[i][1]]) {  //look at destination
            hashmap[paths[i][1]] = 0
        } else {
            hashmap[paths[i][1]] += 1
        }
    }

    for(const key in hashmap) {
        if(hashmap[key] === 0) { //the key value pair that is 0 is the last stop
            return key
        }
    }
    
};