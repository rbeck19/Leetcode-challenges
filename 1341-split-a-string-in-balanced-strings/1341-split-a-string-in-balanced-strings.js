/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    
    let tracker = 0
    let count = 0

    for (let i = 0; i < s.length; i++) {
        if(s[i] === "R") {
            tracker -= 1
        } else {
            tracker += 1
        }
        if (tracker === 0){
            count += 1
        }
    }

return count
};