/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    
    let matches = 0

    while(n > 1) {
        if(n % 2 === 0) {//even number
            n = n/2     //half the teams move on
            matches += n //n amount of matches occured
        } else { //odd number
            n = (n-1)/2     //half of even amount of teams move on
            matches += n    //half of even amount played
            n += 1      //add the odd number team 
        }
    }

    return matches

};