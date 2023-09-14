/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    //if lengths dont match return false
    if (s.length != t.length) {
        return false
    }

    let hashmapS = {}
    let hashmapT = {}
    //create hashmap of S
    for(let i = 0; i < s.length; i++) {
        if(hashmapS[s[i]]) {
            hashmapS[s[i]] += 1
        } else {
            hashmapS[s[i]] = 1
        }
    }
   // //create hashmap of T
    for(let i = 0; i < t.length; i++) {
        if(hashmapT[t[i]]) {
            hashmapT[t[i]] += 1
        } else {
            hashmapT[t[i]] = 1
        }
    }
    //compare both hashmaps
    //if second hashmap has the key and their values are the same continue to the next key
    //else return false
    for (const key in hashmapS) {
        if(hashmapT.hasOwnProperty(key) && hashmapS[key] == hashmapT[key]){
            continue
        } else {
            return false
        }
    }
    return true
};