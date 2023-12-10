/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    
    //creates a new array with 0 placeholders
    // Rows:  {length: matrix[0].length}
    // Collumns  () => new Array(matrix.length).fill(0)
    const result = Array.from({length: matrix[0].length}, () => new Array(matrix.length).fill(0))

    for(let i = 0; i < matrix.length; i++) {
        //looking at nested array value
        for(let j = 0; j < matrix[i].length; j++) {
            result[j][i] = matrix[i][j]
        }
    }

    return result

};