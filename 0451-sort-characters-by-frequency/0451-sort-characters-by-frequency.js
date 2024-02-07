/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const char = {}

    //fill up char with the key:letter and value:frequesncy
    for(let i = 0; i <s.length; i++) {
        !char[s[i]]  ?  char[s[i]] = 1 :  char[s[i]] += 1    
    }

    //sort the characters in decreasing order of frequency
    let sorted = Object.keys(char).sort((a,b)=> char[b] - char[a])

    let result = ""

    //loop through sorted and add it to result by how many times it occurs
    for(let c of sorted) {
        //add the letter of 3 repeated by the value amount
        result += c.repeat(char[c])
    }

    return result
};