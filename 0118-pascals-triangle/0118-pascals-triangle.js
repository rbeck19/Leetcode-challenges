/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    

    const output = [[1]]

    for(let i = 2; i <= numRows; i++) { //loop through to create rows
        if(i === 2) {
            output.push([1,1])
            continue  //move on to the next
        }

        const row = [] //create the next row

        //loop to create the new row
        for(let j = 0; j < i; j++){
            if(j === 0) { //begining 1
                row.push(1)
                continue
            } else if (j === i - 1) { //ending 1
                row.push(1)
                break //end the loop
            }
            //add previous row
            //if looking at row slot 1, add prvious row slot 0 and 1
            row.push(output[i - 2][j-1] + output[i - 2][j])
        }
        output.push(row)
    }

    return output
};