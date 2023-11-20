/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    
    let value = 0

    for (let i = 0; i < strs.length; i++) {
        console.log(isNaN(strs[i]))
        if(isNaN(strs[i])) { //true, its not a number
            if(strs[i].length > value) {
                value = strs[i].length
            }
        } else { //false its a number
             if (Number(strs[i]) > value) {
                 value = Number(strs[i])
             }
        }
    }

    return value

};