/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    
        //starting point
        let start = 1
        let end = n - start
        //if n = 11 start=1 end =10
        //while start and end include '0' move 1 up and 1 down
        while(start.toString().includes('0') || end.toString().includes('0')) {
            start += 1
            end -= 1
        }
        return[start,end]
};