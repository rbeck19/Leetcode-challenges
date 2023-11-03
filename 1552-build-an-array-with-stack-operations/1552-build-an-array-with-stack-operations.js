/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    
    const output = []
    const words =[]
    let stream = 1  //work from stream to n for number range
    let index = 0   //track the target index you want to match
    while ( stream <= n) {
        //the output is now the same as the target
        if(target.length === output.length) {
            break
        }

        output.push(stream)
        words.push("Push")
        if (target[index] === stream) {
            index += 1
        } else {
            output.pop()
            words.push("Pop")
        }
        console.log(words)
        console.log(output)
        stream++
    }

    return words

};