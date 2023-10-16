/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    // let res = [[1]];
    // for (let i = 1; i <= rowIndex; i++) {
    //     let row = [];
    //     let j = 0;
    //     while (j < i + 1) {
    //         if (j === 0 || j == i) {
    //             row.push(1);
    //         } else {
    //             row.push(res[i-1][j-1] + res[i-1][j]);
    //         }
    //         j++;
    //     }
    //     res.push(row);
    // }

    // return res[rowIndex];


    let tri = [[1]]

    for(let i = 1; i <= rowIndex; i++) {
        let row = [] // create the next row
      for(let j = 0; j <= i; j++) {
          //if creating the first or the last element in the row make it 1
          if(j == 0 || j == i) {
              row.push(1)
          } else {
            //   console.log("i:", i, "j:", j)
            //   console.log(tri[i-1][j-1])
              //push the element based on the previous row 1 before j and current j 
              row.push(tri[i-1][j-1] + tri[i-1][j])
          }
          //add new row to triangle
      }
       tri.push(row)
    }

    
    return tri[rowIndex]

};