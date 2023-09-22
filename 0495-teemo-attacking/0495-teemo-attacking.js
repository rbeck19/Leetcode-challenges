/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {

    // if(duration == 0) {
    //     return 0
    // }

    // let posion = [] 

    // for(let i = 0; i < timeSeries.length; i++) {
    //     posion.push(timeSeries[i])
    //     let pTime = timeSeries[i]
    //     for(let j = 1; j < duration; j++) {
    //         pTime++
    //         posion.push(pTime)
    //     }
    // }
    //  console.log(posion)
    // posion = [...new Set(posion)]
    // console.log(posion)
    // return posion.length


    // if(duration == 0 || timeSeries.length == 0) {
    //     return 0
    // }
    // if(duration == 1) {
    //     return timeSeries.length
    // }

    // let posion = 0

    // for(let i = 0; i <= timeSeries.length; i++) {
    //     if(posion < timeSeries[i]) {
    //         posion += duration 
    //     }
    // }
    // console.log(posion)



    let poisonTimer = 0
    let expired
    for (let time of timeSeries) {
        if (time <= expired) {
            poisonTimer += (time + duration - 1) - expired
        } else {
            poisonTimer += duration
        }
        expired = time + duration - 1
    }
    return poisonTimer




};