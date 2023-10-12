/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
  
  //split the string at non characters, reverse the the order and re-join
  let string = s.split(/[^A-Za-z]+/g).join("").split("").reverse().join("")
  let newS = ""
  let patern = /[A-Za-z]/
  //loop through s, if [i] is a Char add the new reversed Char to newS and add the counter
  //else add the nonChar to the newS
  let counter = 0
  for(let i = 0; i < s.length; i ++) {
    if(patern.test(s[i])){
     newS += string[counter]
     counter++
    } else {
      newS += s[i]
    }
  }
  return newS
};