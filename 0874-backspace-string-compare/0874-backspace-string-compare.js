/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    let newS = []
    let newT = []

    //loop through s if it is a # then delete the last letter
    for (let i = 0; i < s.length; i++){
        if(s[i] === "#") {
            newS.pop()
        } else{
            newS.push(s[i])
        }
    }

    for (let i = 0; i < t.length; i++){
        if(t[i] === "#") {
            newT.pop()
        } else{
            newT.push(t[i])
        }
    }

    return newS.join("") === newT.join("")
};