/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    //number is not long enough
    n = n.toString()
    if(n.length < 4) {
        return n
    }

    let temp = []
    count = 0
    //work back, add the number to the array
    //if count is %3  then add a dot as long as its not the n[0]
    for(let i = n.length - 1; i >= 0; i--) {
        temp.push(n[i])
        count += 1
        if(count % 3 === 0 && i != 0) {
            temp.push(".")
        }
    }
    //reverse the array and join 
    return temp.reverse().join("")

};