/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  //   //split the string into an array of single characters
  //   //run a loop to check that every 2 characters contains the same open and close bracket

  //   let output = true
  //   let sArray = s.split("")

  //   //if array is an odd number return false, missing a braket
  //   if (sArray.length % 2 == 1 ) {
  //     return false
  //   }

  //   console.log(sArray)

  //   //loop through array
  //   //check that each pair of stings is the same open and close braket
  //   //if not break the loop and return false
  //   for (let i = 0; i < sArray.length; i+= 2) {
  //     if(sArray[i] === "(" && sArray[i+1] === ")" ) {
  //       continue
  //     } else if (sArray[i] === "[" && sArray[i+1] === "]" ) {
  //       continue
  //     } else if (sArray[i] === "{" && sArray[i+1] === "}") {
  //       continue
  //     } else {
  //       output = false
  //       break
  //     }
  //   }

  // return output

  // ------------

  // let output = true
  // const count = {}
  // let sArray = s.split("")

  // sArray.forEach(element => {
  //   count[element] = (count[element] || 0) + 1
  // })

  // if (count["("] === count[")"] && count["["] === count["]"] && count["{"] === count["}"]) {
  //   return true
  // } else {
  //   return false
  // }


  //if length of the string is odd missing a bracket auto false
  if(s.length % 2 === 1) {
    return false
  }

  const hashMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];

  //loop through each character of the string
  for (let ch of s) {
    if (hashMap[ch]) {
      //ch is an opening bracket
      //add value of the key.  add the cllosing bracket to the stack
      stack.push(hashMap[ch]);
    } else if (stack.length > 0 && stack[stack.length - 1] === ch) {
      //ch is a closing bracket and top of the stack matches
      //remove the closing braket
      stack.pop();
    } else {
      //ch is a closing brakcet and top of the stack doesnt match
      return false
    }
    console.log(stack)
  }

  //return true is there are no left over brackets in the stack
  return stack.length === 0;
};
