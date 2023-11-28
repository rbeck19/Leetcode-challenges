/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {


    let hashmap = {}
    let count = 0

    for( let [a,b] of dominoes) {
        let key = a<b ? `${a}${b}` : `${b}${a}`
        if(!hashmap[key]) {
            hashmap[key] = 1
        } else {
            hashmap[key] += 1
            if ( hashmap[key] === 2 ) {
                //console.log("count add 1")
                count += 1
            } else {
                //console.log("in the else")
                count -= ( hashmap[key] - 1) * (hashmap[key] - 2) / 2 
                count += ( hashmap[key] * (hashmap[key] - 1) / 2 )
   
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