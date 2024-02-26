/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    
    let count = 0

    //loop through the array
    //slice the string extracting the age, convert the age to a number and check if its over 60
    for(let i = 0; i < details.length; i++) {
        if( Number(details[i].slice(11,13)) > 60) {
            count += 1
        }
    }

    return count
};