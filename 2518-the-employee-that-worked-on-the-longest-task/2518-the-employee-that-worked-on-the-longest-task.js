/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
    
    let longest = 0
    let worker = 0
    let start = 0

    for(let i = 0; i < logs.length; i++) {

        if((logs[i][1] - start) > longest){
            longest = logs[i][1] - start
            worker = logs[i][0]
        } else if((logs[i][1] - start) === longest && logs[i][0] < worker) {
            worker = logs[i][0]
        }
        start = logs[i][1]
    }

console.log(longest, worker, start)


    return worker

};