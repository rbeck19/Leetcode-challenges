/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    //remove any and all that do not include  a-z A-Z 0-9 space and replace with nothing
    //change characters to lower case
    let noSpecialChars = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    //reverse the string
    //let reversed = noSpecialChars.split("").reverse().join("")

    return noSpecialChars == noSpecialChars.split("").reverse().join("")
};