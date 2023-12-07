/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
   
    //start from the end, if you a hit a odd number, return everything from the 1st element to that odd number
    for (let i = num.length - 1; i >= 0; i--) {
        if(num[i] % 2 === 1) {
            return num.slice(0, i+1) 
        }
    }
    return "" //no result from the for loop, no odd numbers, return empty string



    // let largest = 0
    // let holder = 0

    // for(let i = 0; i < num.length; i++) {
    //     console.log("Looking at:", num[i])
    //     if(Number(num[i]) % 2 === 1) { //its odd
    //         holder = holder === 0 ? Number(num[i]) : holder + num[i]
    //     } else { //its a even number
    //         //check the placeholder
    //         if( Number(holder) > largest) {
    //             largest = Number(holder)
    //         }
    //         //reset holder
    //         holder = 0
    //     }
    // }

    // return largest === 0 ? "" : Number(holder) > largest ? Number(holder) : largest.toString()
    

};