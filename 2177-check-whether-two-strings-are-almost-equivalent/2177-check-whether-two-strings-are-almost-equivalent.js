/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    const hashmap1 = {}
    const hashmap2 = {}

    for (let i = 0; i < word1.length; i++) {
        if(hashmap1.hasOwnProperty(word1[i])) {
            hashmap1[ word1[i] ] += 1
        } else {
            hashmap1[ word1[i] ] = 1 
        }
    }

    for (let i = 0; i < word2.length; i++) {
        if(hashmap2.hasOwnProperty(word2[i])) {
            hashmap2[ word2[i] ] += 1
        } else {
            hashmap2[ word2[i] ] = 1 
        }
    }

    console.log(hashmap1)
    console.log(hashmap2)

    
    //loop through hashmap 1
    for (let key in hashmap1) {
        if(hashmap2.hasOwnProperty(key) && Math.abs(hashmap1[key] - hashmap2[key]) > 3) {
            return false
        } 
        if (!hashmap2.hasOwnProperty(key) && hashmap1[key] > 3) {
            return false
        }
    }

    for (let key in hashmap2) {
        if(hashmap1.hasOwnProperty(key) && Math.abs(hashmap1[key] - hashmap2[key]) > 3) {
            return false
        } 
        if (!hashmap1.hasOwnProperty(key) && hashmap2[key] > 3) {
            return false
        }
    }

    return true

};