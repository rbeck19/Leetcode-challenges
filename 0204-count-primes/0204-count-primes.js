/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    
    let arr = []

    //helper function
    const isPrime = num => {
        for(let i = 0; i < arr.length && arr[i] <= Math.sqrt(num); i++) {
            if(num % arr[i] === 0) {
                return false
            }
        }
        return true
    }

    for(let i = 2; i < n; i++) {
        if(isPrime(i)) {
            arr.push(i)
        }
    }

    return arr.length


    // let output = 0
    // let primeCheck = 2

    // let prime = function(number) {
    //     for(let i = 2; i <= number - 1; i++) {
    //         if(number % i == 0) {
    //             return false
    //         }
    //     }
    //     return true
    // }

    // while(primeCheck < n) {
    //     if(prime(primeCheck)) {
    //         output += 1
    //     }
    //     primeCheck += 1
    // }

    // return output
};