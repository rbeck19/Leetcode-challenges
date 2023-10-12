/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    
  let string = s.split(/[^A-Za-z]+/g).join("").split("").reverse().join("")

  let newS = ""

  console.log(string)

  let patern = /[A-Za-z]/


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