/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = [[1]];
    for (let i = 1; i <= rowIndex; i++) {
        let row = [];
        let j = 0;
        while (j < i + 1) {
            if (j === 0 || j == i) {
                row.push(1);
            } else {
                row.push(res[i-1][j-1] + res[i-1][j]);
            }
            j++;
        }
        res.push(row);
    }

    return res[rowIndex];
};