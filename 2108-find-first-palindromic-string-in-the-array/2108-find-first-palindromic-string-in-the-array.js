/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    
    //helper function to check palindromic
    const palindromic = (str) => {
        let start = 0
        let end = str.length - 1

        //check start and end to be equal
        //if not equal end the loop and return false
        while(start < end) {
            if(str[start] !== str[end]) {
                return false
            }
            start += 1
            end -= 1
        }
        return true
    }
    
    //loop through each element of words and pass it to helper function
    for(let i = 0; i < words.length; i++) {
        if(palindromic(words[i])) {
            return words[i]
        }
    }
    //if a return doesnt occur in above loop, there is no palindromic. Return emtpy string
    return ""

};