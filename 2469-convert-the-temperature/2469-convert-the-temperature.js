/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    
    //let k = (celsius + 273.15).toFixed(5)
    //let f = (celsius * 1.80 + 32.00).toFixed(5)

    return [(celsius + 273.15),(celsius * 1.80 + 32.00)]

};