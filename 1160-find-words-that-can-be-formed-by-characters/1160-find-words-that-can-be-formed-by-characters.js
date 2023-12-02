/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    


    // let ch = {};
    // let res = 0;
    // for (const c of chars) { //hashmap od character count
    //     ch[c] = 1 + (ch[c] || 0);
    // }
   

    // for (const word of words) {
    //     const copy = { ...ch };

    //     for (const w of word) {
    //         if (w in copy && copy[w] != 0) {
    //             copy[w] -= 1;
    //         }
    //         else {
    //             res -= word.length;

    //             break;
    //         }
    //     }
    //     res += word.length;
    // };
    // return res;




    let hashmap = {}
    let result = 0

    for (let i = 0; i < chars.length; i++) {
        if (!hashmap[chars[i]]) {
            hashmap[chars[i]] = 1
        } else {
            hashmap[chars[i]] += 1
        }
    }

    // console.log(hashmap)

    for(let i = 0; i < words.length; i++) {
        const temp = {...hashmap}
        //console.log(hashmap)
        //console.log("looking at:", words[i])
        for(let j = 0; j< words[i].length; j++) {
            if(!temp[words[i][j]]) {
                //console.log("BAD WORD", words[i][j], temp[words[i][j]])
                break //break out of this word
            }
            else if( temp[words[i][j]] > 0 && j === words[i].length -1) {
                result += words[i].length
            } else{
                temp[words[i][j]] = temp[words[i][j]] - 1
            } 
        }
    }
    //console.log( result )
    return result

};