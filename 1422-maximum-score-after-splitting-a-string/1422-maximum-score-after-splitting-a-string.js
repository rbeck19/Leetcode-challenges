/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    
    let ones = 0
    
    
    //track how many ones
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "1") {
            ones += 1
        }
    }
    //track the score and keep the highest
    let score = ones
    let highest = 0
    
    for(let i = 0; i <s.length - 1; i++) {
        
        //add and take away based on 1 and 0
        if(s[i] === "0") { 
            score += 1
        }else {
            score -= 1
        }

        if(score > highest) { // compare score to highest 
            highest = score
        }
    }
    
    return highest
    
};