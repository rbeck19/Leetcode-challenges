/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {

    //check if palidrome
    const checkPal = (str) => {
        let left = 0
        let right = str.length - 1
        //loop through str to compare left to right
        while(left < right) {
            if( str[left] !== str[right] ){
                return false
            }
            left += 1
            right -= 1
        }
        return true
    }

    //count will always have the value of the length of the string
    let count = s.length

    //loop through s 
    for(let i = 0; i < s.length; i++) {
        //checking s[i] then move on with the rest with s[j]
        for(let j = i+1; j <s.length; j++) {
            //pass substring from i to j and check if palidrome
            if( checkPal(s.slice(i,j+1)) ) {
                count +=1
            }
        }
    }

    return count

};