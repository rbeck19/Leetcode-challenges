/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {

    const mod = Math.pow(10, 9) + 7;
    const stack = [];
    let minSum = 0;

    for (let i = 0; i <= arr.length; i++) {
        while (stack.length > 0 && (i === arr.length || arr[i] < arr[stack[stack.length - 1]])) {
            const j = stack.pop();
            const k = stack.length > 0 ? stack[stack.length - 1] : -1;
            minSum = (minSum + arr[j] * (i - j) * (j - k)) % mod;
        }
        stack.push(i);
    }
 
    return minSum;






    //     //Exceeds Time but works
    // let output = 0
    //         //track lowest by highest index
    // for(let i = 0; i < arr.length; i++) {
    //     //console.log("Starting with: i=", arr[i])
    //     //add the first use element
    //     output += arr[i]
    //     //track the lowest num
    //     min = arr[i]
    //     for(let j = i+1; j < arr.length; j++) {
    //         if( min > arr[j]) { //new element is smaller
    //             min = arr[j]
    //             output += min
    //         }  else { //current min is smaller
    //             output += min
    //         }
    //     }
    // }
    // //return output >= 1000000007 ?  output % 1000000007 : output
    // return output % (Math.pow(10,9)+7)
};