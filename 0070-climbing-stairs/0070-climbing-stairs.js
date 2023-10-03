/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    // if n is 1 only one way to climb
    if(n === 1) { return 1 }

    const dp  = new Array(n + 1)

    // Initialize base cases:
    dp[1] = 1; // For 1 step, there's 1 way.
    dp[2] = 2; // For 2 steps, there are 2 ways (1 + 1 or 2).


    // Fill the dp array for the remaining steps using dynamic programming:
    for (let i = 3; i <= n; i++) {
        // The number of ways for step i is the sum of ways for step (i - 1) and step (i - 2).
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n]

};