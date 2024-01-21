/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    //26 letters in the alphabet
    const hashmap = {}
    let count = 0
    for(let i = 0; i < sentence.length; i++) {
        if(!hashmap[sentence[i]]) {
            hashmap[sentence[i]] = 1
            count += 1
        }
        // if(Object.keys(hashmap).length === 26) {
        //     return true
        // }
        if(count === 26) {
            return true
        }
    }
    return false

};