/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    
    let hashmap = {}
    let result = 0

    for (let i = 0; i < chars.length; i++) {
        if (!hashmap[chars[i]]) {
            hashmap[chars[i]] = 1
        } else {
            hashmap[chars[i]] += 1
        }
    }

    for(let i = 0; i < words.length; i++) {
        const temp = {...hashmap} //make a temp copy of hashmap

        for(let j = 0; j< words[i].length; j++) {
            if(!temp[words[i][j]]  || temp[words[i][j]] === 0) { //no letter in temp
                break //break out of this word
            }
            else if( temp[words[i][j]] > 0 && j === words[i].length -1) { //last letter in word and has a count
                result += words[i].length  //add word length to result
            } else{
                temp[words[i][j]] = temp[words[i][j]] - 1 // take away one letter count from temp
            } 
        }
    }
    return result

};