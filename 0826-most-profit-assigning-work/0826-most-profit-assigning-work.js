/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    //set up a 2 pointer of profit and difficulty with the best of matching diffculty

    let map = new Map()
    //loop through all elements of dificulty tracking the i placement
    for(let i = 0; i < difficulty.length; i++) {
        if(!map.has(difficulty[i])) {
            map.set(difficulty[i], profit[i])
        } else {
            //if there is a another diff, take the max profits
            map.set(difficulty[i], Math.max(map.get(difficulty[i]), profit[i]))
        }
    }
    //spread the map to get an array of arrays
    let difProf = [...map]
    //sort difProf to be in order of dificulty
    difProf.sort((a,b)=>a[0]-b[0])

    //loop through the difProf array and keep track of the highest profit
    //if dif 1 has a profit of 100, all dids after with less profit should take the 100 profit untill a new high is in place
    let max = 0
    for(let i = 0; i < difProf.length; i++) {
        //take the max num btw current elememt prof and the max
        max = Math.max(max, difProf[i][1])
        //set the current element prof to the max
        difProf[i][1] = max
    }

    let sum = 0
   //lets see what the worker can do
   //find what work they can with a binary search
   for(let w of worker) {
       let low = 0
       let high = difProf.length - 1
       while(low < high) {
           let mid = Math.trunc(low/2 + high/2)
           if(difProf[mid][0] > w) {
               high = mid
           } else {
               low = mid+1
           }
       }
       if(difProf[low][0] > w) {
           low--
       }
       if(low !== -1) {
           sum+= difProf[low][1]
       }
   }

    return sum
};