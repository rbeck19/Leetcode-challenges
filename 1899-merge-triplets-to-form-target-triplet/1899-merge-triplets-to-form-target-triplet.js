/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
    // hold arrays that can meet the target by max value
    const holder = []

    for(let i = 0; i < triplets.length; i++) {
        //check if the array has the target value and other values that are equal or less than target
        //check spot 0
        if(triplets[i][0] === target[0] && triplets[i][1] <= target[1] && triplets[i][2] <= target[2]) {
            holder.push(triplets[i])
        }
                //check spot 1
        else if(triplets[i][0] <= target[0] && triplets[i][1] === target[1] && triplets[i][2] <= target[2]) {
            holder.push(triplets[i])
        }
                //check spot 2
         else if(triplets[i][0] <= target[0] && triplets[i][1] <= target[1] && triplets[i][2] === target[2]) {
            holder.push(triplets[i])
        }
    }

    //take the previous and the current and take the max values of each element
    for(let i = 1; i < holder.length; i++){
        holder[i][0] = Math.max(holder[i][0], holder[i-1][0])
        holder[i][1] = Math.max(holder[i][1], holder[i-1][1])
        holder[i][2] = Math.max(holder[i][2], holder[i-1][2])
        //check if the new array holds the target values
        if(holder[i].every((element, index) => element === target[index])){
            return true
        }
    }
   //if holder only has 1 array, the loop above is never ran, check the array if its equal to the target
    if(holder.length === 1) {
        if(holder[0].every((element, index) => element === target[index])){
            return true
        }
    }
    //everything else has failed, return false
    return false
};