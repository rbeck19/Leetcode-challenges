/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    
    //split into array of words
    const words = sentence.split(" ")

    //test case if only 1 word
    if(words.length === 1) {
        //check first and last 
        if(words[0][0] === words[0][words[0].length-1]) {
            return true
        } else{
            return false
        }
    }

    //compare first character of first word and last character of last word
    if(words[0][0] !=  words[words.length-1][words[words.length-1].length-1]){
        return false
    }
   
    //get the last letter of the first word
    let compare = words[0][words[0].length - 1]
    //loop through words array
    for(let i = 1; i < words.length; i++) { //start at second word
        if(words[i][0] === compare) { //if first letter matches compare move on
            compare = words[i][words[i].length - 1]
        } else { // first and previous last dont match False
            return false
        }
    }
    //made it through the loop, it all matches
    return true

};