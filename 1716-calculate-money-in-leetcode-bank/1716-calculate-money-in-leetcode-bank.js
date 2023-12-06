/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let monday = 0
    let count = 0
    let bank = 0

    for(let i = 1; i <= n; i++) {
        if(count === 0) { //its Monday 
            monday += 1
            bank += monday 
        } else {
            bank += monday + count
        }
        count = count >= 6 ? 0 : count + 1  //Reset count to monday or move to next day
    }
    return bank
};