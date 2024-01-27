/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    //can only swap while j-i = 2
    // [0] and [2]
    // [1] and [3]

    let [first, second, third, fourth] = [...s1] //split array for checking

    if(first + second + third + fourth === s2) { //check original
        return true
    } else if (third + second + first + fourth === s2){ //check with [0][2] swap
        return true
    } else if(first + fourth + third + second === s2) { //check with [1][3] swap
        return true
    } else if(third + fourth + first + second === s2) { //check with [0][2] and [1][3] swap
        return true
    } else {
        return false
    }


};