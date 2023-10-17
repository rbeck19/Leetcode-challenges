/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    
    let timeDiff = (new Date(date1).getTime()) - (new Date(date2).getTime())

    console.log(timeDiff)

    //let d1 = new Date(date1).getTime()
    //let d2 = new Date(date1).getTime()


    //let timeDiff = Math.abs(d1 - d2)

    //let dayDiff = Math.abs(d1 - d2) / (1000 * 3600 * 24)

    return Math.abs(timeDiff) / (1000 * 3600 * 24)

};