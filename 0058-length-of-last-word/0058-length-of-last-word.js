/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let arr = s.split(" ").filter((word)=>word.length > 0)

    return arr[arr.length-1].length
  
};