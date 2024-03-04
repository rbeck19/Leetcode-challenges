/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    
    //sort tokens in inceasing order
    tokens.sort((a,b) => a-b)
    
    let start = 0
    let end = tokens.length-1
    let score = 0
    let maxScore = 0

    //loop untill you have checked all tokens or it case of no power/score to play
    while(start <= end) {
        if(tokens[start] <= power) {//have the power to play the token
            power -= tokens[start] //remove token from power
            score += 1 //increase score
            start += 1 //move up in the token list
        } else if(score > 0) { //not enough power to play token, if you have score points play the last card
            power += tokens[end]
            score -= 1
            end -= 1
        } else {
            break  //not enough power or score to play tokens
        }
        maxScore = Math.max(score, maxScore) //track the max score
    }

    return maxScore

};