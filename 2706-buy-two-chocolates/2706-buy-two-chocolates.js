/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    
    prices = prices.sort((a,b)=> a-b)
    //console.log(prices)
    
    
    if(prices[0]+prices[1] <= money) {
        return Math.abs( (prices[0]+prices[1]) - money )
    }   else {
        return money
    }
    
    
    
};