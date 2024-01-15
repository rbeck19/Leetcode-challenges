/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    
    const winnerCount = {}
    const loserCount = {}

    //set up object of winner count and loser count
    for(let i = 0; i < matches.length; i++) {
        if(!winnerCount[matches[i][0]]) {
            winnerCount[matches[i][0]] = 1
        } else {
            winnerCount[matches[i][0]] += 1
        }
        if(!loserCount[matches[i][1]]) {
            loserCount[matches[i][1]] = 1
        } else {
            loserCount[matches[i][1]] += 1
        }
    }

    const result = [[],[]]

    //push array of teams with no losses
    //loop through winnerCount and if they are not in the loserCount then they never lost
    for(let key in winnerCount) {
        if(!loserCount[key]) {
            result[0].push(key)
        }
    }
    //loop through loser count
    //push array of team with exactly 1 loss
    for(let key in loserCount) {
        if(loserCount[key] === 1) {
            result[1].push(key)
        }
    }

    return result
};