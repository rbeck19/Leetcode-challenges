/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    

    let n = cost.length
    let s1 = cost[0]
    let s2 = cost[1]

    for(let i = 2; i < n; i++) {
        let current = cost[i] + Math.min(s1,s2)
        console.log(current, s1, s2)
        s1 = s2
        s2 = current
    }

    return Math.min(s1,s2)

};