/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {


    let hashmap = {}
    let count = 0

    for( let [a,b] of dominoes) { //loop through array with [a,b] representing domioes value
        let key = a<b ? `${a}${b}` : `${b}${a}`  //set key at string on sorted numbers
        if(!hashmap[key]) {  //create key 
            hashmap[key] = 1
        } else {    //key exisit 
            hashmap[key] += 1
            if ( hashmap[key] === 2 ) {  // only 1 pay
                count += 1
            } else { //
                count -= ( hashmap[key] - 1) * (hashmap[key] - 2) / 2  //remove number of past pair mathces
                count += ( hashmap[key] * (hashmap[key] - 1) / 2 ) //add the new pair number
   
            }
        }
    }
    return count



//nested loop exceedes time limit
// let count = 0
//     for(let i = 0; i < dominoes.length; i++) {
//         //looking at dominoes[i]
//         for(let j = i+1; j < dominoes.length; j++) { //go through all items after i
//             if(dominoes[i][0] === dominoes[j][0] && dominoes[i][1] === dominoes[j][1] || dominoes[i][0] === dominoes[j][1] && dominoes[i][1] === dominoes[j][0]) {
//                 count += 1
//             }
//         }
//     }
// return count

};