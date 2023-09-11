/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //if no imput return ""
    if(strs.length === 0) {
        return ""
    }
    //if only one word return the word
    if(strs.length === 1) {
        return strs[0]
    }

    prefix = strs[0]

    //compare the string to the first and work backwords
    for(let i = 1; i < strs.length; i++) {
        while(strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1)
        }
    }
    return prefix

};