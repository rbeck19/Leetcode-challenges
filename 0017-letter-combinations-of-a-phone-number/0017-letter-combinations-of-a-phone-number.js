/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    if(digits.length < 1) return []

    let result = [] //end result

    const keyboard = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }

   //dfs recursive helper
   const dfs = (i,digits, slate) => {
       //base case
       if(i === digits.length){
           result.push(slate.join(""))
           return
       }
       //dfs recursive case
       let number = keyboard[digits[i]]
        //letter of number
       for(let char of number) {
           slate.push(char)
           dfs(i+1, digits, slate)
           slate.pop()
       }
   }

    //call the helper function
    // i, digits, slate
    dfs(0, digits, [])
 
    return result
};