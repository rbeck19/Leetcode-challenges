/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    
    let output = ""

    //check each element of the string
    //If G add G to the string
    //Else If its ( and the next element is ) add o and skip the next element
    //Else its (al) add al and skip 3
    for(let i = 0; i < command.length; i++) {
        if(command[i] === "G") {
            output += "G"
        } else if(command[i] === "(" && command[i+1] === ")") {
            output += "o"
            i += 1
        } else {
            output += "al"
            i += 3
        }
    }
    return output
};