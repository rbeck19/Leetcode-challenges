/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    
    let cells = []

    for(let row = 0; row < rows; row++) {
        for(let cel = 0; cel < cols; cel++){
            let dist = Math.abs(rCenter - row) + Math.abs(cCenter - cel)
            cells.push({
                r: row,
                c: cel,
                d: dist
            })
        }
    }

    //sort by d
    cells.sort((a,b) => a.d - b.d)

    return cells.map(cell => [ cell.r, cell.c ])


};