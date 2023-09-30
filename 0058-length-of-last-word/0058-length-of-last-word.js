/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    //split the array by spaces
    //filter the array to only hold itemes greater than 0 length
    let arr = s.split(" ").filter((word)=>word.length > 0)

    return arr[arr.length-1].length
  
};