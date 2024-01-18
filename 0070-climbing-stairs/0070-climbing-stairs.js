/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    

    //the previous 2 stair climbs add up to the next stair
    // ways | 1 | 2 | 3 | 5 | 8 | 13 |
    //  n   | 1 | 2 | 3 | 4 | 5 | 6  |

    //base case if 1 and 2
    if(n === 1) {return 1}
    if(n === 2) {return 2}

    const arr = [1, 2]

    //add the previous 2 to create the next
    for(let i = 1; i < n - 1; i++) {
        arr.push(arr[i - 1]+ arr[i])
    }

    //return the last element of the array
   return arr[arr.length - 1]




    // // if n is 1 only one way to climb
    // if(n === 1) { return 1 }

    // const dp  = new Array(n + 1)

    // // Initialize base cases:
    // dp[1] = 1; // For 1 step, there's 1 way.
    // dp[2] = 2; // For 2 steps, there are 2 ways (1 + 1 or 2).

    // // Fill the dp array for the remaining steps using dynamic programming:
    // for (let i = 3; i <= n; i++) {
    //     // The number of ways for step i is the sum of ways for step (i - 1) and step (i - 2).
    //     dp[i] = dp[i - 1] + dp[i - 2];
    //     console.log("dp[i]:" , dp[i])
    //     console.log(dp[i - 1], "+" , dp[i - 2])
    // }

    // console.log(dp)
    // //answer will be in the last cell of dp array
    // return dp[n]
};