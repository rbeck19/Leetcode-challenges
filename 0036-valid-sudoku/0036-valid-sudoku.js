/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    //check valid Row
    for(let i = 0; i < 9; i++){
        //create a Set object per row [i]
        const set = new Set()
        for(let j = 0; j < 9; j++) {
            const cell = board[i][j]
            //ignore '.'
            if (cell === ".") continue
            //if set has the value its a double  invalid suduko
            if (set.has(cell)) return false
            set.add(cell)
        }
    }
    
    //check valid column
    for(let i = 0; i < 9; i++){
        const set = new Set()
        for(let j = 0; j < 9; j++){
            const cell = board[j][i]
            if (cell === ".") continue
            if (set.has(cell)) return false
            set.add(cell)
        }
    }
    
    //check 3x3 cells
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            const set = new Set()
            for(let k = 0; k < 3; k++){
                for(let l = 0; l < 3; l++){
                    const cell = board[3 * i + k][3 * j + l]
                    if (cell === ".") continue
                    if (set.has(cell)) return false
                    set.add(cell)
                }
            }
        }
    }
    
    //---------------------
    
    const rows = []
    const cols = []
    const boxes = []
    
    for(let i = 0; i < 9; i++){
        rows.push(new Set())
        cols.push(new Set())
        boxes.push(new Set())
    }
    
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++) {
            const cell = board[i][j]
            if(cell === ".") continue
            const boxNum = 3 * Math.floor(i/3) + Math.floor(j/3)
            if(rows[i].has(cell) || cols[j].has(cell) || boxes[boxNum].has(cell)) return false
            rows[i].add(cell)
            cols[j].add(cell)
            boxes[boxNum].add(cell)
        }
    }
     // console.log(rows)
     // console.log(cols)
     // console.log(boxes)
    
    
    
    
   return true
};