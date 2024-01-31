/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temp) {



  const result = [];
  const stack = [];

  for (let i = 0; i < temp.length; i++) {
    while (stack.length > 0 && temp[i] > temp[stack[stack.length - 1]]) {
      const topIndex = stack.pop();
      result[topIndex] = i - topIndex;
    }

    stack.push(i);
  }

  // Set remaining elements that don't have a higher number to 0 spaces
  for (const index of stack) {
    result[index] = 0;
  }

  return result;





    //exceeds time for its O(n^2)
            // let result = []
            // //nested loop
            // for(let i = 0; i < temp.length; i++) {
            //     //looking at temp[i]
            //     let spaces = 0
            //     //loop through the rest until you find a higher a number
            //     for(let j = i+1; j < temp.length; j++) {
            //         if(temp[j] > temp[i]) {
            //             //take difference 
            //             spaces = j - i
            //             //end the search
            //             break
            //         }
            //     }
            //     //push the space number to the array 
            //     result.push(spaces)
            // }
            // return result
};