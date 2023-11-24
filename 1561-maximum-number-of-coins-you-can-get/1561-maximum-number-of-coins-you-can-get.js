/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    
    // piles = piles.sort((a,b)=>a-b)
    // //console.log(piles)
    // //let alice = []
    // let me = []
    // //let bob = []

    // while(piles.length > 0) {
    //     //alice.push(piles[piles.length-1]) //move to alice
    //     piles.pop()
    //     if(piles.length > 0) {   //move to me
    //         me.push(piles[piles.length-1])
    //         piles.pop()
    //     }
    //     if(piles.length > 0) {   //move to bob
    //         //bob.push(piles[0])
    //         piles.shift()
    //     }
    // }
    // answer = 0
    // me.map((element)=> answer += element)
    // return answer


    piles = piles.sort((a,b)=>a-b)
    let startIndex = 0
    let meIndex = piles.length - 2
    let me = 0
    
    while( startIndex < meIndex) {
        me += piles[meIndex]
        startIndex += 1 //move up one
        meIndex -= 2 //move back two
    }
    return me
};