/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {


    if (s.length != t.length) {
        return false
    }



    let hashmapS = {}
    let hashmapT = {}

    for(let i = 0; i < s.length; i++) {
        if(hashmapS[s[i]]) {
            hashmapS[s[i]] += 1
        } else {
            hashmapS[s[i]] = 1
        }
    }
   
    for(let i = 0; i < t.length; i++) {
        if(hashmapT[t[i]]) {
            hashmapT[t[i]] += 1
        } else {
            hashmapT[t[i]] = 1
        }
    }

    for (const key in hashmapS) {
        //console.log(`${key}: ${hashmapS[key]}`);
        //console.log(hashmapS[key])
        if(hashmapT.hasOwnProperty(key) && hashmapS[key] == hashmapT[key]){
            continue
        } else {
            return false
        }
    }

    return true

};